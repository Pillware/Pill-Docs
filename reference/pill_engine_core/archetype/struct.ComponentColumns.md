<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-77"></a>

# Struct `pill_engine_core::archetype::ComponentColumns`

```rust
pub struct ComponentColumns;
```

Source: `engine\pill_engine_core\src\archetype.rs:639`

The component columns of one archetype, keyed by [`ComponentId`](../component/enum.ComponentId.md#rustdoc-item-83).

The key is [`ComponentId`](../component/enum.ComponentId.md#rustdoc-item-83), not [`TypeId`](std::any::TypeId): a component
type linked into two binaries has two `TypeId`s, so the binary that did not
create the column could not find it. Every other structure - the registry's
bit, the archetype's `component_types`, the tick vectors, the storage
factories - already identifies the component by one `ComponentId`.

## Fields

<a id="rustdoc-item-486"></a>

### `columns`

```rust
columns: std::collections::HashMap<crate::component::ComponentId, ComponentColumn>
```

One contiguous column per component in the archetype.

## Associated functions and methods

<a id="rustdoc-item-488"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates an empty set of columns.

<a id="rustdoc-item-489"></a>

### `with_capacity`

```rust
pub fn with_capacity(capacity: usize) -> Self;
```

Creates an empty set of columns sized for `capacity` component types.

<a id="rustdoc-item-490"></a>

### `get`

```rust
pub fn get(self: &Self, component_id: ComponentId) -> Option<&ComponentColumn>;
```

Returns the column for `component_id`, or `None` when the archetype
does not store that component.

<a id="rustdoc-item-492"></a>

### `get_mut`

```rust
pub fn get_mut(self: &mut Self, component_id: ComponentId) -> Option<&mut ComponentColumn>;
```

Returns the column for `component_id` mutably.

<a id="rustdoc-item-493"></a>

### `column_of`

```rust
pub fn column_of<T: Component>(self: &Self) -> &ComponentColumn;
```

Returns the column storing `T`.

#### Panics

Panics when the archetype does not store `T`, which means the caller
reached a column the archetype's mask says is not there.

<a id="rustdoc-item-495"></a>

### `column_of_mut`

```rust
pub fn column_of_mut<T: Component>(self: &mut Self) -> &mut ComponentColumn;
```

Returns the column storing `T`, mutably.

#### Panics

Panics under the same condition as [`Self::column_of`](#rustdoc-item-493).

<a id="rustdoc-item-496"></a>

### `insert`

```rust
pub fn insert(self: &mut Self, component_id: ComponentId, column: ComponentColumn);
```

Inserts a column for `component_id`.

#### Panics

Panics when a column for that component already exists; an archetype
builds each of its columns exactly once.

<a id="rustdoc-item-497"></a>

### `remove`

```rust
pub fn remove(self: &mut Self, component_id: ComponentId) -> Option<ComponentColumn>;
```

Removes and returns the column for `component_id`.

<a id="rustdoc-item-498"></a>

### `contains`

```rust
pub fn contains(self: &Self, component_id: ComponentId) -> bool;
```

Whether a column exists for `component_id`.

<a id="rustdoc-item-499"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

Number of columns stored.

<a id="rustdoc-item-500"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether no columns are stored.

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
- `Default`
