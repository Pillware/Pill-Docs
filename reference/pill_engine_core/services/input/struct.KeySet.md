<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9736"></a>

# Struct `pill_engine_core::services::input::KeySet`

```rust
pub(in services::input) struct KeySet;
```

Visibility: `{'restricted': {'parent': 6020, 'path': '::services::input'}}` · Source: `engine\pill_engine_core\src\services\input.rs:521`

One bit per [`KeyCode`](enum.KeyCode.md#rustdoc-item-9069).

## Fields

<a id="rustdoc-item-9735"></a>

### `0`

```rust
0: [u64; 4]
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-9737"></a>

### `contains`

```rust
pub(in services::input) fn contains(self: &Self, key: KeyCode) -> bool;
```

Whether `key` is in the set.

<a id="rustdoc-item-9738"></a>

### `iter`

```rust
pub(in services::input) fn iter(self: &Self) -> impl Iterator<Item = _> + '_;
```

Every key in the set, in [`KeyCode`](enum.KeyCode.md#rustdoc-item-9069) order.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Copy`
- `Clone`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `EdgeBits`
