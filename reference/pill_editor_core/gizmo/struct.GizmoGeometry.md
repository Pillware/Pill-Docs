<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4602"></a>

# Struct `pill_editor_core::gizmo::GizmoGeometry`

```rust
pub struct GizmoGeometry;
```

Source: `editor\pill_editor_core\src\gizmo.rs:719`

The handle geometry one gizmo draws.

The executable adds every line and triangle to the engine's `DebugDraw`,
and each one carries the id of the handle it belongs to.

## Fields

<a id="rustdoc-item-4600"></a>

### `lines`

```rust
lines: Vec<GizmoLine>
```

Handle lines.

<a id="rustdoc-item-4601"></a>

### `triangles`

```rust
triangles: Vec<GizmoTriangle>
```

Handle triangles (arrow and cube heads).

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
