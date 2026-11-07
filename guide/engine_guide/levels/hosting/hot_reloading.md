# Hot Reloading

## Summary

Hot reload rebuilds one module and swaps it in while the project keeps running. Everything happens at the start of an update, and an attempt that fails at any point leaves the running project exactly as it was.

This document describes reloading a whole module: an extension, or the project itself. Replacing a single `#[pill_hot]` function without reloading its module is a different operation called a **hot patch**, and it is not covered here.

Each build of a module that the host loads is called a **generation**. A reload replaces the current generation with a new one, and the replaced generation is **retired**.

## At a glance

| Piece              | Where it lives                      | Its job                                                             |
| ------------------ | ----------------------------------- | ------------------------------------------------------------------- |
| File watcher       | `watcher.rs`                        | notices saves and bumps that module's counter                       |
| Module slot        | `extension.rs`, `project_module.rs` | keeps one module's current DLL, retired DLLs and registration notes |
| Build runner       | `build_runner.rs`                   | runs cargo, cancels it on a newer save, stages the built DLL        |
| Loader             | `native_library.rs`                 | copies the DLL to a private path, loads it, checks its ABI version  |
| Reload transaction | `reload.rs`                         | the ordered swap, shared by the project and every extension         |
| Reload pass        | `runtime.rs`                        | runs at the start of every update and decides what reloads          |

```
  you save a file
        │
        ▼
  watcher bumps a counter          (no reload work happens here)
        │
        ▼
  start of the next update ──► build ──► load a private copy and check it
                                            │
                                            ▼
                                   swap engine state, in a fixed order
                                            │
                              success ──────┴────── failure
                                 │                    │
                        new DLL current          old DLL keeps running
                        old DLL retired
```

## What can a module put into the world?

A module's registration function adds three kinds of things, and a reload has to deal with each one differently.

| Kind       | What it is in the world                                                     | How it is registered                            | What a reload does with it                                                   |
| ---------- | --------------------------------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------- |
| Component  | data attached to entities: position, health, a mesh reference               | `World::register_component::<T>()`              | re-registers it, and converts stored values if its layout changed            |
| Resource   | one value for the whole world: settings, a clock, the input state           | `World::register_resource` / `insert_resource`  | re-registers it, and converts the stored value if its layout changed         |
| Asset type | a type the world holds many values of, loaded from files or created in code | `World::register_asset::<T>()` and its variants | re-declares it and keeps the stored values; asset values are never converted |

Two finer distinctions matter later.

### What is a persistable type, and what are its serializers?

A component or a resource is either **plain** or **persistable**. A persistable type also implements `serde`'s `Serialize` and `Deserialize`, and has a `Default` value.

When a module registers a persistable type, it hands the engine a few small functions compiled for that exact type:

- one that reads a stored value and writes it out as JSON,
- one that builds a new value from that JSON,
- one that puts the built value back into engine's archetype storage.

These functions are the type's **persistable serializers**. The engine keeps them in the world's **persistence registry**, looked up by the type's name.

The serializers have two uses. They let a value be saved to a `.scene` file and loaded back. They also make **migration** possible: when a type's layout changes during a reload, the engine reads each old value to JSON with the old serializer, and builds the new value from that JSON with the new one. A plain type has no serializers, so the engine has no way to convert it.

> **Example:** a persistable `Health { current: f32, max: f32 }` registers three functions under the name `Health`. The first turns a stored `Health` into `{"current": 80.0, "max": 100.0}`. The second builds a `Health` from that text. The third writes the built `Health` into the storage that holds all `Health` values.

### What is a schema hash?

**Every persistable component and resource type gets a schema hash.** The engine computes a number from the type's **layout** (its fields, their order and their types) and not from their values. When module is being reloaded, the reload operation compares the new hash with the old one. Equal means the stored bytes are still valid. Different means the type was reshaped and its data has to be converted, which is the migration described above.

> **Example:** you add a `shield: f32` field to a persistable `Health` component. Its schema hash changes, so the reload operation asks the engine to convert every stored `Health` component, and the new field starts at its default. Renaming a local variable does not change the hash, so no conversion runs.

## What does "layout" mean?

A layout is how a type's fields sit in memory: how many bytes the whole value takes and where each field starts inside it.

```rust
struct Health { current: f32, max: f32 }                  // 8 bytes: current at 0, max at 4
struct Health { current: f32, max: f32, shield: f32 }     // 12 bytes, and shield at 8
```

The engine stores components in packed blocks of bytes, one block per component type per archetype. It never names `Health`; it knows the layout and the functions that were registered with it. When the struct changes, the bytes already in those blocks keep the old shape. Reading them with the new struct definition would give wrong values, and dropping them through the new code could free the wrong memory.

Migration is what fixes this. It rewrites the bytes that are already stored so that they match the new struct definition (layout), and it does so in memory, during the reload.

Migration is therefore not a save feature. It runs after a plain code edit, even if the project has never saved anything: no `.scene` written with `save_scene`, and no save data of its own. The serializers are reused only because they are the code that knows how to read the old shape and produce the new one.

## Why does a reload need a whole procedure?

A reload looks like "replace one DLL", but three facts make that unsafe.

