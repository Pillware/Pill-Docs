# Containers across Pill: entities, components, resources, assets and GPU objects

## Summary

Pill stores its data in five kinds of container. Each one answers a different question:

| Container         | Question it answers                                    | Example                          |
| ----------------- | ------------------------------------------------------ | -------------------------------- |
| entities          | "Does this object still exist, and where are its components?" | the player, a bullet       |
| components        | "What data does this object have?"                     | `TransformComponent`, `Health`   |
| resources         | "What is the one value of this type in the world?"    | `PhysicsManager`, `Time`         |
| assets            | "Which of the many loaded files of this type do I mean?" | a mesh, a texture, a material  |
| GPU objects       | "What has the renderer built on the GPU for that asset?" | a vertex buffer, a bind group  |

They look different, but they are built from the same four ideas:

1. **Generational handles.** A small `Copy` value (slot number + generation) names an item, and a removed item's old handle fails instead of reaching whatever reused its slot.
2. **Packed columns with swap-remove.** Values of one type sit next to each other with no gaps, which is fast to iterate. Removing an item moves the last one into the hole.
3. **Type-erased storage with a replaceable function table.** The container holds raw bytes plus a small table of functions (drop, move), not a Rust trait object. A hot reload can then point the table at the new DLL before the old one is unloaded.
4. **Change counters.** Ticks, content versions and revisions tell a reader what changed, so it does not have to compare values.

The engine has **three separate implementations of generational handles**, one each for entities, assets and GPU objects. The last section discusses whether they could share one.

## At a glance

| | Entities | Components | Resources | Assets | GPU objects (renderer) |
| --- | --- | --- | --- | --- | --- |
| Lives in | `World` | `World` → archetypes | `World` | `AssetManager` (a resource) | the renderer GPU module |
| Values per type | – | one per entity that has it | **one** | many | many |
| Handle | `Entity { id: u64, generation: u32 }` | none: reached through the entity | none: the type is the key (`ResHandle<T>` is zero-sized) | `Handle<T> { index: u32, generation: u32 }` | `RendererMeshHandle` etc. (`KeyData { index: u32, version: NonZeroU32 }`) |
| Can a handle go stale? | yes, the generation catches it | – | no | yes, the generation catches it | yes, the version catches it |
| Lookup by handle | `HashMap<Entity, EntityLocation>` | entity → archetype → column → row | `HashMap<ResourceId, ErasedResource>` | `Vec` by slot + generation + back-pointer | `HashMap<u64, …>` by asset key, then `SlotMap` by handle |
| Value storage | none of its own; it points into an archetype | packed `ComponentColumn` per type per archetype | one heap box per resource | one packed `ErasedVecStorage` column per type | `SlotMap<K, V>`: a `Vec` of slots, holes allowed |
| Removal | id goes to a free list with the next generation | swap-remove in the archetype | remove from the map | swap-remove; slot freed with the next generation | slot emptied; version + 1 |
| Type identity across DLLs | – | `ComponentId::Native(TypeId)` / `Shared(u128)` / `Descriptor(u128)` | `ResourceId::Native(TypeId)` / `Shared(u128)` | `TypeId`, or the first DLL's `TypeId` for a `shared_name` | none needed: the values never leave the module |
| Survives a hot reload by | plain data, nothing to fix | `rehome_native_columns` swaps each column's `ColumnOps` | `rehome_resources` swaps each box's `ErasedResourceOps` | `rehome_assets` runs each column's refresher | **does not survive**: the renderer is dropped and rebuilt from the asset store |
| Stable identity for later runs | `EntityId(u128)` | – | the type's name | `AssetGuid` | – |
| Change signal | – | `ComponentTicks` per row | `ComponentTicks` per resource | content version per slot + one store `revision` | the epoch of the resources, for bind groups |
| Code | `entity.rs`, `world/mod.rs` | `archetype.rs`, `component.rs`, `world/components.rs` | `resource.rs`, `world/resources.rs` | `asset.rs` | `rendering_resources_manager.rs`, `resources/renderer_resource_storage.rs`, `pill_core/src/slot_map.rs` |

## Entities

**An entity is only a name.** It owns no data. It says where its components are.

```rust
pub struct Entity { id: u64, generation: u32 }     // #[repr(C)], Copy
```

