<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3803"></a>

# Struct `pill_editor_core::editor_state::GizmoTypeView`

```rust
pub struct GizmoTypeView;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:1082`

One registered component gizmo, as the Preferences tab lists it.

## Fields

<a id="rustdoc-item-3958"></a>

### `type_name`

```rust
type_name: String
```

The component's registered type name, the key a visibility write
addresses.

<a id="rustdoc-item-3959"></a>

### `owner`

```rust
owner: String
```

The package that declared the component, which the row groups by.

<a id="rustdoc-item-3960"></a>

### `visible`

```rust
visible: bool
```

Whether the type's gizmo draws.

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