**A loaded DLL cannot be overwritten.** On Windows the file is locked while it is loaded. On Linux the file is not locked, but writing into a loaded `.so` changes code that is running, and `dlopen` may return the already loaded library for the same path. On both, the next build has to write somewhere else, and the DLL that is still running must not be touched.

**The engine holds function pointers into the DLL.** Archetype storage columns, resource destructors and asset columns contain addresses of code compiled into the module that created them. If that DLL went away, calling one of those addresses would crash the host.

**A module's own types change.** A changed struct has a new layout, and it also gets a new Rust type identity (`TypeId`), so the engine sees it under a new component id. The entities that already exist still hold the old layout under the old id.

The procedure exists to handle those three facts in order: build next to the running DLL, check the new one before using it, then move engine state over in an order that never leaves a live pointer aimed at code that is gone.

### When does a rebuild give a type a new id?

When the type's definition changes, not on every rebuild.

A component id for an ordinary Rust type is its `TypeId`. Rust computes a `TypeId` from the type itself, not from the rest of the module's code, so a rebuild keeps the id unless the struct changed:

| What you edit and rebuild                     | `TypeId` of `Health` |
| --------------------------------------------- | -------------------- |
| the body of an ECS system or other function   | the same             |
| a new, unrelated function or type             | the same             |
| a field of `Health` (added, removed, changed) | **new**              |

A **shared** type (one that declares a fixed `shared_name`) is different: its id is computed from that name, so it keeps the same id even when its definition changes.

The table shows what rustc 1.95 does, checked by rebuilding a test crate. Rust does not promise how `TypeId` is computed, so the engine never relies on it: it matches types across a reload by their name, and it handles both a kept id and a new one.

### Why does the engine need function pointers into a module at all?

The engine core is compiled once and never knows the project's types. To destroy a `Health` value correctly, it needs code compiled for `Health`, and that code exists only in the DLL that declared `Health`.

So when a module registers a type, it hands the engine pointers to the few functions the engine cannot write itself. This set of pointers for one type is called a **function table**. Every place in the engine that holds values of a type keeps a function table next to them, because it cannot handle the bytes without one.

Moving and copying are not in it. Moving a Rust value is a plain byte copy, so the engine does that itself with `memcpy`, without any code from the module. What the function table holds depends on where the values are stored:

| Where the values are stored               | What the function table holds                                                                                                                                                                                       |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| a component storage column (`ColumnOps`)  | `drop_range`: run the destructors of a range of values. Beside it, `trivial_drop` (a flag, not a pointer) says the type has nothing to destroy, so the engine can skip the call.                                    |
| an asset column (`ErasedVecStorageOps`)   | `drop_range`, as above; `up_ref` and `up_mut`: turn a stored value into a `&dyn Asset` or `&mut dyn Asset`; `take_boxed`: move one value out of the column into a `Box<dyn Asset>`                                 |
| a resource                                | the value's destructor                                                                                                                                                                                              |

### What exactly is stored, and for how long?

| What is stored                                             | Where it lives                                               | How long it stays                          |
| ---------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| Component values                                           | storage columns, inside archetypes                           | until the component or its type is removed |
| The **current** function table of each component type      | the world's storage factories, one per component id          | replaced every time the type is registered |
| A **copy** of that function table                          | inside every storage column of that type                     | as long as the column exists               |
| Resource values, each with its own destructor              | one entry per resource id                                    | until the resource is dropped or replaced  |
| Asset values, in one asset column per type, with its table | `AssetManager`, a resource that is never removed by a reload | for the life of the process                |
| Persistable serializers                                    | the persistence registry, by type name                       | replaced every time the type is registered |

An **asset column** is the asset version of a storage column: one growable array that holds every value of one asset type, for example every `Mesh`. `AssetManager` lives in the engine core and does not know `Mesh` either, so each asset column needs its own function table for the same reason a storage column does.

### Why does the engine re-point function tables on every reload?

Because each column keeps its own **copy** of the function table, and a copy does not update itself when a newer generation registers the type.

There is only ever one current function table per component id: the one in the storage factory, from the newest registration. A storage column, however, copies the function table when the column is created and then keeps that copy. When a new generation registers `Health` again, the factory gets the new table, but every existing `Health` column still holds the copy from the generation that created the column. That may be a generation from several reloads ago.

The re-pointing pass (`rehome_native_columns`, with `rehome_resources` and `rehome_assets` for resources and asset columns) walks over every column and replaces its copy with the current function table. After the pass, every column it could reach calls into the newest DLL. Old copies are not kept around for later use; the pass overwrites them.

> **Example:** generation 1 creates the `Health` column. Generations 2 and 3 register `Health` again, but they never create a new column, because the column already exists. Without re-pointing, the column would still call generation 1's drop function. Once the host releases generation 1, the next despawn of an entity with `Health` would jump into freed memory and crash. With re-pointing, the column has called generation 3's code since generation 3 loaded.

One case is handled differently on purpose. A type whose layout changed still has old bytes in its column. Those bytes must be read and destroyed by the **previous** generation's functions, not the new ones. See the next section for how the engine finds them.

### How does the engine pick the old function table when the layout changed?

It never has to choose from a pile of tables. Every function table is stored under a fixed key, and there are at most two for one type during a reload: the current one and the previous one. Which key holds the previous one depends on whether the type's id changed.