- **Creating** an entity takes an `(id, generation)` pair from `free_entity_ids`, or the next new id with generation `0`.
- **Destroying** an entity removes it from `entity_locations` and pushes `(id, generation + 1)` to the free list. A slot whose generation is already `u32::MAX` is retired, not reused, because wrapping around would make very old handles valid again.
- **Looking up** an entity is one `HashMap` lookup:

```rust
entity_locations: HashMap<Entity, EntityLocation>
EntityLocation { archetype_id: ArchetypeId, index_in_archetype: usize }
```

The map is keyed by the **whole handle**, generation included. A stale handle is simply not a key, so `is_entity_valid` is `contains_key` and needs no separate generation array.

`Entity::NULL` (both fields at their maximum) is what an empty reference field holds, and no allocation can produce it.

**An entity also has a stable identity, `EntityId(u128)`,** for data that outlives the run: scene files, spawn tables and saved selections. It is random, not derived from the slot. If it were derived from the slot, a stale reference would name whichever entity took that slot next. The world indexes it both ways, in `entity_ids: HashMap<Entity, EntityId>` and `entity_handles: HashMap<EntityId, Entity>`. This is the same split assets make between a `Handle<T>` (fast, valid for one run) and a guid (stable on disk).

## Components

**Components are stored by archetype.** An archetype is the table for one exact set of component types. Every entity with `{Transform, Mesh}` is in one table, and every entity with `{Transform, Mesh, Health}` is in another.

```
World.archetypes: HashMap<ArchetypeId, Archetype>
                              │
ArchetypeId(u128) = the component mask (one bit per component type, at most 128 types)
                              │
Archetype {
    component_types: Vec<ComponentId>,
    component_mask:  ComponentMask,
    component_storages: ComponentColumns   ── HashMap<ComponentId, ComponentColumn>
    entities: Vec<Entity>                  ── row → entity (the back-map)
}
```

Each `ComponentColumn` is one packed buffer of one component type:

| Field           | What it holds                                                            |
| --------------- | ------------------------------------------------------------------------ |
| `row_buffer`    | raw bytes, one row per entity, no gaps                                   |
| `element_layout`| the size and alignment of one row                                        |
| `ops`           | `ColumnOps`: the drop and move functions, replaceable on reload           |
| `identity`      | what a typed accessor must prove before it reads the rows                |
| `ticks`         | `Vec<ComponentTicks>`, one per row, for change detection                 |

**Reading one entity's component** takes three map lookups and an index:

1. `entity_locations[entity]` gives the archetype and the row;
2. `archetypes[archetype_id]` gives the table;
3. `component_storages[component_id]` gives the column;
4. `row` gives the value.

**Queries** skip all of that. A query finds the archetypes whose mask contains its components, then walks each column as one slice. This is the reason for the archetype layout: iterating is the common case, and it touches only contiguous memory.

**Adding or removing a component** moves the entity to another archetype. Its row is moved column by column to the destination, and the source row is swap-removed. The entity that was swapped into the hole gets its `index_in_archetype` fixed through `entities[row]`.

**Component identity** is `ComponentId`:

| Variant              | Used for                                              |
| -------------------- | ----------------------------------------------------- |
| `Native(TypeId)`     | an ordinary Rust component, separate per DLL          |
| `Shared(u128)`       | a Rust component with a stable name, the same in every DLL |
| `Descriptor(u128)`   | a C# component described by a manifest; only bytes and a layout |

## Resources

**A resource is the one value of its type in the world.** The type is the key, so there is no handle, no slot and no generation.

```rust
World.resources:      HashMap<ResourceId, ErasedResource>
World.resource_ticks: HashMap<ResourceId, ComponentTicks>
// + resource_factories, resource_field_layouts, shared_resource_claims, claim counts, …
```

- **`ResourceId`** is `Native(TypeId)` or `Shared(u128)`, the hash of the type's `shared_name`. A shared resource is reached by every DLL as one value.
- **`ErasedResource`** is one heap allocation of the value's size and alignment, plus an `ErasedResourceOps` table (drop, size, alignment, layout declaration). A C# resource is the same box with plain bytes and no Rust type.
- **`ResHandle<T>`** is `PhantomData<T>`. It just calls `world.get_resource::<T>()`. It cannot go stale, because the resource is either present or not.
- **Several maps share one key.** The value, its ticks, its latest function table, its field layout and its shared claim live in separate maps keyed by the same `ResourceId`. `remove_resource_records` has to clear all of them together.

