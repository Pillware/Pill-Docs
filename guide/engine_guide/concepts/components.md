# Components: how they are implemented

## Summary

Components live in **archetypes**: one archetype per exact set of component types, holding one tightly packed byte array (a **column**) per type. A component type is identified by a `ComponentId`, gets one of 128 bits in a mask, and its column carries a small table of function pointers instead of a vtable, so the column survives the module that filled it being unloaded.

This is the implementation counterpart of [concepts/components.md](../concepts/components.md). Read that first for how to declare and use components.

## At a glance

| Piece                     | What it is                                                                 | Where                        |
| ------------------------- | -------------------------------------------------------------------------- | ---------------------------- |
| `Component` trait         | `Send + 'static`, plus optional `shared_name` and `declared_schema_hash`   | `component.rs`               |
| `ComponentId`             | `Native(TypeId)`, `Shared(u128)` or `Descriptor(u128)` (C#)                | `component.rs`               |
| `ComponentRegistry`       | `ComponentId` → bit index (0-127), name, recorded layout                  | `component.rs`               |
| `ComponentMask`           | one `u128`; bit *n* set means "has component *n*"                          | `component.rs`               |
| `Archetype`               | `id`, `component_types`, `component_mask`, `entities`, columns             | `archetype.rs`               |
| `ArchetypeId`             | the mask's bits, so the mask *is* the id                                   | `archetype.rs`               |
| `ComponentColumn`         | raw aligned buffer + `ColumnLayout` + `ColumnOps` + per-row `ComponentTicks` | `archetype.rs`             |
| `ColumnOps`               | `drop_range` function pointer + `trivial_drop` flag                        | `archetype.rs`               |
| `StorageFactory`          | per-type recipe for building a column: layout + `ColumnOps`, no closure    | `archetype.rs`               |
| `PillComponentDescriptor` | what `#[derive(PillComponent)]` submits to the module's `inventory`        | `pill_engine/src/component_registry.rs` |

```
 World
 ├── component_registry   Position → bit 0, Velocity → bit 1, Health → bit 2
 ├── storage_factories    one recipe per ComponentId
 └── archetypes
     ├── 0b011 (Position + Velocity)
     │     entities:  [e1,  e4,  e9 ]
     │     Position:  [p1,  p4,  p9 ]   ← one column, packed
     │     Velocity:  [v1,  v4,  v9 ]
     └── 0b111 (Position + Velocity + Health)
           entities:  [e2,  e3 ]
           Position:  [p2,  p3 ]
           Velocity:  [v2,  v3 ]
           Health:    [h2,  h3 ]
```

## Why store components by archetype?

Archetypes make the common operation fast: visiting every entity that has a given set of components.

Every entity in one archetype has exactly the same component types. So a query for `(&mut Position, &Velocity)` finds the archetypes whose mask contains both bits, then walks each one's `Position` and `Velocity` columns in order, from start to end. The data is contiguous, so the CPU's cache and prefetcher work at full speed.

The trade-off is that adding or removing a component **moves** the entity to another archetype, copying its other components. Pill accepts this because iteration happens every update, while structural changes are comparatively rare.

| Operation                         | Cost                                                        |
| --------------------------------- | ----------------------------------------------------------- |
| Iterate all entities of a query   | linear, cache-friendly                                      |
| Read one entity's component       | one location lookup + one mask bit test                     |
| Add or remove a component         | move the whole row to another archetype                     |
| Destroy an entity                 | swap-remove one row in every column                         |

## How is a component type identified?

By a `ComponentId`, which depends on how the type was declared:

| Declaration                         | `ComponentId`              | Same id in every DLL?                                       |
| ----------------------------------- | -------------------------- | ----------------------------------------------------------- |
| `#[derive(PillComponent)]`          | `Native(TypeId::of::<T>())` | only when every DLL compiled the type identically         |
| `#[pill(shared)]` / `shared = "…"`  | `Shared(hash of the name)` | yes, always                                                 |
| a C# component                      | `Descriptor(id from the manifest)` | yes (there is no Rust type)                         |

`ComponentId::of::<T>()` decides this, and every lookup goes through it. For a shared component the derive emits the hash as a compile-time constant (`shared_identity`), so a shared lookup costs the same as `TypeId::of`.

The shared hash is two FNV-1a passes over the name, concatenated into 128 bits (`shared_component_identity`). It depends only on the bytes of the name, so separately compiled DLLs and the C# runtime compute the same value without talking to each other.

For why a `TypeId` can differ between DLLs, see [linking_technical.md](../levels/other/linking_technical.md).

## Why only 128 component types?

The mask is one `u128`. That keeps it on the stack, `Copy`, and lets an archetype match a query with one bitwise AND: `(archetype_mask & query_mask) == query_mask`.

The limit is shared by the project and every extension. Registration warns when 16 or fewer bits are left and fails the module's entry point with `WorldError::ComponentTypeLimitExceeded` when none are. Bits of removed component types (for example, C# types a reload retired) go to a free list and are reused.

## How does registration work?

`#[derive(PillComponent)]` generates the registration; the module's entry point runs it.

1. **At compile time**, the derive emits:
   - `impl Component` with `shared_name`/`shared_identity` when the type is shared, and `declared_schema_hash` from the field layout;
   - a static field layout (name, type tag, offset, size, alignment of each field);
   - a function `__pill_register_<Type>` that calls `register_component_with_layout` or, for `persistable`, `register_persistable_component_with_layout`;
   - an `inventory::submit!` of a `PillComponentDescriptor` pointing at that function.
2. **At load time**, the module's entry point calls `register_all_components`, first thing, on the first load and on every reload. It walks the `inventory` of component descriptors and calls each `register` function, but only for the descriptors **this image** added. A reload keeps the retired generation loaded in the graveyard, and that image's descriptors are still in the collection. So the host counts the descriptors (a `DeclarationBaseline`) just before it loads a new image, and the walk keeps only the entries added after that count (`declarations.rs`, `component_registry.rs:378`). A statically linked build and a test register every descriptor.
3. **`register_component_inner_superseding`** then:
   - asks the `ComponentRegistry` for a bit (`Created` for a new type, `AlreadyPresent` when the id is known);
   - appends `(name, id, sequence)` to `component_registration_log`, which the host compares across a reload to see which types a module stopped registering;
   - stores a `StorageFactory::Native` recipe (layout + `ColumnOps::of::<T>()`) in `storage_factories`, first saving the previous recipe's `ColumnOps` in `retired_native_storage_ops`.

Registration is idempotent, because every hot reload registers the module's components again. A reload runs the module's **registration** (components, the declared systems, resources and asset types, then the module's `register` function), not its `init`, which runs once on the first load. An error (the 128-type limit, a shared name claimed by a different type, a shared layout mismatch) is recorded instead of panicking, and `register_all_components` returns it. The entry point then fails, and on a reload the host rolls the reload back.

## How does the world find the archetype for a set of components?

It builds the mask from the components' bits and uses the mask as the archetype's id.

`get_or_create_archetype` sets one bit per component, then looks up `ArchetypeId(mask.bits())` in `World.archetypes`. If the archetype exists, that is the answer. If not, it sorts the ids, creates the archetype by asking each type's `StorageFactory` for an empty column, and bumps `archetype_generation`, which tells every cached query that the list of archetypes changed.

The mask can serve as the id because a bit only goes back to the free list after every archetype using it is gone. So one mask can never mean two different component sets.

## What is inside a column?

A `ComponentColumn` is a raw, aligned heap buffer plus everything needed to interpret it:

| Field      | Purpose                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------- |
| `layout`   | element size and alignment                                                                |
| `ops`      | `ColumnOps`: how to drop rows                                                             |
| `identity` | what a typed read must prove: the exact `TypeId`, the shared size/alignment, or nothing (C#) |
| `data`, `len`, `capacity` | the buffer and its row counts                                              |
| `ticks`    | one `ComponentTicks { added, changed }` per row, in a separate array                      |

The column stores bytes, not a `Vec<T>`. Native Rust components, shared components and C# components all use the same column type; only `identity` differs. A typed accessor (`get::<T>`) checks `identity` and panics on a mismatch, so a wrong type is caught instead of read.

The change ticks sit in their own array rather than next to each row, so iterating the component data does not also pull the ticks through the cache.

## Why does a column hold function pointers instead of being a `Vec<T>`?

Because the column must outlive the code that created it.

A `Vec<T>` or a `Box<dyn Trait>` drops its values through code compiled into the module that created it. Components belong to the world, and the world is never reloaded. When a module is hot-reloaded, the old module's code is eventually unloaded. A column still pointing at the old module's drop code would then crash the next time a row is destroyed.

`ColumnOps` is plain data: one `drop_range` function pointer and a `trivial_drop` flag. During a reload, `rehome_native_columns` replaces every column's `ColumnOps` with the copy from the newest `StorageFactory`, which points into the newly loaded module. The old module can then be unloaded safely.

> **Example:** `Health` holds a `Vec<f32>` history, so dropping a row frees heap memory. The project is reloaded. Before the old project DLL is released, the engine re-points every `Health` column's `drop_range` at the new DLL's `drop_in_place::<Health>`. When an enemy is destroyed later, its `Vec` is freed through code that is still loaded.

The full reload procedure is in [hot_reloading.md](../levels/hosting/hot_reloading.md#what-is-a-storage-column-and-why-does-it-need-a-function-table).

## What happens when a component is added or removed?

The entity moves to the archetype for its new component set.

`add_component` and `remove_component` both go through `move_entity_to_archetype`:

1. Compute the new component set and find or create its archetype.
2. For `add`, push the new value into the destination's column first. This is the only step that can fail, so a failure leaves the entity where it was.
3. Move every shared component's row to the destination **bitwise**: the bytes are copied, and the source forgets them without running a destructor. No `Clone` runs, and a `Vec` field costs a pointer copy, not a deep copy.
4. For `remove`, drop the removed component's row normally.
5. Swap-remove the old row from the source archetype and update the `EntityLocation` of both moved entities.

The deferred versions (`Commands::add_component_to_entity` and friends) run the same function during the end-of-update flush.

## How do persistable and shared change registration?

| Attribute     | What changes in the implementation                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `persistable` | Also registers a JSON serializer (by `ComponentId`), a deserializer and an inserter (by persistence name), and a **schema hash** of the type. A reload compares old and new hashes per name and migrates changed columns through JSON. |
| `shared`      | The id is `Shared(hash of the name)`, so every DLL reaches one bit and one column. The column checks size and alignment instead of `TypeId`, and the registry compares field layouts (schema hashes) so a different layout is refused unless the registering module replaces the old one. |

The **persistence name** is the shared name when there is one, and otherwise `std::any::type_name::<T>()`. The schema hash covers that name, the size, the JSON of `T::default()` and the field layout, so a changed field type changes the hash even when the default JSON looks the same.

The deserializer merges the saved JSON over `T::default()`'s JSON before decoding. That is why a new field starts at its default and a removed field is ignored. A field whose type changed in a way JSON cannot convert fails to decode, and that value cannot be migrated.

A **stale shared reader** is caught when a query is built: `Query::new` compares the `declared_schema_hash` compiled into the querying DLL with the hash the registry holds. If they differ, the DLL was built against an older layout, so the query matches nothing and logs the refusal once. This is why other modules' ECS systems stop seeing a shared component until they are rebuilt.

The migration exists only in a development build. `persistence::migration`, the column re-home and the C# relayout calls are compiled behind the engine's `development` feature. A shipping build never changes a component's layout while it runs, so it has no code for it. What it keeps is the registration refusals: a shared type that comes back with another layout is refused there too.

The full migration procedure, and what happens to a plain component whose fields change, is in [hot_reloading.md](../levels/hosting/hot_reloading.md#what-is-data-migration-and-how-does-the-engine-perform-it).

## How do change ticks work?

Each row records two ticks, and each ECS system remembers the tick it last ran at.

- The world keeps one counter, `change_tick`. It is bumped at the start of every update, and again each time a query starts iterating (`iter_mut`, `first`, `par_iter_mut`).
- A new row gets `added = changed = current tick`.
- Writing through `Mut<T>` (what `&mut T` in a query yields) sets `changed` to the tick that query's iteration started at, inside `DerefMut`. Reading through `Deref` does not.
- `Added<T>` and `Changed<T>` compare a row's tick with the ECS system's `last_run` tick, using wrapping arithmetic so the counter can overflow safely.

In a parallel batch, several ECS systems cannot safely bump the shared counter at once, so the engine reserves one tick per batch member before dispatch, and `increment_change_tick` returns that reserved tick instead. Each ECS system gets its tick, and its `last_run`, through a thread-local in `pill_core::system_ticks`. The thread-locals live in `pill_core` rather than the engine core because `Query` is generic: its code is compiled into each module, and a thread-local in each module's copy would never see the value the scheduler set.

## Where is this in the code?

All paths are in `modules/engine/` unless noted.

| What                                                        | Where                                                         |
| ----------------------------------------------------------- | ------------------------------------------------------------- |
| `Component`, `ComponentId`, `ComponentMask`, `ComponentRegistry`, ticks | `pill_engine_core/src/component.rs`               |
| `Archetype`, `ComponentColumn`, `ColumnOps`, `StorageFactory` | `pill_engine_core/src/archetype.rs`                         |
| Registration, `get_component`, `add_component`, re-homing    | `pill_engine_core/src/world/components.rs`                   |
| Archetype lookup, entity moves                              | `pill_engine_core/src/world/mod.rs`                           |
| Persistable registration, serializers                       | `pill_engine_core/src/persistence/components.rs`, `registry.rs` |
| Reload migration of components                              | `pill_engine_core/src/persistence/migration.rs`               |
| `Mut<T>` and change marking                                 | `pill_engine_core/src/query/change_detection.rs`              |
| The derive and its attributes                               | `pill_engine_macros/src/lib.rs`, `derive_pill_component`      |
| `register_all_components`, the component `inventory`        | `pill_engine/src/component_registry.rs`                       |
| `DeclarationBaseline`, `with_declaration_baseline`          | `pill_engine/src/declarations.rs`; the host counts it in `pill_development_host/src/native_library.rs` |
| Field layer (inspector, scenes)                             | `pill_engine_core/src/component_field/`                       |
