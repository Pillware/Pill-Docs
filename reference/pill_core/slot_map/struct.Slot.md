<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1492"></a>

# Struct `pill_core::slot_map::Slot`

```rust
pub(in slot_map) struct Slot<V>;
```

Visibility: `{'restricted': {'parent': 1490, 'path': '::slot_map'}}` · Source: `engine\pill_core\src\slot_map.rs:130`

One entry of a [`SlotMap`](struct.SlotMap.md#rustdoc-item-1487). It holds the slot's current version and the
value in it, if any.

## Fields

<a id="rustdoc-item-1489"></a>

### `version`

```rust
version: std::num::NonZeroU32
```

_No documentation provided._

<a id="rustdoc-item-1491"></a>

### `value`

```rust
value: Option<V>
```

_No documentation provided._

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
