<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1487"></a>

# Struct `pill_core::slot_map::SlotMap`

```rust
pub struct SlotMap<K, V>;
```

Source: `engine\pill_core\src\slot_map.rs:144`

A vector of slots that hands out typed [`SlotKey`](trait.SlotKey.md#rustdoc-item-1488) handles.

Removing a value increases its slot's version, so an old handle can never
read whatever takes its place. Freed slots are reused, with the version the
removal left on them, before the vector of slots grows.

## Fields

<a id="rustdoc-item-1513"></a>

### `slots`

```rust
slots: Vec<Slot<V>>
```

_No documentation provided._

<a id="rustdoc-item-1514"></a>

### `free_slot_indices`

```rust
free_slot_indices: Vec<u32>
```

_No documentation provided._

<a id="rustdoc-item-1515"></a>

### `marker`

```rust
marker: std::marker::PhantomData<fn () -> K>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1517"></a>

### `with_capacity_and_key`

```rust
pub fn with_capacity_and_key(capacity: usize) -> Self;
```

Creates an empty map for key type `K` and value type `V`, with room for
`capacity` values before the slot vector has to grow.

The caller names both types, as in
`SlotMap::<K, V>::with_capacity_and_key(16)`, because the capacity
argument says nothing about either.

<a id="rustdoc-item-1518"></a>

### `insert`

```rust
pub fn insert(self: &mut Self, value: V) -> K;
```

Inserts a value and returns the handle that names it.

A freed slot is reused before the slot vector grows. It keeps the
version its removal gave it, so the new handle never equals the handle
that freed the slot.

<a id="rustdoc-item-1519"></a>

### `get`

```rust
pub fn get(self: &Self, key: K) -> Option<&V>;
```

Returns the value a handle names, or `None` if the handle is stale.

The slot's version must match the handle's, so a handle whose slot has
been emptied or reused reads as stale.

<a id="rustdoc-item-1520"></a>

### `get_mut`

```rust
pub fn get_mut(self: &mut Self, key: K) -> Option<&mut V>;
```

Returns a mutable reference to the value a handle names.

The check is the same as in [`get`](#rustdoc-item-1519): a stale handle yields
`None` instead of a reference to whatever value took over its slot.

<a id="rustdoc-item-1521"></a>

### `remove`

```rust
pub fn remove(self: &mut Self, key: K) -> Option<V>;
```

Removes the value from its slot and invalidates every handle to it.

The slot is freed for reuse with a higher version, so a handle kept from
before the removal can never name whatever value refills the slot. When
the next version would reach its maximum, the slot is never reused
instead of wrapping around to a low number, because a wrapped version
would make handles from before the last few removals valid again.

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
