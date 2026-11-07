# Entities: how they are implemented

## Summary

An `Entity` is a 16-byte handle: a slot id plus a generation number. The world maps each live handle to the archetype and row that hold its components, so every lookup is one hash-map read. Destroying an entity frees its slot with the next generation, so old handles stop matching.

This is the implementation counterpart of [concepts/entities.md](../concepts/entities.md). Read that first for how to use entities.

## At a glance

| Piece                | What it is                                                     | Where                          |
| -------------------- | -------------------------------------------------------------- | ------------------------------ |
| `Entity`             | `id: u64` + `generation: u32`, `#[repr(C)]`, `Copy`            | `entity.rs`                    |
| `EntityId`           | random 128-bit id, for references that outlive one run         | `entity.rs`                    |
| `EntityLocation`     | `archetype_id` + `index_in_archetype`                          | `world/mod.rs`                 |
| `World.entity_locations` | `HashMap<Entity, EntityLocation>`: the "is it alive?" table | `world/mod.rs`                 |
| `World.free_entity_ids`  | `Vec<(id, next_generation)>`: slots ready for reuse      | `world/mod.rs`                 |
| `World.entity_ids` / `entity_handles` | `Entity` ↔ `EntityId`, both directions         | `world/mod.rs`                 |
| `EntityBuilder`      | collects components, then inserts the entity in one step       | `world/mod.rs`                 |
| `DeferredEntityBuilder` | the same, but queues a command instead of inserting         | `commands.rs`                  |

```
 Entity { id: 7, generation: 3 }
        │
        ▼  entity_locations (HashMap keyed by the whole handle)
 EntityLocation { archetype_id: A, index_in_archetype: 12 }
        │
        ▼  archetypes[A]
 entities[12]   Position column[12]   Velocity column[12]   ...
```

## Why is an entity only an id?

An entity is only an id so its components can be stored by type rather than by object.

If each entity were an object holding its own components, an ECS system that moves things would jump around memory from object to object. Pill instead keeps all components of one type in one tightly packed array (see [components.md](components.md)). An entity is then just "row 12 in archetype A", and the handle only needs to find that row.

The handle is small and `Copy`, so storing it in a component, a resource or a list costs nothing and needs no reference counting.

## Why does a handle carry a generation?

The generation lets the world reuse slot ids without letting an old handle reach the new entity.

Without reuse, ids would grow forever. With reuse but no generation, a handle kept after its entity was destroyed would silently point at whichever entity took the slot next. That is a use-after-free bug, and it is hard to notice because the program does not crash.

> **Example:** an enemy is entity `7v3` (slot 7, generation 3). A homing missile stores that handle. The enemy dies, and slot 7 goes back on the free list as `(7, 4)`. A new pickup is created and becomes `7v4`. The missile asks for its target's transform with `7v3`. `entity_locations` is keyed by the whole handle, so `7v3` is not found, and `get_component` returns `None`. The missile does not fly towards the pickup.

## How is an entity created?

Creating an entity has two halves: reserving a handle, then inserting a row.

1. `World::create_entity` calls `allocate_entity`. That pops a `(id, generation)` pair from `free_entity_ids`, or takes a fresh id from `next_fresh_entity_id` with generation 0. It returns an `EntityBuilder` holding the handle.
2. `.with(component)` boxes each component into a small `ComponentInserter` that remembers its concrete type.
3. `.build()` checks the component set before touching storage:
   - a component type repeated twice gives `BuildError::DuplicateComponent`;
   - a type with no storage factory (never registered) gives `BuildError::ComponentNotRegistered`;
   - an `EntityId` passed with `.with_id(...)` that a live entity already has gives `BuildError::DuplicateEntityId`.

   On any refusal the reserved handle goes straight back on the free list with `release_entity`, so nothing leaks.