Why not `Box<dyn Any>`? Two reasons:

- a trait object's destructor lives in the vtable of the DLL that created the value. Resources outlive reloads, so that destructor could point into an unloaded DLL;
- `downcast_ref` compares `TypeId`, which differs between DLLs.

## Assets

**Assets are many values per type, shared by many entities, and identified on disk by a guid.** They live in `AssetManager`, which is itself a shared resource (`pill_engine::asset::AssetManager`).

```
Handle<Mesh> { index: 2, generation: 5 }
       │
       ▼   AssetColumn for Mesh (the bookkeeping)
generations[2] == 5 ?
slot_rows[2] = row 0   and   row_slots[0] == 2 ?
       │
       ▼   ErasedVecStorage for Mesh (the values, packed)
rows: [ crate, rock, tree ]
```

Per asset type there are two parts:

| Part             | What it holds                                                                   |
| ---------------- | ------------------------------------------------------------------------------- |
| `ErasedVecStorage` | the values, packed, with a replaceable `ErasedVecStorageOps` table            |
| `AssetColumn`    | `generations`, `slot_rows`, `row_slots`, `free_slots`, `content_versions`, name and guid indexes, import settings |

- **A handle addresses a slot, not a row.** Rows move when another asset is removed, but the slot stays.
- **Looking up** an asset is two vector reads with no hashing. The generation must match, and `row_slots[slot_rows[index]]` must point back at the same slot. The back-pointer is needed because a freed slot's `slot_rows` entry is left as the last occupant left it.
- **`get_mut`** bumps that slot's **content version** and the store's **revision**. That is how the renderer knows what to upload again.
- **Type identity:** the column is keyed by `TypeId`. For a type with a `shared_name`, it is the `TypeId` of the first DLL that registered it, found through `shared_keys`. A later DLL's registration must match the recorded size and alignment.
- **Names and guids** are side indexes on the slot. The guid is the asset's identity across runs; the handle is only valid in this run. See [assets.md](../concepts/assets.md).

## GPU objects in the renderer

**The renderer keeps one GPU object per live asset and rebuilds only what changed.** There are two layers:

```
Handle<Mesh> { index, generation }
       │  asset_key = (generation << 32) | index      (pill_master_renderer_data)
       ▼
GpuColumn<RendererMeshHandle>  ── HashMap<u64, (RendererMeshHandle, Option<content version>)>
       │
       ▼
SlotMap<RendererMeshHandle, RendererMesh>             (pill_core::slot_map)
       │
       ▼
vertex buffer, index buffer
```

- **`RendererResourceStorage`** owns five `SlotMap`s (shaders, materials, textures, meshes, cameras) and the four placeholder textures used when a slot binds nothing.
- **`SlotMap<K, V>`** is a `Vec<Slot { version: NonZeroU32, value: Option<V> }>` with a free list. It is **not packed**: a removed value leaves an empty slot. A lookup checks that the version matches and that the slot has a value. A version that would reach `u32::MAX` retires the slot. `define_slot_key!` gives each kind of object its own handle type, so a mesh handle cannot be used on the texture map.
- **`RenderingResourcesManager`** maps asset keys to GPU handles in one `GpuColumn` per asset type. The asset key includes the generation, so a reused asset slot gives a new key and never reaches the old GPU object.
- **Sync.** When the asset store's `revision` differs from `synced_revision`, the manager walks the store's column for each type:
  - it builds a key it has not seen;
  - it rebuilds a key whose content version moved;
  - it removes a key the store no longer holds.

  A material whose shader or texture changed is marked stale and rebuilt. The `resource_epoch` goes up whenever a shader or texture object changes, so the render chain knows its bind groups are out of date. A failed upload is logged and retried on the next revision.
- **Reloads.** None of this has to survive a reload. The renderer lives inside the GPU module, the host drops it through `pill_renderer_detach` while that image is still loaded, and a new renderer rebuilds every GPU object from the asset store. So there is no function table to re-point and no shared identity to check.

## What happens when code uses a handle that is no longer valid?

**Nothing breaks. The access reports "not there", and the caller decides what to do.** No container panics on a stale handle, and none reads another item through it. The check is the generation (or version) comparison described above: a removed item's slot has moved on, so the old handle no longer matches.

### Entities

A destroyed entity's handle is no longer a key in `entity_locations`. Every entry point turns that into a plain result:

