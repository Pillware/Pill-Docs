<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8821"></a>

# Struct `pill_engine_core::services::gizmos::GizmoDraw`

```rust
pub struct GizmoDraw;
```

Source: `engine\pill_engine_core\src\services\gizmos.rs:285`

The shapes one gizmo draws for one frame: lines, circles, boxes, points and
labels, all in world space.

The pass hands the buffer to [`DebugDraw`](../debug_draw/struct.DebugDraw.md#rustdoc-item-4313) once every gizmo ran, so a draw
call never needs the world's resource and a gizmo cannot interleave with
another one's drawing.

## Fields

<a id="rustdoc-item-8819"></a>

### `segments`

```rust
segments: Vec<([[f32; 3]; 2], crate::services::debug_draw::DebugColor)>
```

The segments, in the order they were drawn.

<a id="rustdoc-item-8820"></a>

### `labels`

```rust
labels: Vec<([f32; 3], String, crate::services::debug_draw::DebugColor)>
```

The labels, in the order they were drawn.

## Associated functions and methods

<a id="rustdoc-item-8822"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates an empty buffer.

<a id="rustdoc-item-8823"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether nothing was drawn yet.

<a id="rustdoc-item-8824"></a>

### `segment_count`

```rust
pub fn segment_count(self: &Self) -> usize;
```

How many segments the buffer holds.

<a id="rustdoc-item-8825"></a>

### `line`

```rust
pub fn line(self: &mut Self, start: [f32; 3], end: [f32; 3], color: DebugColor);
```

Draws a line segment in `color`.

<a id="rustdoc-item-8826"></a>

### `polyline`

```rust
pub fn polyline(self: &mut Self, points: &[[f32; 3]], color: DebugColor);
```

Draws a sequence of segments, one between each neighbouring pair.

<a id="rustdoc-item-8827"></a>

### `line_loop`

```rust
pub fn line_loop(self: &mut Self, points: &[[f32; 3]], color: DebugColor);
```

Draws a closed loop through `points`, joining the last one back to the
first.

<a id="rustdoc-item-8828"></a>

### `circle`

```rust
pub fn circle(self: &mut Self, center: [f32; 3], normal: [f32; 3], radius: f32, color: DebugColor);
```

Draws a circle around `center` in the plane whose normal is `normal`.

<a id="rustdoc-item-8829"></a>

### `sphere`

```rust
pub fn sphere(self: &mut Self, center: [f32; 3], radius: f32, color: DebugColor);
```

Draws a sphere around `center` as its three great circles.

<a id="rustdoc-item-8830"></a>

### `box_outline`

```rust
pub fn box_outline(self: &mut Self, center: [f32; 3], rotation: [f32; 4], half_extents: [f32; 3], color: DebugColor);
```

Draws the twelve edges of a box centred on `center`, turned by
`rotation` and `half_extents` from it on each of its own axes.

<a id="rustdoc-item-8831"></a>

### `point`

```rust
pub fn point(self: &mut Self, position: [f32; 3], size: f32, color: DebugColor);
```

Draws a small cross at `position` - the mark a gizmo uses where it has
no shape to outline.

<a id="rustdoc-item-8832"></a>

### `label`

```rust
pub fn label<impl Into<String>: Into<String>>(self: &mut Self, position: [f32; 3], text: impl Into<String>, color: DebugColor);
```

Draws a text label at a world position.

<a id="rustdoc-item-8833"></a>

### `flush_into`

```rust
pub(in services::gizmos) fn flush_into(self: &Self, debug_draw: &mut DebugDraw, chrome: bool);
```

Hands everything drawn into `debug_draw`, as chrome (`true`) or as plain
debug drawing (`false`).

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
