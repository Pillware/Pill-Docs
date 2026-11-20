<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8461"></a>

# Struct `pill_engine_core::services::debug_draw::DebugFrame`

```rust
pub struct DebugFrame;
```

Source: `engine\pill_engine_core\src\services\debug_draw.rs:231`

Everything debug-drawn for one frame, in the form the renderer receives it.

## Fields

<a id="rustdoc-item-8456"></a>

### `lines`

```rust
lines: Vec<DebugLine>
```

Line segments, including the ones shapes were turned into.

<a id="rustdoc-item-8457"></a>

### `labels`

```rust
labels: Vec<DebugLabel>
```

Text labels.

<a id="rustdoc-item-8458"></a>

### `gizmo_lines`

```rust
gizmo_lines: Vec<GizmoLine>
```

Gizmo handle lines.

<a id="rustdoc-item-8459"></a>

### `gizmo_triangles`

```rust
gizmo_triangles: Vec<GizmoTriangle>
```

Gizmo handle triangles.

<a id="rustdoc-item-8460"></a>

### `gizmo_points`

```rust
gizmo_points: Vec<GizmoPoint>
```

Gizmo handle points.

## Associated functions and methods

<a id="rustdoc-item-8462"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether there is nothing to draw.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Clone`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