| Call                                    | Result with a stale `Entity`                                       |
| --------------------------------------- | ------------------------------------------------------------------ |
| `world.is_entity_valid(entity)`         | `false`                                                            |
| `world.get_component::<T>(entity)` / `get_component_mut` | `None`                                            |
| `world.add_component(entity, value)`    | `Err(AddComponentError::EntityNotFound)`; the value is dropped     |
| `world.remove_component::<T>(entity)`   | `Err(RemoveComponentError::EntityNotFound)`; nothing changes                    |
| `world.destroy_entity(entity)`          | `false`; destroying twice is harmless                              |
| a deferred command (`commands.add_component(entity, …)`, …) | the flush records `CommandError::EntityNotFound { entity, operation }` and skips it |

Deferred commands need this most. A system can queue a command for an entity that another command in the same flush destroys first. By default (`should_exit_on_error` is `false`), the flush **logs** the failures and the frame continues. With `set_should_exit_on_error(true)`, `process_frame` returns them as `Err(Vec<CommandError>)` and the caller decides.

> **Example:** a bullet system queues `destroy(enemy)`, and a damage system queues `add_component(enemy, Burning)` in the same frame. The destroy runs first. The add finds no entity, so it is recorded as `EntityNotFound { operation: "add_component" }` and logged. The `Burning` value is dropped, and no other entity receives it, even one that reuses the enemy's slot later. That entity has a different generation.

A saved reference doesn't hold an `Entity` at all. It holds an `EntityId`, which `world.entity_by_id(id)` turns into `None` when that entity is gone.

### Assets

