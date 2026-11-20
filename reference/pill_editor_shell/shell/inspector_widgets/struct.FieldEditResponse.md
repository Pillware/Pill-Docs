<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-710"></a>

# Struct `pill_editor_shell::shell::inspector_widgets::FieldEditResponse`

```rust
pub struct FieldEditResponse;
```

Source: `editor\pill_editor_shell\src\shell\inspector_widgets.rs:43`

What one field control reports for a frame.

A continuous control reports [`FieldEditPhase::Interactive`] while it is
dragged and one [`FieldEditPhase::Committed`] on release; a one-shot control
reports one committed edit. The editor API's callbacks see the phase, so a
hook can react once when a drag ends rather than on every frame.

## Fields

<a id="rustdoc-item-706"></a>

### `value`

```rust
value: FieldValue
```

The value to write.

<a id="rustdoc-item-707"></a>

### `phase`

```rust
phase: pill_editor_core::hooks::FieldEditPhase
```

The interaction phase the write belongs to.

## Associated functions and methods

<a id="rustdoc-item-711"></a>

### `committed`

```rust
pub fn committed(value: FieldValue) -> Self;
```

One committed edit of `value`.

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
- `SerializableAny`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
