<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2830"></a>

# Struct `pill_editor_core::editor_state::RegisteredComponent`

```rust
pub struct RegisteredComponent;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:157`

One entry of the Inspector's "add component" picker.

## Fields

<a id="rustdoc-item-2828"></a>

### `type_name`

```rust
type_name: String
```

Registered type name (the stable cross-reload key).

<a id="rustdoc-item-2829"></a>

### `addable`

```rust
addable: bool
```

True when some generation of this type has a non-empty field layout,
so the editor can zero-initialise an image of it.

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
