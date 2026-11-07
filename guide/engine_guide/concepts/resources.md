# Resources: how they are implemented

## Summary

The world keeps resources in one map from `ResourceId` to an `ErasedResource`: a heap allocation plus a small table of function pointers (drop, size, alignment) instead of a trait object. A module declares the resources it owns with `#[derive(PillResource)]`, and its entry point turns each declaration into a `register_resource` call on every load and reload. The host uses those registrations to re-point each value's drop function at loaded code and to remove resources a module stopped owning.

This is the implementation counterpart of [concepts/resources.md](../concepts/resources.md). Read that first for how to declare and use resources.

## At a glance

| Piece                                | What it is                                                                                                                                                                         | Where                             |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `Resource` trait                     | `Send + Sync + 'static`, optional `shared_name`                                                                                                                                    | `resource.rs`                     |
| `ResourceId`                         | `Native(TypeId)` or `Shared(hash of the name)`                                                                                                                                     | `resource.rs`                     |
| `ErasedResource`                     | the value's allocation, its `TypeId`, size, alignment and an `ErasedResourceOps`                                                                                                   | `resource.rs`                     |
| `ErasedResourceOps`                  | `drop_in_place` function pointer, size, alignment, `foreign` flag, C# `schema_hash`, the declared `layout_sources`/`layout_dependencies`, and a manager's `settings_asset` surface | `resource.rs`                     |
| `#[derive(PillResource)]`            | declares a resource where it is defined; the entry point registers it                                                                                                              | `pill_engine/src/declarations.rs` |
| `World.resources`                    | `HashMap<ResourceId, ErasedResource>`: the values                                                                                                                                  | `world/mod.rs`                    |
| `World.resource_ticks`               | `added`/`changed` ticks per resource                                                                                                                                               | `world/mod.rs`                    |
| `World.resource_factories`           | newest `ErasedResourceOps` per id, for re-homing                                                                                                                                   | `world/mod.rs`                    |
| `World.resource_registration_stamps` | when each id was last registered, for the reload's "what did this module register?" diff                                                                                           | `world/mod.rs`                    |
| `World.resource_claim_counts`        | how many modules still own a shared id                                                                                                                                             | `world/mod.rs`                    |
| `World.shared_resource_claims`       | which Rust type and layout claimed each shared name                                                                                                                                | `world/mod.rs`                    |
| `Res<T>`, `ResMut<T>`                | ECS system parameters                                                                                                                                                              | `query/resource.rs`               |

```
 World.resources
 ┌──────────────────────────┬────────────────────────────────────────────┐
 │ ResourceId               │ ErasedResource                             │
 ├──────────────────────────┼────────────────────────────────────────────┤
 │ Native(TypeId of Score)  │ ptr → Score { points: 1200 }               │
 │                          │ ops: drop_in_place::<Score> (project DLL)  │
 │ Shared(hash "pill_engine │ ptr → AssetManager { ... }                 │
 │   ::asset::AssetManager")│ ops: drop_in_place::<AssetManager>         │
 └──────────────────────────┴────────────────────────────────────────────┘
```

## Why not store resources as `Box<dyn Any>`?

A `Box<dyn Any>` breaks in two ways when modules are DLLs that get reloaded.

1. **Its destructor lives in the module that created it.** A trait object's vtable, including its drop function, is compiled into the DLL that made the box. Resources stay in the world across reloads. Once the old DLL is unloaded, dropping that box would call into unmapped memory and crash.
2. **`downcast_ref` compares `TypeId`.** Two DLLs can have different `TypeId`s for the same type (see [linking_technical.md](../levels/other/linking_technical.md)), so a shared resource could not be read from a second module.

`ErasedResource` solves the first problem by storing its drop function as plain data that can be replaced, and the second by checking layout instead of `TypeId` for shared resources.

## How is a resource stored?

`insert_resource::<T>(value)` does four things:

1. checks the shared-name claim (see [How are shared names protected?](#how-are-shared-names-protected)); a refused claim stores **nothing** and records an error;
2. moves the value into a fresh allocation with `T`'s size and alignment, wrapped in an `ErasedResource` with `ErasedResourceOps::of::<T>()`;
3. stores fresh change ticks for it in `resource_ticks`;
4. records the same ops table in `resource_factories` and stamps the id as registered now.

Inserting under an id that already has a value replaces the value and drops the old one.

Reading checks the box before casting. `ErasedResource::holds::<T>()` compares the exact `TypeId` for an ordinary resource, and size plus alignment for a shared one. `get_resource`, `get_resource_mut` and `has_resource` all go through `holds`, so a wrong type returns `None` instead of reading the wrong bytes.

## What is the difference between `register_resource` and `insert_resource`?

`register_resource` declares ownership of a type without storing a value. `insert_resource` stores a value and also declares ownership.

| Call                | Stores a value | Records the ops table | Stamps "registered now" |
| ------------------- | -------------- | --------------------- | ----------------------- |
| `register_resource` | no             | yes                   | yes                     |
| `insert_resource`   | yes (replaces) | yes                   | yes                     |

The reload needs the registration even when the value already exists. A module that keeps its value across a reload never calls `insert_resource` again, so without `register_resource` the new generation would contribute no ops table pointing at its own code, and the host would conclude it no longer owns the resource.

A module does not write that call itself. It derives `PillResource` on the type:

```rust
#[derive(PillResource)]
#[pill(shared, layout_sources = ["src/score.rs"])]
pub struct Score { points: u32 }
```

The derive submits a descriptor, and the module's entry point (`register_all_resources`) calls `register_resource` for every descriptor its own image declared, sorted by type name, before the module's `register` function runs. So a first load, every reload and a statically linked build all register the same types, and `insert_resource` in `register` finds the declaration already in place. On a reload, the entry point skips the descriptors that a retired generation, still loaded in the graveyard, declared: it keeps only the ones added after the host's declaration baseline (see [hot_reloading.md](../levels/hosting/hot_reloading.md)).

`register_resource` and `insert_resource` remain public for code that owns its types directly: the host, the editor, the player and shared dylibs.

## What happens to resources during a hot reload?

Values stay where they are; only the bookkeeping around them changes. A reload does not run the module's `init` again. It runs the module's **registration**: the declarations, then the module's `register` function. `init` runs once, on the first load. The relevant steps of the reload transaction are:

0. **Drop resources whose declared layout changed** (see [What happens when a resource's layout changes?](#what-happens-when-a-resources-layout-changes)). This runs before the registration, so the module rebuilds the value instead of the drop removing the fresh one.
1. **Find what the module stopped owning.** The host records the registration sequence before the new generation's registration, then calls `resource_ids_registered_since(sequence)`. Ids the old generation registered and the new one did not are retired.
2. **Drop retired resources while the old DLL is still loaded.** `drop_resources(ids)` removes each value and every record kept for its id. It runs the value's destructor, which still points into the old DLL, so it must run before that DLL is released. An id that another module still claims is skipped (see the next section).
3. **Re-home the rest.** `rehome_resources` copies the newest `ErasedResourceOps` from `resource_factories` onto every live value. After that, every value's destructor points into a DLL that is still loaded, and the old DLL can be released safely.
4. **Migrate reshaped persistable resources** (see [How does a persistable resource survive a struct change?](#how-does-a-persistable-resource-survive-a-struct-change)).

The full ordering is in [hot_reloading.md](../levels/hosting/hot_reloading.md#in-what-order-does-the-host-move-the-engine-state-over).

> **Example:** the project declares `Score` and `ComboTimer` with `#[derive(PillResource)]`. You delete `ComboTimer` from the code and save. The struct and its derive are gone, so the new generation's registration declares only `Score`. The host sees that `ComboTimer`'s id was registered by the old generation and not the new one, and drops the timer through the old DLL's `drop_in_place::<ComboTimer>`, while that DLL is still loaded. `Score` keeps its value, and its ops table now points into the new DLL.

## How do several modules share one resource?

By registering the same shared name, and by holding **claims**.

A shared resource's id is `Shared(hash of the name)`, computed with the same FNV-1a hash as shared components, so every module (and the C# runtime) derives the same id. The development host adds a claim for each module that registers it (`retain_resource_claims`), and releases that claim when the module stops registering it or is unloaded (`release_resource_claims`). `drop_resources` skips an id whose claim count is still above zero.

> **Example:** the renderer's data module and the project both register `AssetManager`. The project is reloaded and, by mistake, its new registration no longer registers it. The project's claim is released, but the data module still holds one, so the `AssetManager` stays. Without the count, the project's reload would destroy every loaded asset.

## How are shared names protected?

`shared_resource_claims` remembers, for each shared name, the Rust type that first claimed it and its size, alignment and (for C#) schema hash. A later claim is checked against that record:

| Later claim                                          | Result                                     |
| ---------------------------------------------------- | ------------------------------------------ |
| same type, same layout (another module, or a reload) | accepted                                   |
| a different Rust type using the same name            | refused: `SharedResourceNameConflict`      |
| a different name that hashes to the same id          | refused: `SharedResourceIdentityCollision` |
| a different size or alignment                        | refused: `SharedResourceLayoutMismatch`    |
| a C# declaration with a different schema hash        | refused: `SharedResourceSchemaMismatch`    |

A refusal is recorded as a registration error. On a reload the module's registration then fails and the reload is rolled back; on a first load its entry point fails before `init` runs. Nothing is stored and the ops table is not touched, so a refused generation cannot point the live value at its own code.

## How do `Res<T>` and `ResMut<T>` work?

They are thin wrappers that look the value up when the ECS system asks for it.

- `Res<T>::get()` calls `get_resource::<T>()` and returns `Option<&T>`.
- `ResMut<T>::get_mut()` calls `get_resource_mut_tracked::<T>()` and returns `Option<Mut<T>>`. `Mut` sets the resource's `changed` tick on the first write, the same way it does for components.

The `Option` exists because a resource can be missing: never inserted, removed by a reload, or refused. Neither type fails when the ECS system starts; the ECS system decides what a missing resource means.

For scheduling, `Res<T>` reports a resource **read** and `ResMut<T>` a resource **write** of `ResourceId::of::<T>()`. Two ECS systems conflict when one writes a resource the other reads or writes (see [systems.md](systems.md#how-are-batches-built)). In debug builds, `ResMut` also adds its id to a mutex-guarded set for the duration of the ECS system, so a scheduler bug that gives two parallel ECS systems the same `ResMut` is caught.

## How does a persistable resource survive a struct change?

`register_persistable_resource::<T>()` registers the resource normally, then records three things under its **persistence name** (the shared name, or `std::any::type_name::<T>()` without one):

- a serializer, keyed by `ResourceId`, which reads the live value as JSON;
- a restorer, keyed by name, which merges JSON over `T::default()` and inserts the result;
- a schema hash of the type.

Before a reload, the host captures the old generation's manifest (name, schema hash, serializer). After the new generation's registration, `migrate_changed_persistable_resources` compares hashes per name. For every name whose hash changed, it:

1. reads the value through the **old** serializer, while the old DLL is still loaded;
2. writes it back through the **new** restorer.

Merging over the default is why kept fields keep their values, new fields start at their default, and removed fields are dropped. A resource whose hash did not change is left alone, keeping its allocation and change ticks.

The migration only exists in a development build: `migrate_changed_persistable_resources` is compiled behind the engine's `development` feature, together with re-homing and the C# relayout calls. A shipping build cannot change a resource's layout while it runs, so it has no code for it.

### Why does a persistable resource need a shared name?

A resource without a shared name can lose its value when its struct changes, because its id changes too.

For an ordinary resource the id is its `TypeId`, and a struct change gives the type a new `TypeId`. After the reload, the new generation registers the new id. The old id is no longer registered by anyone, so step 2 of the reload drops it. The migration runs after that, so the old serializer finds no value (`Reshaped resource held no readable value`), and the resource comes back as `T::default()`. This follows from the current order of the reload steps and has not yet been confirmed by a test.

With a shared name, the id is the hash of the name, which does not change. The id stays registered, the value is not dropped, and the migration converts it.

## What happens when a resource's layout changes?

A resource is kept across a reload and only its ops table is re-pointed. If the struct changed shape, the new code would read the old bytes through the new type. The persistable migration above covers resources that can be written to JSON. For any other resource that holds non-plain state, the module **declares its layout** instead, and the host compares it on every reload.

- `#[pill(layout_sources = ["src/physics_world.rs"])]` names the files whose contents define the type's layout. `#[pill(layout_dependencies = ["rapier3d"])]` names crates whose resolved version can change it. Both end up in the type's `ErasedResourceOps`.
- The host writes a fingerprint record per module (`pill_standalone_temp/layout_records/<subject>.json`) and compares it before the new generation registers.
- A resource whose fingerprint changed is dropped while the old DLL is still loaded, with one warning per resource: `resource layout changed; dropped the live value so the module rebuilds it`. The module's `register` then inserts a fresh value.
- A resource that declares nothing is kept whenever the new generation registers the type again.

The resource must also be **shared** (`#[pill(shared)]` or `#[pill(shared = "...")]`). An id built from `TypeId` differs in every generation, so an unnamed resource is retired, not kept, and there is no live value to compare.

> **Example:** `pill_physics`'s `PhysicsManager` holds a rapier world. It is shared and declares `layout_sources`, so a reload whose files did not change keeps every body where it was, and a reload that changed the manager's struct drops it and rebuilds the bodies from the components.

## How are snapshots taken?

`snapshot_resources` writes every persistable resource as a `(persistence name, JSON)` pair, sorted by name so two identical runs give identical snapshots. `restore_resources` feeds each pair back through the restorer registered for that name. Only resources registered as persistable appear; plain ones never do.

Names are used rather than `ResourceId`s because a `TypeId` means nothing in another process or a later build.

## How do C# resources fit in?

A C# resource has no Rust type, so it is stored as raw bytes.

`register_foreign_resource(name, declaring_type, size, align, schema_hash)` declares it under `Shared(hash of the name)`, the same id a Rust type with that shared name would get. So a C# resource and a Rust mirror of it share one value, and the scheduler treats them as one resource. Its `ErasedResourceOps::foreign` table drops nothing, because C# resources may only contain plain unmanaged values, and `rehome_resources` skips it because there is no Rust code to re-point.

## Which resources does the engine itself manage?

`Engine::process_frame` touches two resources before any ECS system runs, so every ECS system in an update sees the same values:

- `Time::advance()` moves the clock forward;
- `Input::begin_frame()` applies the input events the frontend queued since the last update.

This is done directly rather than by an engine ECS system, because batching follows registration order: an engine ECS system registered after some of the project's would give those ECS systems last update's time.

## Where is this in the code?

All paths are in `modules/engine/pill_engine_core/src/`.

| What                                                                                 | Where                                                                     |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `Resource`, `ResourceId`, `ErasedResource`, `ErasedResourceOps`, `ResHandle`         | `resource.rs`                                                             |
| `insert_resource`, `register_resource`, claims, `rehome_resources`, `drop_resources` | `world/resources.rs`                                                      |
| The resource maps on `World`                                                         | `world/mod.rs`                                                            |
| `Res<T>`, `ResMut<T>`                                                                | `query/resource.rs`                                                       |
| `SystemParam` implementations and access reporting                                   | `system.rs`                                                               |
| Persistable resources, snapshots, migration                                          | `persistence/resources.rs`                                                |
| `#[derive(PillResource)]` declarations and `register_all_resources`                  | `modules/engine/pill_engine/src/declarations.rs`                          |
| `SettingsAssetManager`, `SettingsAssetOps`                                           | `settings.rs`                                                             |
| Settings bindings, missing files, change detection                                   | `manager_settings.rs`                                                     |
| Layout fingerprints and the layout-change drop                                       | `modules/hosting/pill_development_host/src/layout_record.rs`, `reload.rs` |
| `Time` and `Input` updates                                                           | `engine.rs`, `process_frame`                                              |
| The reload steps that call all of this                                               | `modules/hosting/pill_development_host/src/reload.rs`                     |

## Manager resource

A **manager** is a resource that owns a subsystem data (eg. particle system, physics system, audio system), such as the audio device or a physics world, and whose tuning lives in a **settings asset** rather than in code. It is stored like any other resource. What makes it special is an extra entry in its per-type function table: the settings surface, `SettingsAssetOps`. Through it a host can create, bind and re-apply the manager's settings without knowing the settings document's type.

A manager with nothing to configure is an ordinary resource. A settings file in every project would be a file nobody can act on.

### How is a manager declared?

- The type implements `SettingsAssetManager` (`settings.rs`):
  - `type Settings`: the standalone asset type that holds its tuning, for example `pill_audio::AudioSettingsAsset`. Its `Document` is what the manager applies, and its `FILE_EXTENSION` names the file (`audio_settings`).
  - `settings_name()`: the file stem and the name log lines use (`pill_audio`). Letters, digits and `_` only.
  - `apply_settings(&Document) -> SettingsOutcome`: returns `Applied`, or `Refused` when a value is out of range or cannot change while the subsystem runs. A refusal leaves the manager exactly as it was, and the manager logs its own reason.
- The value is inserted with `World::insert_settings_asset_manager::<T>()`, or declared without a value with `World::register_settings_asset_manager::<T>()`. The module calls one of them in its `register` function, which runs on **every generation**. That stores `SettingsAssetOps` in the resource's ops table: `settings_name`, `file_extension`, `asset_type_name`, `render_default` (writes a file full of defaults) and `apply_bytes` (reads a file and applies it). These are function pointers into the module's DLL, so every generation has to re-point them, exactly like the drop function, and the re-home does that.
- A manager that must keep its value across a reload needs a shared name, like every resource. A `TypeId`-based id differs in each generation, so the value would be retired instead of kept.

### Where does the settings file live?

At `res/settings/<settings_name>.<extension>` (`settings_asset_path()`), for example `res/settings/pill_audio.audio_settings`. It is an ordinary standalone asset: the file carries its own header, guid and `asset_type`, and the asset store resolves its path, so a shipped build reads it from the asset pack. `World::bind_manager_settings` points a manager at another settings file at runtime and applies it at once. The binding is kept even when that file cannot be applied, so later checks retry the same file.

### How does a manager read its settings?

- **At startup** the development host writes any missing file from `render_default`, then applies each manager's file after the project loads. A shipped build applies the files from its asset pack, and a manager with no file keeps its document's defaults.
- **When the file is edited**, the asset watcher notices, because the file is an asset. At the frame boundary the edit first goes through the import registry like any asset (step 8), but that only updates the asset store's own copy. The manager is updated in **step 9**, `apply_manager_settings_changes`, which runs when the boundary had any asset change. `World::refresh_manager_settings` goes through every settings manager:
  1. read the file at the manager's bound path;
  2. compare a fingerprint of its bytes with the last bytes applied, and stop if they are equal;
  3. call the manager's `apply_bytes`: parse the header, check that `asset_type` names the manager's own settings type, read the body into the document (no body means the defaults), and call `apply_settings`;
  4. record the fingerprint after `Applied` or `Refused`, so the same bytes are not applied twice.
- **After a reload** every manager's file is applied again regardless of the fingerprint, because the reloaded manager is a fresh value.
- **Outcomes**: `[settings] applied manager settings` when it worked. A refusal, or a document that does not parse, does not fit, or names another type, leaves the manager's values unchanged and logs one `[settings] refused manager settings; ...` line naming the manager, the file and the reason. A file that cannot be parsed is not fingerprinted, so it is tried again at the next boundary that has asset changes.

The manager is reached through its resource table, not through the import registry's extension lookup: what connects a file to a manager is the manager's **bound path**.

| What                                                                                     | Where                                                  |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `SettingsAssetManager`, `SettingsAssetOps`, `SettingsOutcome`, `apply_settings_bytes_of` | `settings.rs`                                          |
| `insert_settings_asset_manager`, `register_settings_asset_manager`                       | `world/resources.rs`                                   |
| Bindings, `bind_manager_settings`, `refresh_manager_settings`, fingerprints              | `manager_settings.rs`                                  |
| Startup file creation, step 9 and its log lines                                          | `modules/hosting/pill_development_host/src/runtime.rs` |

## Why resources are not just components?

Some ECS engines store a one-of-a-kind value as a component on a single entity (a "singleton"). This engine keeps resources separate.

Easy access is the visible benefit: `Res<InputManager>` reads the value directly, with no query over components that only one entity has. But that alone would not need a separate store. 

What a separate store actually gives is that resources live **outside the entity world**:

- **Lifetime.** A resource exists before any entity and survives scene loads, world clears and editor deletions. The asset store, time, input and the physics and audio managers must never disappear because gameplay destroyed an entity. Nothing in the ECS stops a second entity from getting a singleton component, or the only one from being destroyed.
- **Scenes.** A `.scene` file saves entities and their components, so a singleton entity would end up in every scene, or every save would need a rule to skip it. Resources are never written into a scene; the ones that should be saved opt in through `register_persistable_resource` and its snapshot.
- **What can be stored.** Component data lives in archetype columns. Rows move when an entity gains or loses a component, and persistable components carry a field layout for scenes, the Inspector and reload migration. A resource is one allocation that only needs `Send + Sync`, so it can hold an open audio stream or a whole rapier world. Those have no field layout and should never appear in the Inspector or a scene.
- **Module reloads.** Each resource has its own ownership machinery for DLL swaps: a replaceable drop function each generation re-points, a claim count so one module's reload cannot destroy a value another module still uses, shared names so several DLLs reach one value, removal when no module registers it any more, layout fingerprints (`layout_sources`) so a changed struct is rebuilt instead of misread, and the settings surface of a manager.
- **Access outside ECS systems.** The host, the editor and the C# bridge reach a resource by type or shared name (`get_resource::<AssetManager>()`) without running a query.

So easy access is the visible effect, and these lifecycle guarantees are why the separate store exists. For plain game data such as a score or a wave counter, a singleton component would work, as long as you accept that scene loads and world clears treat it like any other entity. Resources fit best when the value is a service the engine depends on, or must survive scene changes and module reloads without anyone holding an entity for it.
