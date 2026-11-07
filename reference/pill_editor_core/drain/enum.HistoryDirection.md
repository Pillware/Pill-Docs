<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1878"></a>

# Enum `pill_editor_core::drain::HistoryDirection`

```rust
pub enum HistoryDirection { ... }
```

Source: `editor\pill_editor_core\src\drain.rs:255`

Which way a history walk goes.

## Variants

<a id="rustdoc-item-2244"></a>

### `Undo`

```rust
Undo
```

Applies the newest step's inverse.

<a id="rustdoc-item-2245"></a>

### `Redo`

```rust
Redo
```

Reapplies the next step's forward batch.

## Associated functions and methods

<a id="rustdoc-item-2246"></a>

### `name`

```rust
pub(in drain) fn name(self: Self) -> &'static str;
```

The word this direction is logged with.

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
- `SerializableAny`
- `Equivalent<K>`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
