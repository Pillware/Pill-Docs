<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-626"></a>

# Enum `pill_editor_core::cadence::FrameWake`

```rust
pub enum FrameWake { ... }
```

Source: `editor\pill_editor_core\src\cadence.rs:98`

When the loop draws next.

## Variants

<a id="rustdoc-item-623"></a>

### `Immediate`

```rust
Immediate
```

Draw as soon as the loop gets the turn.

<a id="rustdoc-item-625"></a>

### `After`

```rust
After
```

Sleep this long first; input still wakes the loop sooner.

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
