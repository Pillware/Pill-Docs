<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-821"></a>

# Struct `pill_editor_core::camera::Modifiers`

```rust
pub struct Modifiers;
```

Source: `editor\pill_editor_core\src\camera.rs:195`

The keyboard modifiers held during a press, as plain booleans. The event
handler converts winit's modifier state into this, because the navigation
rules compare booleans.

## Fields

<a id="rustdoc-item-818"></a>

### `shift`

```rust
shift: bool
```

Shift held.

<a id="rustdoc-item-819"></a>

### `control`

```rust
control: bool
```

Control held.

<a id="rustdoc-item-820"></a>

### `alt`

```rust
alt: bool
```

Alt held.

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
