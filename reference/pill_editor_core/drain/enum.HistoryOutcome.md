<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2291"></a>

# Enum `pill_editor_core::drain::HistoryOutcome`

```rust
pub enum HistoryOutcome { ... }
```

Source: `editor\pill_editor_core\src\drain.rs:274`

What one history walk did.

## Variants

<a id="rustdoc-item-2288"></a>

### `Queued`

```rust
Queued
```

The step's batch is queued for the next drain.

<a id="rustdoc-item-2289"></a>

### `Empty`

```rust
Empty
```

Nothing was left in that direction.

<a id="rustdoc-item-2290"></a>

### `NoQueue`

```rust
NoQueue
```

The command queue or the history is absent, so nothing was popped.

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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
