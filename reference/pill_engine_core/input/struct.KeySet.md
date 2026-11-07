<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5906"></a>

# Struct `pill_engine_core::input::KeySet`

```rust
pub(in input) struct KeySet;
```

Visibility: `{'restricted': {'parent': 4306, 'path': '::input'}}` · Source: `engine\pill_engine_core\src\input.rs:521`

One bit per [`KeyCode`](enum.KeyCode.md#rustdoc-item-5246).

## Fields

<a id="rustdoc-item-5905"></a>

### `0`

```rust
0: [u64; 4]
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-5907"></a>

### `contains`

```rust
pub(in input) fn contains(self: &Self, key: KeyCode) -> bool;
```

Whether `key` is in the set.

<a id="rustdoc-item-5908"></a>

### `iter`

```rust
pub(in input) fn iter(self: &Self) -> impl Iterator<Item = _> + '_;
```

Every key in the set, in [`KeyCode`](enum.KeyCode.md#rustdoc-item-5246) order.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Copy`
- `Clone`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `EdgeBits`
