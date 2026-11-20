<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3553"></a>

# Enum `pill_editor_core::editor_state::ElementClickRefusal`

```rust
pub enum ElementClickRefusal { ... }
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:574`

Why an element click could not become a selection.

Both variants are refusals the editor logs by name: the click changes
nothing, and the person is told which kinds or entities it would have
mixed.

## Variants

<a id="rustdoc-item-3551"></a>

### `KindMismatch`

```rust
KindMismatch
```

An extend or range click named a kind the selection does not hold.

<a id="rustdoc-item-3552"></a>

### `OtherEntity`

```rust
OtherEntity
```

The click would have put two entities in one element selection.

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
- `ToString`
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
- `Display`
