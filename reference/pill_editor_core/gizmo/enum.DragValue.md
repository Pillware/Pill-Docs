<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4662"></a>

# Enum `pill_editor_core::gizmo::DragValue`

```rust
pub enum DragValue { ... }
```

Source: `editor\pill_editor_core\src\gizmo.rs:1135`

The value one drag move produced, before it becomes transforms.

A translate or scale drag measures a distance along its axis, a rotate drag
an angle around it, and a plane drag two distances inside its plane. The
caller takes the measurement; turning it into transforms is this module's
job.

## Variants

<a id="rustdoc-item-4656"></a>

### `Distance`

```rust
Distance
```

A distance along the dragged axis, in world units.

<a id="rustdoc-item-4658"></a>

### `Angle`

```rust
Angle
```

A turn around the dragged axis, in radians.

<a id="rustdoc-item-4661"></a>

### `Plane`

```rust
Plane
```

Two distances inside the dragged plane, along its first and second
axes.

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
- `StructuralPartialEq`
- `PartialEq`
