<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3868"></a>

# Struct `pill_engine_core::debug_draw::DebugFrame`

```rust
pub struct DebugFrame;
```

Source: `engine\pill_engine_core\src\debug_draw.rs:191`

Everything debug-drawn for one frame, in the form the renderer receives it.

## Fields

<a id="rustdoc-item-3864"></a>

### `lines`

```rust
lines: Vec<DebugLine>
```

Line segments, including the ones shapes were turned into.

<a id="rustdoc-item-3865"></a>

### `labels`

```rust
labels: Vec<DebugLabel>
```

Text labels.

<a id="rustdoc-item-3866"></a>

### `gizmo_lines`

```rust
gizmo_lines: Vec<GizmoLine>
```

Gizmo handle lines.

<a id="rustdoc-item-3867"></a>

### `gizmo_triangles`

```rust
gizmo_triangles: Vec<GizmoTriangle>
```

Gizmo handle triangles.

## Associated functions and methods

<a id="rustdoc-item-3869"></a>

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Clone`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
