<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10965"></a>

# Struct `pill_editor_core::tools::CoordinateFrame`

```rust
pub struct CoordinateFrame;
```

Source: `editor\pill_editor_core\src\tools.rs:343`

One space the active tool offers the gizmo's space toggle, named after
what it aligns with.

A tool returns these for the current selection, so a frame may differ per
point: a spline's frame is the curve's tangent and normal at the selected
point, not a property of the entity.

## Fields

<a id="rustdoc-item-10963"></a>

### `name`

```rust
name: String
```

The name the space row, the menus and the log show.

<a id="rustdoc-item-10964"></a>

### `rotation`

```rust
rotation: [f32; 4]
```

The rotation its axes are turned by, a unit quaternion in `x y z w`
order, about the selection's pivot.

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