4. `insert_entity_with_components` then:
   - finds or creates the archetype for the exact component set (see [components.md](components.md#how-does-the-world-find-the-archetype-for-a-set-of-components));
   - appends the handle to the archetype's `entities` vector, and lets each inserter push its value into its column;
   - stamps the new row's change ticks with the current world tick, which is what makes `Added<T>` see it;
   - records the `EntityLocation`;
   - mints a random `EntityId` (unless one was supplied) and indexes it both ways.

The `EntityId` is minted at insertion, not at reservation, so a handle that is reserved and never inserted costs nothing.

## How is an entity destroyed?

`World::destroy_entity` removes the row with a **swap-remove**, which keeps every array dense in constant time.

1. Remove the handle from `entity_locations`. If it was not there, the entity was already gone and the call returns `false`.
2. Remove its `EntityId` from both id maps, so the id never names a later occupant of the slot.
3. Swap the last row of the archetype into the destroyed row, in the `entities` vector and in every component column. The column runs the component's destructor on the removed value.
4. Update the `EntityLocation` of the entity that was moved into the hole.
5. If the archetype is now empty, delete it and bump `archetype_generation`, which tells cached queries to rescan.
6. Push `(id, generation + 1)` onto `free_entity_ids`.

> **Example:** archetype A holds `[e1, e2, e3, e4]`. Destroying `e2` moves `e4` into row 1: `[e1, e4, e3]`. Only `e4`'s location changes. No other row moves, and no array has a gap.

A consequence of swap-remove: row order inside an archetype is not stable. Never store a row index; store the `Entity`.

## What happens when a generation reaches its maximum?

The slot is retired instead of wrapping around.

When a destroyed entity's generation is already `u32::MAX`, the slot is not pushed back on the free list. Wrapping to 0 would bring back every stale handle from 2³² reuses ago. This needs about four billion reuses of one slot, so it never happens in practice, but it costs nothing to make it impossible.

## Why are there two kinds of ids, `Entity` and `EntityId`?

`Entity` is fast and only valid while the project runs. `EntityId` is slower to look up and stays valid across runs.

| Property                    | `Entity`                              | `EntityId`                                  |
| --------------------------- | ------------------------------------- | ------------------------------------------- |
| Size                        | 16 bytes                              | 16 bytes (`u128`)                           |
| Made from                   | slot id + generation                  | the operating system's random source        |
| Lookup                      | `entity_locations` (one hash read)    | `entity_handles` → `Entity` → location      |
| Meaningful in the next run? | no: slots are handed out in another order | yes                                     |
| Used by                     | ECS systems, components, resources    | scene files, the editor's saved selection   |

A scene file stores each entity's `EntityId`, and loading the scene creates the entities with `EntityBuilder::with_id`. An `Entity` field inside a component is saved as the target's `EntityId` and reconnected after every entity in the scene exists (see `scene.rs`, "Loading runs four passes").

The id is random rather than counted from the slot, so a stale saved reference names nothing instead of the wrong entity. If the random source fails, or four random ids in a row collide, `mint_entity_id` falls back to an id hashed from a counter and logs a warning once.

## How does `Commands` create an entity before the update ends?

`Commands` reserves the handle immediately and queues the insertion.

`DeferredEntityBuilder::new` calls `world.allocate_entity()`, so `commands.create_entity()...build()` returns a real `Entity` at once. The components go into a `DeferredCommand::CreateEntity` in the `CommandQueue`. After every ECS system of the update has run, `execute_queued_commands` inserts the row. Until then, the handle is reserved but `is_entity_valid` returns `false` and no query sees it.

If the flush refuses the creation (for example, an unregistered component), `recycle_refused_entity` puts the slot back with the **next** generation. The caller may already have stored the handle, so the slot must not come back with the same generation.

See [systems.md](systems.md#when-are-commands-applied) for when the flush runs.

## Why are `entity_locations` keyed by the whole handle?

Keying by the whole handle makes the generation check free.

`is_entity_valid` is just `entity_locations.contains_key(&entity)`. A stale handle has a different generation, so it hashes and compares as a different key and is not found. Every lookup (`get_component`, `add_component`, `destroy_entity`) goes through the same map, so none of them needs a separate generation comparison.

## What does an entity cost?

| What                                    | Size or cost                                         |
| --------------------------------------- | ---------------------------------------------------- |
| The handle                              | 16 bytes                                             |
| Its `EntityLocation` entry              | 32 bytes plus hash-map overhead                      |
| Its `EntityId` entries                  | two hash-map entries                                 |
| Its row                                 | one slot in `entities` plus one row per component, each with 8 bytes of change ticks |
| `create`, `destroy`, `is_entity_valid`  | constant time                                        |

## Where is this in the code?

All paths are in `modules/engine/pill_engine_core/src/`.

| What                                                       | Where                                             |
| ---------------------------------------------------------- | ------------------------------------------------- |
| `Entity`, `Entity::NULL`, `EntityId`                       | `entity.rs`                                       |
| `allocate_entity`, `mint_entity_id`, `destroy_entity`      | `world/mod.rs`                                    |
| `EntityBuilder`, `insert_entity_with_components`           | `world/mod.rs`                                    |
| `DeferredEntityBuilder`, `recycle_refused_entity` use      | `commands.rs`                                     |
| Entity references in scenes                                | `scene.rs`, `saved_references.rs`                 |
| Tests (handle size, generations, recycling)                | `entity.rs` tests, `world/tests.rs`               |
