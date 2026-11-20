<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4849"></a>

# Struct `pill_engine_core::ecs::world::storage::EntityStorage`

```rust
pub(crate) struct EntityStorage;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\ecs\world\storage.rs:55`

Every piece of world state an entity owns, as one value.

The world keeps one of these live and may keep a second one held aside; see
the module header for why both exist.

## Fields

<a id="rustdoc-item-4840"></a>

### `next_fresh_entity_id`

```rust
next_fresh_entity_id: u64
```

Next fresh entity ID handed out when the free list is empty.

<a id="rustdoc-item-4841"></a>

### `free_entity_ids`

```rust
free_entity_ids: Vec<(u64, u32)>
```

Free list of recycled entity IDs, each with the generation it will be
handed out with. Stored as (id, generation) pairs.

<a id="rustdoc-item-4842"></a>

### `entity_ids`

```rust
entity_ids: std::collections::HashMap<crate::entity::Entity, crate::entity::EntityId>
```

The stable id of every live entity, keyed by its handle.

<a id="rustdoc-item-4843"></a>

### `entity_handles`

```rust
entity_handles: std::collections::HashMap<crate::entity::EntityId, crate::entity::Entity>
```

Reverse of `entity_ids`, so a saved reference finds its entity in O(1).

<a id="rustdoc-item-4844"></a>

### `entity_id_fallback_counter`

```rust
entity_id_fallback_counter: u64
```

Seeds the counter-derived ids used when the platform has no random
source; see `World::mint_entity_id`.

<a id="rustdoc-item-4845"></a>

### `archetypes`

```rust
archetypes: std::collections::HashMap<crate::archetype::ArchetypeId, crate::archetype::Archetype>
```

All archetypes in this storage, keyed by their component mask.

<a id="rustdoc-item-4846"></a>

### `entity_locations`

```rust
entity_locations: std::collections::HashMap<crate::entity::Entity, crate::world::EntityLocation>
```

The archetype and row each entity lives in.

<a id="rustdoc-item-4848"></a>

### `archetype_generation`

```rust
archetype_generation: u64
```

Counter that goes up by one whenever an archetype is added or removed,
or the storage is swapped for another value.

Queries cache the list of archetypes that match them and compare this
counter on each run: if it has not changed, the cached list is still
correct.

## Associated functions and methods

<a id="rustdoc-item-4850"></a>

### `new`

```rust
pub(crate) fn new() -> Self;
```

Creates an empty storage.

<a id="rustdoc-item-4851"></a>

### `bump_archetype_generation`

```rust
pub(crate) fn bump_archetype_generation(self: &mut Self);
```

Records that the archetype set changed, so query caches are recomputed.

<a id="rustdoc-item-4852"></a>

### `entity_count`

```rust
pub(crate) fn entity_count(self: &Self) -> usize;
```

Returns the number of live entities in this storage.

<a id="rustdoc-item-4853"></a>

### `component_row_count`

```rust
pub(crate) fn component_row_count(self: &Self) -> usize;
```

Returns how many component rows this storage holds.

One entity with three components contributes three rows, so the figure
describes the work a copy does rather than the size of the world.

<a id="rustdoc-item-4856"></a>

### `duplicate`

```rust
pub(crate) fn duplicate(self: &Self, world: &World) -> Result<EntityStorage, UncopyableComponents>;
```

Copies every entity, component and counter of this storage.

Entity handles, the allocator's next id and free list, the stable ids,
the locations and the change ticks are identical in the copy. Each
component column is copied by the rule that fits its type:

- a type that recorded a clone function is cloned row by row;
- a foreign (descriptor) column and a native type whose declared layout
  holds no `vec:`, `dynbuf:` or `string` field are copied byte for byte;
- anything else makes the whole copy fail, naming every such type.

#### Errors

Returns [`UncopyableComponents`](struct.UncopyableComponents.md#rustdoc-item-4855) with one name per type that is neither
cloneable nor plain data. A column whose component id no longer has a
storage factory is uncopyable for the same reason: its rows can only be
read through code the reload has replaced.

The play session is the caller, so it is compiled in ahead of one.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Default`
