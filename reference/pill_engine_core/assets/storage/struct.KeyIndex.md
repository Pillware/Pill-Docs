<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1558"></a>

# Struct `pill_engine_core::assets::storage::KeyIndex`

```rust
pub(in assets::storage) struct KeyIndex<K>;
```

Visibility: `{'restricted': {'parent': 1503, 'path': '::assets::storage'}}` · Source: `engine\pill_engine_core\src\assets\storage.rs:395`

One kind of key - names or guids - in an asset column, mapped both ways.

It maps each key to its slot and each slot back to its key. Freeing a slot
has to remove that slot's key without searching the whole map, so both
directions are kept. Keeping them in one type stops a caller from updating
one direction and forgetting the other; if that happened, a freed name could
still point at whatever asset took the slot.

## Fields

<a id="rustdoc-item-1556"></a>

### `slots_by_key`

```rust
slots_by_key: std::collections::HashMap<K, u32>
```

_No documentation provided._

<a id="rustdoc-item-1557"></a>

### `keys_by_slot`

```rust
keys_by_slot: std::collections::HashMap<u32, K>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1559"></a>

### `bind`

```rust
pub(in assets::storage) fn bind(self: &mut Self, key: K, slot: u32);
```

Points `key` at `slot`, removing whatever the two held before: the key's
old slot and the slot's old key.

Every binding site calls this, so neither direction can keep a stale
entry. Callers still refuse a key that another live asset holds where
that is an error rather than a move.

<a id="rustdoc-item-1560"></a>

### `release`

```rust
pub(in assets::storage) fn release(self: &mut Self, slot: u32) -> Option<K>;
```

Removes and returns the key that `slot` holds, if any.

<a id="rustdoc-item-1561"></a>

### `slot_of`

```rust
pub(in assets::storage) fn slot_of<Q>(self: &Self, key: &Q) -> Option<u32> where K: std::borrow::Borrow<Q>, Q: std::hash::Hash + Eq + ?Sized;
```

Returns the slot that `key` is bound to, if any.

<a id="rustdoc-item-1562"></a>

### `key_of`

```rust
pub(in assets::storage) fn key_of(self: &Self, slot: u32) -> Option<&K>;
```

Returns the key that `slot` holds, if any.

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
- `Debug`
- `Default`
