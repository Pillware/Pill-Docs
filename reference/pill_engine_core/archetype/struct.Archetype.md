<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-84"></a>

# Struct `pill_engine_core::archetype::Archetype`

```rust
pub struct Archetype;
```

Source: `engine\pill_engine_core\src\archetype.rs:1822`

Core storage unit grouping entities with the same component set.

Uses a Structure of Arrays (SoA) layout for cache-friendly bulk iteration.

## Fields

<a id="rustdoc-item-664"></a>

### `id`

```rust
id: ArchetypeId
```

Unique identifier derived from this archetype's component mask.

<a id="rustdoc-item-665"></a>

### `component_types`

```rust
component_types: Vec<crate::component::ComponentId>
```

Component types stored in this archetype, in registration order.

Needed for iteration and lookup.

<a id="rustdoc-item-666"></a>

### `component_mask`

```rust
component_mask: crate::component::ComponentMask
```

Bitmask of the stored component types for fast query matching.

<a id="rustdoc-item-667"></a>

### `component_storages`

```rust
component_storages: ComponentColumns
```

Component storage, keyed by component id.

One map holds both kinds of column: a column built for a Rust type and
one built from a manifest descriptor have the same form - bytes, a
layout and an ops table - so a second map would hold nothing extra.
Which constructor built a column is recorded in its identity, not in
where the column is stored.

<a id="rustdoc-item-668"></a>

### `entities`

```rust
entities: Vec<crate::entity::Entity>
```

Entities currently stored in this archetype.

## Associated functions and methods

<a id="rustdoc-item-670"></a>

### `new`

```rust
pub fn new(id: ArchetypeId, component_types: Vec<ComponentId>, component_mask: ComponentMask, storage_factories: &HashMap<ComponentId, StorageFactory>) -> Self;
```

Creates a new archetype with storage for the specified component types.

`storage_factories` provides a way to create storage for each component
type by [`ComponentId`](../component/enum.ComponentId.md#rustdoc-item-83), allowing archetype creation without knowing the
concrete types.

#### Panics

Panics when a component type has no entry in `storage_factories`, which
happens when `world.register_component::<T>()` was not called for it.

<a id="rustdoc-item-671"></a>

### `has_component_bit`

```rust
pub fn has_component_bit(self: &Self, bit: u8) -> bool;
```

Checks whether this archetype stores the component type at the given mask bit.

Uses the bitmask for O(1) lookup instead of a linear search through
the component types.

<a id="rustdoc-item-672"></a>

### `has_component`

```rust
pub fn has_component<T: Component>(self: &Self) -> bool;
```

Checks whether this archetype stores the specified component type.

Note: This uses an O(n) linear search. Prefer `has_component_bit` with
a pre-looked-up bit index for hot paths.

<a id="rustdoc-item-673"></a>

### `matches_mask`

```rust
pub fn matches_mask(self: &Self, required_mask: &ComponentMask) -> bool;
```

Checks whether this archetype contains every component a query requires.

Called in the query setup hot path for every archetype.

<a id="rustdoc-item-674"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

Returns the number of entities in this archetype.

<a id="rustdoc-item-675"></a>

### `entity_count`

```rust
pub fn entity_count(self: &Self) -> usize;
```

Returns the number of entities in this archetype (alias for [`Self::len`](#rustdoc-item-674)).

Provided for API consistency with other collection types.

<a id="rustdoc-item-676"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Returns `true` when this archetype contains no entities.

<a id="rustdoc-item-677"></a>

### `get_archetype_info`

```rust
pub fn get_archetype_info(self: &Self, registry: &crate::component::ComponentRegistry) -> String;
```

Builds a human-readable summary of this archetype.

Includes the archetype ID, the entity count, and the names of the
stored component types. Unknown component IDs render as "Unknown".

<a id="rustdoc-item-679"></a>

### `print_info`

```rust
pub fn print_info(self: &Self, registry: &crate::component::ComponentRegistry);
```

Logs information about this archetype (component names and entity count).

<a id="rustdoc-item-680"></a>

### `memory_estimate`

```rust
pub fn memory_estimate(self: &Self) -> usize;
```

Estimates the memory footprint of this archetype in bytes.

Adds up the entity array's capacity, every component column's rows at
the entity count, and the change-detection tick vectors. Each column
reports its own element size, because the archetype has no other way to
learn it.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
