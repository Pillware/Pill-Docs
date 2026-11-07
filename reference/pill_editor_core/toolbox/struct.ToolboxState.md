<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5567"></a>

# Struct `pill_editor_core::toolbox::ToolboxState`

```rust
pub struct ToolboxState;
```

Source: `editor\pill_editor_core\src\toolbox.rs:152`

What the toolbox's rows show: the gizmo's settings and the scene grid's
switch. A row reads this, and the command a click queues changes it for the
next frame.

## Fields

<a id="rustdoc-item-8482"></a>

### `gizmo`

```rust
gizmo: crate::gizmo::GizmoSettings
```

The gizmo's mode, space and snapping.

<a id="rustdoc-item-8483"></a>

### `grid`

```rust
grid: bool
```

Whether the scene grid is on.

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
- `Copy`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
