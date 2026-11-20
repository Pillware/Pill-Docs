<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4920"></a>

# Module `pill_engine_core::ecs::world::storage`

Visibility: `{'restricted': {'parent': 4727, 'path': '::ecs::world'}}` · Source: `engine\pill_engine_core\src\ecs\world\storage.rs:1`

The entity-side half of a world: everything an entity owns, in one value.

## Responsibilities

- Declares [`EntityStorage`](struct.EntityStorage.md#rustdoc-item-4849): the archetypes and their columns, the entity
  allocator and its free list, the locations map, the stable-id maps and the
  archetype generation counter.
- Provides the moves the play-mode machinery needs: replacing the live
  storage with another value, and running a reload pass over both the live
  and the held one.

## Design

A [`World`](../struct.World.md#rustdoc-item-2848) keeps its entity data in one
`EntityStorage` and may hold a second one aside. Everything that is not
entity data - the component registry, the per-type function tables, the
resources and the per-frame bookkeeping - stays on the world, because both
storages are read through the same registry and the same tables.

Holding a storage is what lets the editor run a game and come back to the
world it had: the live storage is the running one, and the held storage is
the edit state. A reload has to reach both, because a column's function
table points into the image that registered the type; a held column left
un-re-pointed would call code that is no longer mapped.

Change-detection ticks live in the columns, so they travel with the storage
and a restore leaves them where they were.

## Invariants

- `archetype_generation` goes up by one whenever an archetype is added or
  removed, and whenever a storage is swapped in, so every query's cached
  archetype list is recomputed.
- A storage's `entity_locations`, `entity_ids` and `entity_handles` describe
  exactly the entities in its archetypes.

## Module contents

### Structs
- [`EntityStorage`](struct.EntityStorage.md#rustdoc-item-4849) — Every piece of world state an entity owns, as one value.
- [`ResourceCopy`](struct.ResourceCopy.md#rustdoc-item-4930) — The copies of the game-state resources, taken at Play and put back at Stop.
- [`UncopyableComponents`](struct.UncopyableComponents.md#rustdoc-item-4855) — The component types a storage copy could not include.
- [`UncopyableResources`](struct.UncopyableResources.md#rustdoc-item-4957) — The resource types a copy could not include.

### Functions
- [`clone_column`](fn.clone_column.md#rustdoc-item-4919) — The clone function a `Clone` component's registration records.
- [`clone_resource`](fn.clone_resource.md#rustdoc-item-4992) — The clone function a `Clone` resource's insertion records.
- [`copies_as_bytes`](fn.copies_as_bytes.md#rustdoc-item-4924) — Whether a column's rows may be copied byte for byte.
- [`copy_column_bytes`](fn.copy_column_bytes.md#rustdoc-item-4921) — Copies a column whose rows own no heap data, byte for byte.
- [`copy_row_ticks`](fn.copy_row_ticks.md#rustdoc-item-4922) — Puts the source's change-detection ticks on the row just pushed.
- [`new_column_for`](fn.new_column_for.md#rustdoc-item-4923) — Builds an empty column of the same kind as `source_column`.
- [`push_type_name`](fn.push_type_name.md#rustdoc-item-4925) — Adds a component type's registered name to `names`, once.

### Type aliases
- [`CloneColumnFn`](type.CloneColumnFn.md#rustdoc-item-4883) — One type's row-cloning function: copies every row of the source column into
- [`ResourceCloneFn`](type.ResourceCloneFn.md#rustdoc-item-4926) — One resource type's cloning function: copies the live value into a new
