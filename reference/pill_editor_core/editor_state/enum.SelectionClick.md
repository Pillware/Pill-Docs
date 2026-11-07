<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3417"></a>

# Enum `pill_editor_core::editor_state::SelectionClick`

```rust
pub enum SelectionClick { ... }
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:522`

What a click on an entity row means.

## Variants

<a id="rustdoc-item-3414"></a>

### `Reset`

```rust
Reset
```

Replace the selection with the clicked entity.

<a id="rustdoc-item-3415"></a>

### `Add`

```rust
Add
```

Add the clicked entity to the selection (Ctrl).

<a id="rustdoc-item-3416"></a>

### `Range`

```rust
Range
```

Select every row between the primary and the clicked one (Shift).

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