`AssetManager` checks the handle first in every call, through `is_live` (the slot's generation must match) and then `slot_row` (the back-pointer must match):

| Call                           | Result with a stale `Handle<T>`                                           |
| ------------------------------ | ------------------------------------------------------------------------- |
| `assets.get(handle)`           | `None`                                                                    |
| `assets.get_mut(handle)`       | `None`; the store's `revision` and the content versions are not touched   |
| `assets.remove(handle)`        | `None`; removing twice is harmless                                        |
| name or guid lookups           | return the **current** handle (with the new generation), never the stale one |

A handle goes stale in these cases:

- **The asset was removed** with `remove`, or the editor deleted its file (`remove_loaded`). A source file deleted outside the editor while the dev host runs is **not** removed: the asset stays loaded and its handle stays valid until the next run, because components may still hold it.
- **A hot reload changed a non-shared asset struct.** The new code has a new `TypeId`, so it looks in a new, empty column. An old handle finds no slot there and returns `None`. The old column still exists, but the new code can't reach it.
- **The handle came from another run.** A handle is only meaningful in the run that issued it. Scenes save a guid for that reason, and an unresolvable guid becomes `Handle::INVALID` when the scene loads.

`Handle::INVALID` (both fields at `u32::MAX`) behaves exactly like a stale handle: every lookup returns `None`. Some fields use it as a documented choice. For example, a material whose `shader` is `INVALID` draws with the built-in shader.

### Resources

Resources have no handles, so they can't go stale. The equivalent case is a resource that isn't there, because it was never inserted or was removed. `world.get_resource::<T>()`, `ResHandle::get`, and the `Res<T>` / `ResMut<T>` parameters' `get` then return `None`.

### GPU objects in the renderer

The renderer meets stale handles at two levels, and each level has a fallback, so a frame always draws something:

| What is missing                                   | What the renderer does                                                   |
| ------------------------------------------------- | ------------------------------------------------------------------------ |
| an instance's **mesh** has no GPU object          | the instance is **skipped** silently (`resolve_draw_handles` returns `None`) |
| an instance's **material** has no GPU object      | draws with the **default material**                                      |
| a material's GPU object is not in the storage     | draws with the **default shader**                                        |
| a material names a **shader** that isn't loaded   | the material is built with the default shader, and a warning names it: "material `…` names a shader that is not loaded; drawing with the default shader" |
| a material names a **texture** that isn't uploaded | that slot is left out, so the shader's slot gets the **placeholder** texture for its kind (white for colour, flat for normal, black for equirect and cubemap) |
| a texture slot of kind **depth** has nothing bound | the material fails to build ("has no pipeline"), and the instance falls back to the default material |

Two properties keep this safe:

- **The asset key includes the generation.** `asset_key = (generation << 32) | index`, so when an asset slot is reused, the new asset has a new key. A stale `Handle<T>` arriving in a frame finds no entry in the `GpuColumn`, rather than the new asset's GPU object.
- **The `SlotMap` checks the version too.** A `RendererMeshHandle` whose GPU object was removed returns `None` from `SlotMap::get`. The next sync removes the asset key, which removes the entry that held that handle.

### Summary of the outcomes

| Container   | Stale access returns                        | Logged?                                  | Fallback                              |
| ----------- | ------------------------------------------- | ---------------------------------------- | ------------------------------------- |
| entities    | `None`, `false` or an `EntityNotFound` error | deferred commands: yes, by default       | none: the operation is skipped        |
| components  | `None` (through the entity)                  | no                                       | none                                  |
| resources   | `None` (the resource is absent)              | no                                       | none                                  |
| assets      | `None`                                       | no; scene loading reports an unresolved guid once per guid | `Handle::INVALID`             |
| GPU objects | `None` internally                            | a missing shader is warned; a missing mesh is not | default material, default shader, placeholder textures, or skip |

## What do they have in common?

### Generational handles, three times

| | Entity | `Handle<T>` (asset) | `SlotMap` key (GPU) |
| --- | --- | --- | --- |
| Index | `u64` | `u32` | `u32` |
| Generation | `u32`, starts at `0` | `u32`, starts at `0` | `NonZeroU32`, starts at `1` |
| Where the current generation is kept | only as part of the `HashMap` key; the free list remembers the next one | `generations: Vec<u32>` | inside each `Slot` |
| How a stale handle fails | not a key in the map | generation mismatch or back-pointer mismatch | version mismatch or empty slot |
| At `u32::MAX` | slot retired | slot retired | slot retired |
| Empty handle | `Entity::NULL` | `Handle::INVALID` | – |
| Stable identity for later runs | `EntityId(u128)`, random | `AssetGuid`, random, stored in `.meta` or the file header | none: GPU objects are rebuilt |

All three follow the same rule: a handle names a slot, the slot carries a version, a removal raises the version, and a slot is never reused at its maximum. They differ only in where the version is stored and how the slot finds its value.

### Packed columns with swap-remove

Archetype component columns and asset columns are both packed, and both fill a removed row with the last row. Each keeps a back-map to fix the moved item afterwards: `Archetype.entities` (row → entity) and `AssetColumn.row_slots` (row → slot). The renderer's `SlotMap` is the exception: it leaves holes, because it is never iterated on a hot path, so packing would buy nothing.

### Raw bytes plus a replaceable function table

Everything that **outlives a reload** is stored as bytes with a table of plain function pointers instead of a trait object:

| Container  | Table                  | Re-pointed by            |
| ---------- | ---------------------- | ------------------------ |
| components | `ColumnOps`            | `rehome_native_columns`  |
| resources  | `ErasedResourceOps`    | `rehome_resources`       |
| assets     | `ErasedVecStorageOps`  | `rehome_assets` (per-column refresher) |

The reason is the same for all three. A vtable lives in the DLL that created the value, and a hot reload can unload that DLL while the value lives on. A table of plain data can be swapped for the new DLL's table before the old DLL goes. Entities hold no code, so they need nothing. GPU objects never outlive their DLL, so they don't need it either.

### Stable identity from a hashed name

Components, resources and assets all distinguish "this type in this DLL" (`TypeId`) from "this type in every DLL" (a `shared_name` hashed to a `u128`, or the first DLL's `TypeId`). A shared type is checked when a second DLL registers it: components and resources through their claims, and assets through size and alignment. C# components and resources are always shared, because they have no Rust type at all.

### Change counters

| Container  | Counter                                 | Read by                                  |
| ---------- | --------------------------------------- | ---------------------------------------- |
| components | `ComponentTicks` per row (`added`, `changed`) | `Changed<T>` / `Added<T>` query filters |
| resources  | `ComponentTicks` per resource           | set on every mutable borrow and handed to the C# bridge with a foreign resource's bytes; no Rust query filter reads them |
| assets     | content version per slot, plus `revision` for the store | the renderer's sync              |
| GPU objects| `resource_epoch`                        | the render chain's bind groups           |

None of the containers compares values to find changes. Each one counts writes.

### A `HashMap` at the outer layer

Every container that is keyed by a **type** or a **mask** uses a `HashMap` there: `archetypes`, `component_storages`, `resources`. So does the renderer's asset-key → GPU-handle map. The **per-item** lookups differ:

| Per-item lookup          | Structure                         |
| ------------------------ | --------------------------------- |
| entity → location        | `HashMap` (hashed on every access) |
| asset handle → row       | `Vec` (no hashing)                |
| GPU handle → object      | `Vec` (no hashing)                |

Entities are the only per-item container that hashes on every lookup.

## How do they differ, and why?

- **Entities hold no data**, because components are stored by archetype, and an entity moves between archetypes. Its location therefore includes the archetype, which assets never need.
- **Components are split by archetype, not by type alone**, so that a query walks only the entities that have every component it asks for, in contiguous memory.
- **Resources have no handles**, because there is one value per type: the type is a complete key, and nothing can go stale.
- **Assets have handles and guids**, because a handle is fast but valid for one run only, and a guid is slow to resolve but stable on disk. Scenes save the guid; code uses the handle.
- **GPU objects are a cache, not a source of truth.** They can be rebuilt from the asset store at any time. That is why they can live inside a reloadable DLL, use a simpler unpacked slot map and skip the reload machinery.

## Could they be unified?

Yes, partly. Nothing below has been measured or implemented.

- **One generational slot table for entities, assets and GPU objects.** The three implementations follow the same rules, and `pill_core::slot_map::SlotMap` is already generic over its key and value. A version shaped like `SlotTable<Location>`, with `generations: Vec<u32>`, `locations: Vec<Option<Location>>` and `free_slots`, would serve entities (`Location = EntityLocation`) and assets (`Location = row`). Clearing the location when a slot is freed would make the asset back-pointer check unnecessary for validity, although `row_slots` would still be needed to fix the moved row after a swap-remove.
- **Entities would gain the most.** They would move from a hashed lookup to a vector index on every component access, and their iteration order would become deterministic. The risks:
  - about 95 references to `entity_locations`;
  - `Entity.id` is a `u64`;
  - persistence and `Entity::from_raw` restore arbitrary saved ids, so a vector indexed by id needs a guard against huge ids.
- **Assets should not move to a `HashMap`.** The renderer resolves asset handles on every draw, and the vector lookup is the faster of the two.
- **Resources do not fit a slot table.** They have no handles. The worthwhile change there is to fold the parallel per-id maps into one entry struct, so that a removal cannot leave one of them behind. A dense index instead of hashing would matter only if a profile shows it, because there are tens of resources and one lookup per system run.

## Where is this in the code?

Paths are under `modules/` unless noted.

| What                                                       | Where                                                                    |
| ---------------------------------------------------------- | ------------------------------------------------------------------------ |
| `Entity`, `Entity::NULL`, `from_raw`                       | `engine/pill_engine_core/src/entity.rs`                                  |
| `entity_locations`, `free_entity_ids`, `archetypes`, resource maps | `engine/pill_engine_core/src/world/mod.rs`                       |
| `Archetype`, `ComponentColumns`, `ComponentColumn`, `ColumnOps` | `engine/pill_engine_core/src/archetype.rs`                          |
| `ComponentId`, `ComponentMask`, `ComponentTicks`           | `engine/pill_engine_core/src/component.rs`                               |
| `rehome_native_columns`                                    | `engine/pill_engine_core/src/world/components.rs`                        |
| `ResourceId`, `ErasedResource`, `ErasedResourceOps`, `ResHandle` | `engine/pill_engine_core/src/resource.rs`                          |
| `rehome_resources`, `rehome_assets`                        | `engine/pill_engine_core/src/world/resources.rs`                         |
| `Handle<T>`, `AssetManager`, `AssetColumn`                 | `engine/pill_engine_core/src/asset.rs`                                   |
| `ErasedVecStorage`                                         | the external `trait_type_map` crate                                     |
| `SlotMap`, `KeyData`, `define_slot_key!`                   | `engine/pill_core/src/slot_map.rs`                                      |
| `asset_key`                                                | `extensions/pill_master_renderer/pill_master_renderer_data/src/assets/mod.rs` |
| `RenderingResourcesManager`, `GpuColumn`                   | `extensions/pill_master_renderer/pill_master_renderer/src/rendering_resources_manager.rs` |
| `RendererResourceStorage`                                  | `extensions/pill_master_renderer/pill_master_renderer/src/resources/renderer_resource_storage.rs` |
| Asset implementation in depth                              | [Assets: how they are implemented](../concepts/assets.md)                |