**The id changed** (an ordinary type whose definition changed). The old id and the new id are different keys, so the factories hold both entries for a while: the old id still holds the previous generation's function table, and the new id holds the new one. The old columns are stored under the old id, so the re-pointing pass gives them the old id's table, which is the previous generation's. Migration reads the old values through it and moves each entity to the new id.

**The id stayed the same** (a shared component, whose id comes from its name). There is only one factory entry, and the new registration overwrites it. Just before it does, the engine moves the previous function table into a separate slot for that id, `retired_native_storage_ops`. The re-pointing pass then gives the old column the **new** table, so migration explicitly puts the table from `retired_native_storage_ops` back on the column before it destroys the old values.

The old serializers are kept the same way: step 1 of the swap copies them out by type name before the new registration replaces them.

These extra entries are temporary. When the old registration is retired (`retire_registration`), its factory entry and its `retired_native_storage_ops` slot are removed.

> **Example:** you add `shield` to an ordinary `Health` component. Generation 1 registered `Health` as id A; generation 2 registers it as id B. During the swap, the factory for A still holds generation 1's function table, and the factory for B holds generation 2's. Migration reads each old `Health` through A's table, writes a new `Health` under B, and destroys the old value with generation 1's `drop_range`. Then A's registration is retired.

The pass only fixes pointers the engine knows about. That is why old DLLs are still kept for a while afterwards; see [Why does the host keep old DLLs loaded?](#why-does-the-host-keep-old-dlls-loaded)

## What happens when you save a source code file?

1. **The watcher notices the save.** Each module has its own watcher on its source folder. A single save produces several file system events, so the watcher waits for the burst to stop (60 milliseconds by default, `PILL_WATCH_DEBOUNCE_MS` to change it) and treats it as one change. Files inside `target/`, `bin/` and `obj/` are ignored, as are editor temporary files such as `foo.rs~`.
2. **The watcher bumps a counter.** This is all the watcher thread does. It never builds, loads or touches engine state, which is why any DLL can be swapped at any moment without a thread running inside it.
3. **The next update sees the counter.** At the start of the update, before any ECS system runs, the host compares that counter with the value it last handled. A difference means "this module has an edit waiting".
4. **The module is built.** Cargo runs in the engine's workspace. The built DLL is copied into a private hot-load folder so the loaded generation is never the file cargo writes.
5. **The new DLL is loaded and checked.** It is copied to a path only this generation uses, loaded from there, and (for an extension) asked which ABI version it was compiled against. A mismatch stops the reload before the module is handed anything.
6. **Engine state is moved over.** Only now does the host touch the running project: it removes this module's ECS systems, runs the new generation's registration, converts changed component layouts, and points stored function tables at the new DLL.
7. **The old DLL is retired.** It stays loaded for a while, because pointers into it may still exist. See [Why does the host keep old DLLs loaded?](#why-does-the-host-keep-old-dlls-loaded).

> **Example:** you change an ECS system in `examples/local/project_rs` and save.
>
> 1. The watcher bumps the project's counter after the save settles.
> 2. At the start of the next update, the host builds the project DLL.
> 3. The new DLL is loaded from a private copy.
> 4. The host removes the project's ECS systems, runs the new registration, and migrates any component whose layout changed.
> 5. The next update runs the new code. The entities on screen are the same ones as before.

## In what order does the host move the engine state over?

The order is fixed in `ReloadTransaction::commit` in `reload.rs`. Reordering it turns into a crash that appears two reloads later, not immediately.

| Step | What it does                                                                    | What would go wrong if the step were skipped                                                                                                                         |
| ---- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Copies out the old generation's serializers and resource list                   | the new registration replaces them by name, and migration would have no way to read the old bytes                                                                    |
| 2    | Removes only this module's ECS systems                                          | the old ECS systems would keep running with code that is about to be retired                                                                                         |
| 3    | Runs the new generation's registration                                          | nothing new would exist to run                                                                                                                                       |
| 4    | On a failed registration: registers the old DLL again, restores its ECS systems | a broken build would take the working module down with it                                                                                                            |
| 5    | **Frees** the components and resources the new generation no longer registers   | the values would stay in memory with no code that can read them, and freeing them later would call destructors in a released DLL                                     |
| 6    | Re-points storage columns, resources and asset columns at the new DLL           | releasing the old DLL later would leave dangling function pointers                                                                                                   |
| 7    | Converts changed component and resource layouts, type by type                   | the new code would read old bytes with the new struct definition                                                                                                     |
| 8    | Frees columns whose component id no longer has a registration                   | those columns would keep calling the old DLL's code; see [`columns_without_factory`](#how-does-columns_without_factory-find-the-columns-the-re-pointing-pass-missed) |
| 9    | Retires the old DLL into the graveyard                                          | unloading it now would break anything still holding a pointer into it                                                                                                |

### Why does step 5 free data instead of keeping it?

Step 5 is the step that frees that data. The question is only **when** it may run.

Freeing a component or a resource calls its destructor, and the destructor is code in the DLL that registered the type. If the new generation stopped registering a type, no newer code exists for it, so the destructor in the old DLL is the only one there is. Step 5 runs while that DLL is still loaded, so the call is safe. If the values were left in place instead, nothing could read them, and the first attempt to free them after the old DLL is released would crash.

Two kinds of type are not freed, because their data is still in use:

- **A type the new generation still registers as plain.** Only its persistable serializers are gone; its values are still read by the new code.
- **A type another module also registers.** Several modules can link the same crate and declare the same shared component. Each of them registers it, so only the last one to stop declaring it may free the storage. The host gathers the other live modules' component names before it decides.

## What is data migration, and how does the engine perform it?

Migration converts values stored in the engine from a module's old layout to its new one, during the reload. It runs only for types whose schema hash changed.

The engine cannot do this on its own: the code that knows the old shape is the old DLL, and the code that knows the new shape is the new one. So the swap uses both.

For a **component**:

1. Before the swap, the host copies the old generation's serializer for each persistable type.
2. After the new registration, it compares schema hashes. Types with equal hashes are left alone: their columns keep their bytes, their allocations and their change ticks.
3. For each changed type, the old serializer reads one value out of the old bytes and the new deserializer builds the new value. Fields that still exist keep their values, a field added in the new build arrives at its default, and a field removed is dropped.
4. The value is written back in the new layout. When the type kept its id (a shared component, whose id comes from its name), the column is rebuilt in place. When the type got a new id (an ordinary type whose definition changed), the entities move to an archetype that has the new component.

For a **resource** the same idea is much smaller, because a resource is one value instead of a column of rows: the old serializer reads it, the value travels as JSON, and the new restorer merges it over the new type's default.

Three rules hold for both paths.

- **Types are matched by their persistence name**, never by their runtime identity, because a type whose definition changed gets a new `TypeId`.
- **The old serializer must still be loaded.** Migration runs before the retiring DLL can be released from the graveyard; read the old bytes after that and the code is gone.
- **Only values that existed before the swap are converted.** Anything the new registration created already has the new layout.

If no persistable component changed its layout, the whole step is skipped and the host logs `schema unchanged for all persistable component types - fast path`. That is the common case.

> **Example:** `Health { current, max }` becomes `Health { current, max, shield }`. The hash differs, so the host reads each entity's old 8 bytes through the old DLL and writes the new 12 bytes through the new one. `shield` starts at `0.0`. A component whose struct did not change is not touched at all.

## What happens to assets during a reload?

Asset values stay in memory exactly as they are. A reload never reads asset files again and never converts asset values. What depends on the asset type is whether the new code can still **reach** those values.

### Where do asset values live?

An asset is a value in memory, not a file. All asset values live in `AssetManager`, a resource in the world, with one asset column per asset type. A value gets there in one of two ways:

- it is **loaded from a file**, for example with `World::load_asset::<Mesh>(path)`,
- it is **created in code**, for example with `assets.add(mesh)` for a mesh the project builds itself.

After that, both kinds are the same: the value sits in its column, and a `Handle<Mesh>` points at its slot. A file, when there is one, is only where the value came from. Nothing in a reload needs the file to still exist.

> **Example:** the project builds a terrain `Mesh` in code and keeps its `Handle<Mesh>` in a component. You edit an unrelated ECS system and save. The project reloads, the mesh stays in `AssetManager`, the component keeps its handle, and the next update draws the same terrain. No file was involved at any point.

### Why are some asset types reachable after a reload and others not?

Because an asset column is found by a key, and only a **shared** asset type has a key that cannot change.

A shared asset type declares a fixed name (`shared_name`), as the renderer's `Mesh` and `Material` types do. Its column is keyed by that name, so every generation of every module finds the same column. A type that is **not shared** is keyed by its `TypeId`, which stays the same across a rebuild and changes when the type's definition changes (see [When does a rebuild give a type a new id?](#when-does-a-rebuild-give-a-type-a-new-id)).

### What happens when an asset type's definition changes?

Nothing is dropped and nothing is recreated. The engine has no migration for asset values, so the result depends only on which column the new code finds:

| Asset type and edit                                 | The column after the reload                         | Existing values and their handles                                                                                       |
| --------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| not shared, definition unchanged                    | the same column, re-pointed at the new DLL          | keep working                                                                                                            |
| not shared, definition changed                      | a **new, empty** column under the new `TypeId`      | stay in the old column, unreachable and never freed until the process exits; handles look in the new column and return `None` |
| shared, same size and alignment                     | the same column, re-pointed at the new DLL          | still reachable, but read with the new definition and never converted (see below)                                      |
| shared, different size or alignment                 | refused: registration panics, the reload rolls back | untouched; the previous generation keeps running                                                                        |

The third row needs care. For a shared asset type, the engine checks only the size and alignment of the new definition against the column. If you reorder fields or change a field's type without changing the size, the old bytes are read as the new type without any conversion, and the values are wrong.

> **Example:** the project defines its own `Terrain` asset (not shared) and builds one in code at start-up. You add a `roughness: f32` field and save. After the reload, `Terrain` has a new `TypeId`, so it gets a new, empty column. The old terrain is still in memory, in the old column, but the handle the project kept returns `None`.

### How does project code get the values back?

The engine does not do it for you. The project has to notice that a handle no longer resolves and create the value again:

- **A value loaded from a file:** load it again by path, for example with `World::load_asset::<Terrain>(path)`. The new generation decodes the file with the new definition.
- **A value created in code:** run the code that created it again. The simplest pattern is to check the handle where the value is used and rebuild it when it is gone:

```rust
// Rebuild the terrain when its handle no longer resolves, for example after a
// reload that changed the `Terrain` definition.
if assets.get(terrain_component.terrain).is_none() {
    terrain_component.terrain = assets.add(build_terrain(&terrain_settings));
}
```

The abandoned values in the old column stay in memory until the process exits. In a long session with many such edits, that memory adds up.

### What about importers?

A module can also register an **importer** for an asset type: the functions that turn a source file such as a `.png` into an asset value. Those functions are code in the module's DLL, so the engine must stop calling them before that DLL is released.

Each generation registers its importers again and claims them through a small marker resource. When a module stops registering an importer, step 5 frees that marker while the old DLL is still loaded, and step 6 removes the importer from the import registry in the same reload. A dead importer is never called.

## Why does the host keep old DLLs loaded?

Because the re-pointing pass only fixes the pointers the engine knows about, and a running project can hold pointers into a DLL that the engine has no way to find.

### Which pointers are still in use after the swap?

There are two groups.

**Pointers the engine knows about, but still needs during the swap.** Migration reads old values with the old serializers and destroys old bytes with the old drop functions. Step 5 and step 8 call destructors from the old DLL. All of this happens after the new DLL is loaded, so the previous generation has to outlive its own swap.

**Pointers the engine cannot see.** The engine stores component and resource values as raw bytes. It knows how many bytes a value has, not what those bytes mean. If a value contains a pointer into the module's DLL, the engine has no way to find it, and Rust keeps no record at run time of where such pointers are. Common cases:

- a `&'static str` literal: the text itself is stored inside the DLL,
- a `Box<dyn Trait>`: the table of methods it calls through lives in the DLL that created the box,
- a function pointer or a closure kept in a component or a resource,
- a hot patch redirect that still points at the old code,
- an asset column of a type that no generation declares again, which keeps its old function table.

> **Example:** generation 1 inserts a resource `Greeting { text: &'static str }` holding `"hello"`. The bytes of `"hello"` are inside generation 1's DLL, and the resource only stores their address. Two reloads later, generation 1 is released. The re-pointing pass did replace the resource's destructor, but it never saw the address inside the value. The next read of `Greeting.text` reads freed memory.

So keeping old DLLs is a **safety margin, not a guarantee**. A pointer that lives longer than the graveyard keeps its DLL still dangles. The safe pattern is to store owned data (`String` instead of `&'static str`) in anything that outlives a reload.

### How does the graveyard decide when to release a DLL?

A retired DLL goes into a per-module list called the **graveyard**. The default limit is two retired generations per module (`MAX_GRAVEYARD_GENERATIONS`). When a third would be added, the host releases the oldest one: the operating system unloads it, and the host deletes its private copy on disk.

Before it releases anything, the host asks the world whether any storage column still has no registration behind it (`columns_without_factory`). Such a column still calls code from whichever generation created it, possibly the oldest one. If the count is not zero, the release is postponed and a warning is logged.

The count is normally zero at this point, because step 8 of the same swap has just freed those columns. The check is a safety net for a column that step 8 could not free. It counts such columns anywhere in the world, not only this module's, so it errs on the side of keeping a DLL.

### How large is the leak when a release keeps being postponed?

One whole DLL per reload of that module, for as long as the host keeps running.

A postponed release is tolerated once or twice. After three postponed releases in a row for the same module (`MAX_DEFERRED_EVICTIONS`), the host logs an error instead of a warning, because at that point nothing is freeing the columns, and every further reload adds one more DLL that can never be released.

The size of one leaked DLL is roughly the size of its file, because the operating system maps the file into the host's memory (Windows and Linux both do this):

| Module (example)               | Approximate size of one generation |
| ------------------------------ | ---------------------------------- |
| a small extension              | a few MB                           |
| the renderer module, debug     | about 20 MB                        |
| the renderer module, optimized | about 11 MB                        |

Windows and Linux read pages of a mapped DLL into physical memory only when they are used, so the physical memory cost is usually lower than the file size. The address space, the DLL's own static data and its private copy on disk are kept in full. Over a long session this adds up: fifty reloads of a 20 MB module keep up to 1 GB of DLLs mapped.

### Why does the renderer keep every old DLL?

The renderer module is the one deliberate exception: its retired DLLs are never released. The graphics library, the driver and the logging registry all keep state that points into the DLL that created it, and releasing one hangs the update loop. One extra mapped DLL per renderer reload, the leak described above, is the price.

| Module             | Retired DLLs kept | Why                                                        |
| ------------------ | ----------------- | ---------------------------------------------------------- |
| Project            | 2                 | the default; the previous generation must survive the swap |
| Extension          | 2                 | same default, tracked separately per module                |
| Renderer extension | all               | releasing any of its DLLs hangs the update loop            |

## What is a storage column, and why does it need a function table?

A storage column is the block of bytes the world uses to hold one component type for one group of entities.

The engine works with raw bytes on purpose: code in `pill_engine_core` moves `Health` values around without ever naming `Health`. It can only do that because registration hands it two things together:

```
   registration inside the module's DLL
        │
        ├─ the layout: size and alignment of the component
        └─ a function table: the operations the engine may perform on those bytes
                    │
                    ▼
   world.storage_factories[component id]      the current table for that id
                    │
                    │  rehome_native_columns copies it into every column
                    ▼
   archetype.component_storages[component id] the column, holding the values
```

So the relationship is: **the factory holds the current function table for each component id, and every column with that id keeps a copy of it.** That copy is what the engine calls when it destroys values.

### How does `columns_without_factory` find the columns the re-pointing pass missed?

It compares two lists the world already keeps, so nothing extra has to be tracked:

- the component ids that archetypes still store columns for,
- the component ids that have a storage factory, which means a current registration.

An id that appears in the first list but not in the second is a column with no registration behind it. The re-pointing pass looks up each column's id in the factories. When the id has no factory, the pass has nothing to copy, skips the column, and the column keeps the function table it had. `columns_without_factory` counts exactly those columns. It only counts columns of Rust types; columns described by a C# manifest store no function pointers.

Such a column appears only after a type got a new id **and** its old registration was retired while some values were still stored under the old id. Retiring a registration removes its factory entry. Normally migration moves or frees every value under the old id first, so the count is zero.

> **Example:** generation 1 registers `Health` as id A, and entities with `Position` and `Health` live in an archetype that stores columns for `Position` and A. You add a field, so generation 2 registers `Health` as id B.
>
> 1. For a while the factories hold **both** entries: A with generation 1's function table, B with generation 2's. Columns under A still have a factory, so `columns_without_factory` does not count them.
> 2. Migration moves each entity's `Health` from A to B.
> 3. A's registration is retired, and its factory entry is removed.
> 4. If an archetype still stores a column for A at this point, for example because migration skipped an entity, that column has no factory, and `columns_without_factory` returns 1.
> 5. Step 8 (`drop_columns_without_factory`) removes the old `Health` from those entities. That destroys the values through the column's own function table, which points into generation 1, and generation 1 is still loaded at that moment.

The reload uses the same count twice: as the cleanup in step 8, and as the check before the graveyard releases a retired DLL.

## What is the ABI version, and what does it catch?

The ABI version is a hand-maintained number for the **contract between the host and a module DLL**: the set of rules both sides must follow for the host to call into the DLL safely.

That contract covers:

- **which functions the DLL exports, and under which names**: `pill_module_init`, `pill_module_abi_version`, and the descriptor exports such as `pill_value_type_descriptor_count` and `pill_copy_value_type_descriptors`,
- **what each function takes and returns**: for example, `pill_module_init` takes a pointer to an `EngineApi` and returns a status number,
- **the layout of the data passed through those functions**: the fields of `EngineApi` and of every descriptor the host copies out of the DLL.

So it is more than names and parameters: a change to the fields of a struct that crosses this boundary breaks the contract too. A developer who changes any of these bumps the number by hand.

The contract does **not** cover the layout of engine types (the shared engine core and the feature hash cover that, see below) or the layout of the module's own components (the schema hash covers that).

The engine defines the number once, as `MODULE_ABI_VERSION` in the engine core, re-exported as `pill_engine::module_abi::MODULE_ABI_VERSION`. The `#[pill_module]` attribute generates the module's `pill_module_abi_version` export from that constant, so a module and a host built from the same workspace can never disagree by accident.

When an extension loads, before anything calls into the new DLL, the host reads that export and compares it with its own value. The project skips this check, because the host builds the project itself from its own workspace.

| Situation                       | What the host does                                      |
| ------------------------------- | ------------------------------------------------------- |
| The versions are equal          | loads it and carries on                                 |
| The versions differ             | refuses the DLL and keeps the current generation        |
| The export is missing           | refuses the DLL: it predates the versioned contract     |
| The DLL cannot be loaded at all | reports the missing import it found; see the note below |

> **Example:** `MODULE_ABI_VERSION` goes from `1` to `2` because the init entry point now takes a second argument. An extension DLL built before the bump still exports `1`. The host refuses it with an ABI-version-mismatch error and keeps the old generation running, instead of calling it with an argument list it was never compiled for.

This check is not the same as the failure you see when a module was built with a different set of Cargo features. That one happens earlier, inside the operating system's loader: the shared engine libraries export symbols whose names include a hash of the resolved feature set, so a feature mismatch means those symbols do not exist at all, and the load fails with "the specified procedure could not be found" on Windows, or `undefined symbol: …` on Linux. The ABI number covers changes to the contract that the hash cannot see; the hash covers build-configuration drift.

## How does the host know which DLL belongs to which module?

It never has to identify a DLL. Each module has a slot, created at start-up from that module's configuration, and a slot only ever builds and loads its own crate.

At start-up the host reads the module list once and, for each entry, keeps an `ExtensionConfig` holding the crate name, the source folder to watch, the build command and where the built DLL will appear. That configuration is what the slot owns, and a reload uses it again:

```
   slot 2: extension "pill_splines"
     ├─ extension_config          name, watch folder, build command, output path
     ├─ source_edit_generation    bumped by this slot's own watcher
     ├─ current_library           the DLL loaded right now
     └─ retired_libraries         older generations still loaded
```

So a replacement is decided by **position and ownership**, not by inspecting the DLL. Slot 2's watcher fires, slot 2 runs its own build command, takes the built DLL from the path its own configuration names, loads it, and puts it in its own `current_library` field. Nothing compares names or versions of files, and one module cannot replace another by accident.

The **owner tag** comes from the same start-up list. `extension_owner(index)` turns the load-order index into a `SystemOwner`, and the slot keeps that value for its whole life. A reload does not recompute it, so the new generation's ECS systems land under the same owner as the old ones, and clearing that owner removes exactly that module's ECS systems.

| Question                                | Answer                                                                       |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| Is a module identified by name?         | no; the slot holds a configuration, and the DLL is just what that build made |
| Is the owner tag stored inside the DLL? | no; the host assigns it from load order and passes it to registration        |
| What changes across a reload?           | the loaded DLL, and what that generation registered                          |
| What stays the same?                    | the slot, its configuration, its owner tag and its counters                  |

## What happens when a reload fails?

It depends on how far the attempt got, and in every case the previous generation keeps running.

| Failure point              | What the host does                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------ |
| The build fails            | logs the compiler output, queues a notice for the editor, changes nothing                        |
| The DLL cannot be loaded   | reports the missing import or engine-version mismatch it found, changes nothing                  |
| The ABI version differs    | refuses the new DLL before handing it any engine pointer                                         |
| The new registration fails | registers the old DLL again, restores its ECS systems, frees what the failed attempt left behind |

The last case is the interesting one. Registration is supposed to be idempotent, so the host simply runs the old DLL's registration a second time and gets its ECS systems back. Anything the failed attempt managed to register is freed while the failed DLL is still loaded, because those destructors point into it. The failed DLL itself is retired rather than unloaded, for the same reason as always.

> **Example:** you save a project that calls a function that no longer exists. Cargo fails, so the host stops before the swap. The project keeps running the previous DLL, the compiler text appears in the editor's Problems panel, and the ECS systems never notice anything happened.

## What if you save again during a build?

The build is cancelled, and the newest sources win.

The host passes each build the counter value it is building for. A watchdog compares that value while cargo runs. As soon as a newer save moves the counter, the whole child process tree is killed. The host records the counter it *started* with, not the value it finds afterwards, so the newer save stays pending and the next update builds from it.

Recording the newer value instead would mark that save as handled although nothing compiled it, and the edit would sit on disk until something else touched the crate.

## When does a module rebuild even though its own files did not change?

When the host knows that a module contains an out-of-date copy of something that just reloaded. These rebuilds are called **cascades**.

### Why would a module contain a copy of another module?

Because extension crates are Rust libraries that are **compiled into** whatever uses them. If the project depends on the `pill_spline` crate, the project's DLL contains its own copy of `pill_spline`'s code, separate from `pill_spline`'s own DLL. When `pill_spline` reloads, its own DLL is new, but the copy inside the project's DLL is still the old code. Only a rebuild of the project replaces that copy.

### Which cascades does the host queue?

There is no general rule that rebuilds every module that depends on a reloaded one. The host queues exactly these four cascades:

| Situation                                                                                   | Who queues it                               | Why it is needed                                                                  |
| ------------------------------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------- |
| The project's own `Cargo.toml` names the reloaded extension crate as a dependency           | the reload pass, after that extension swaps | the project DLL still contains the old copy of that crate                         |
| An extension folder holds an editor crate, and one of that folder's runtime crates reloaded | the reload pass, after that crate swaps     | the editor crate contains its folder's runtime crates and is now out of date      |
| A reloaded module changed what C# can see (fields, value types, mirrored methods)           | the reload pass, after a module swap        | the managed project binds those names, so its mirror files and assembly are stale |
| The renderer's data crate reloaded                                                          | the windowed host, in its renderer step     | the renderer GPU module is built against that data                                |

> **Example:** `project_rs` uses an extension crate directly. You edit that extension and save.
>
> 1. The extension's watcher fires, and the extension reloads into its own DLL.
> 2. The host re-reads the project's `Cargo.toml`, sees the dependency, and queues a project rebuild.
> 3. Later in the same update the project reloads too, this time compiled against the new copy of the crate.
> 4. The extension's DLL and the project's DLL now both match the sources on disk.

> **Example:** an extension folder holds a runtime crate plus an `<extension>_editor` crate that only the editor loads. You change a file in the runtime crate.
>
> 1. The runtime crate reloads.
> 2. The host sees the editor crate in the same folder and queues it as well.
> 3. The editor crate rebuilds against the library that just replaced the one it was built with, so the editor never runs a stale copy of its own dependency.

### Which dependencies do not cause a cascade?

Two kinds of dependency are not followed:

- **An extension that depends on another extension.** If extension B links extension A's crate and A reloads, B is not rebuilt. B keeps running the copy of A it was built with until B's own sources change. The only extension-to-extension cascades are the editor crate and the renderer GPU module from the table above.
- **A dependency of a dependency of the project.** The host checks only the dependencies listed in the project's own `Cargo.toml`. If the project depends on B, and B depends on A, a reload of A does not rebuild the project.

> **Example:** suppose an extension `pill_vehicles` links `pill_spline` to follow roads. You change how `pill_spline` evaluates a curve and save. `pill_spline`'s own DLL reloads, and its own ECS systems use the new code. `pill_vehicles` is not rebuilt, so its DLL still evaluates curves with the old code. Saving any file in `pill_vehicles` rebuilds it against the new `pill_spline`.

One rule still protects the data in this situation. If the reload changed the layout of a component that B also registers, B's ECS systems are paused until B is rebuilt; see [Why does reloading one module not disturb the others?](#why-does-reloading-one-module-not-disturb-the-others).

### Why are cascades tracked apart from source edits?

Cascades are tracked separately from source edits: a flag on each extension slot, and a separate counter for the project. The reason is the hot patch path. A patch is allowed to mark a source edit as handled, because the patch delivered that edit. If a cascade used the same mark, the patch would mark the cascade as handled too, and the rebuild would never happen.

## Why does reloading one module not disturb the others?

Because every module registers its ECS systems under its own **owner** tag, and a reload removes ECS systems by that tag only. The project owns the scheduler outright, so it registers with no tag at all.

| Subject   | Registers under               | A reload removes                  |
| --------- | ----------------------------- | --------------------------------- |
| Project   | no scope, the project owns it | the project's ECS systems only    |
| Extension | `extension_owner(index)`      | that extension's ECS systems only |

A second rule covers the data side. **A module built against an old component layout is paused.** If a reload changes the layout of a shared component, every other module that registered it is still running code compiled against the old layout. The host switches those ECS systems off until they have been rebuilt, then switches them back on.

> **Example:** the project and an extension both declare `Transform`. You add a field to it and reload the project. The extension's ECS systems are suspended, because its queries were compiled against the old `Transform`. They come back the next time that extension is rebuilt, which the host logs as `systems resumed`.

## How is a C# project different?

The DLL swap does not apply, because a C# project is an assembly, not a native library.

A managed project compiles its assembly on a worker thread while the update keeps running, and the .NET loader swaps it in when the build finishes. While that build is in flight the host defers every other reload step, because the compile reads generated mirror files that a module reload rewrites. When a module reload changes the parts of itself that C# can see, the host regenerates that module's mirror file and queues the project to be recompiled.

The rule from the native path still holds: nothing is swapped in the middle of an update.

## What survives a reload?

Everything the project has built up. That is the point of the operation.

- **Entities and their components** stay. A component whose layout changed is converted to the new layout, keeping its values.
- **Resources** stay, and a resource whose fields changed is converted the same way.
- **Asset values** stay in memory, whether they were loaded from a file or created in code. The new code can still reach them unless the asset type is not shared and its definition changed; then the type starts with a new, empty column. See [What happens to assets during a reload?](#what-happens-to-assets-during-a-reload)
- **The engine itself** stays, because it lives in `pill_engine_core`, a shared library that is never reloaded.

What changes is the code: the module's ECS systems and its registered types are replaced.

## What are the limits?

- **Host and modules must agree on the dependency graph.** If a module was built with a different set of Cargo features than the host, the shared engine libraries export different symbol names and the module fails to load.
- **A reload costs a build.** Even a one-line change recompiles the module and links it. The hot patch path exists to avoid this for single function bodies.
- **A plain type cannot be migrated.** Only persistable components and resources have serializers and a schema hash.
- **Pointers inside values are not tracked.** A `&'static str`, a trait object or a function pointer stored in a value still points into the DLL that created it. It dangles once the graveyard releases that DLL.
- **Dependencies are followed only one level, and only from the project.** An extension that links another extension is not rebuilt when that extension reloads.
- **Shaders and asset files are not modules.** They have their own watchers and are delivered at the same point in the update, without any DLL swapping.

## Where is this in the code?

| What                                          | Where                                                                                |
| --------------------------------------------- | ------------------------------------------------------------------------------------ |
| Choosing what to reload each update           | `runtime.rs`, `run_reload_steps`                                                     |
| One module's state and its reload entry point | `extension.rs`, `ExtensionSlot`                                                      |
| The project's equivalent                      | `project_module.rs`, `LoadedProject`                                                 |
| The ordered swap                              | `reload.rs`, `ReloadTransaction::commit`                                             |
| Graveyard limit and postponed releases        | `reload.rs`, `retire_library`, `MAX_GRAVEYARD_GENERATIONS`, `MAX_DEFERRED_EVICTIONS` |
| Build, cancellation and staging               | `build_runner.rs`, `build_extension` / `run_build_command`                           |
| Copy, load and ABI check                      | `native_library.rs`, `NativeLibrary::load_copy`, `check_module_abi`                  |
| Watching source folders                       | `watcher.rs`, `spawn_source_watcher`                                                 |
| Project dependency check for cascades         | `config.rs`, `project_depends_on_crate`                                              |
| Persistable serializers and schema hashes     | `pill_engine_core`, `persistence/registry.rs`                                        |
| Migration of components and resources         | `pill_engine_core`, `persistence/migration.rs` and `persistence/resources.rs`        |
| Column re-pointing and orphaned columns       | `pill_engine_core`, `world/components.rs`                                            |
| Resource and asset re-pointing                | `pill_engine_core`, `world/resources.rs`, `asset.rs` (`AssetManager`)                |
| ABI version constant                          | `pill_engine::module_abi::MODULE_ABI_VERSION`                                        |

The log lines the test suites match on are `extension hot reload complete` for an extension and `hot reload complete` for the project, each followed by an analytics line with the build, stage, load, init and migration times.
