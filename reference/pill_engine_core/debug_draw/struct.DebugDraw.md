<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3943"></a>

# Struct `pill_engine_core::debug_draw::DebugDraw`

```rust
pub struct DebugDraw;
```

Source: `engine\pill_engine_core\src\debug_draw.rs:235`

The debug drawing of a world.

It is a world resource that systems draw into, and the renderer collects it
once a frame. A development host and an editor create it enabled. A
shipping or web build creates it disabled, unless the project's settings
turn it on (`debug_draw: true`). [`Self::set_enabled`](#rustdoc-item-3942) switches it at any
time.

## Fields

<a id="rustdoc-item-3937"></a>

### `enabled`

```rust
enabled: bool
```

_No documentation provided._

<a id="rustdoc-item-3938"></a>

### `lines`

```rust
lines: Vec<Timed<DebugLine>>
```

_No documentation provided._

<a id="rustdoc-item-3939"></a>

### `labels`

```rust
labels: Vec<Timed<DebugLabel>>
```

_No documentation provided._

<a id="rustdoc-item-3940"></a>

### `gizmo_lines`

```rust
gizmo_lines: Vec<GizmoLine>
```

_No documentation provided._

<a id="rustdoc-item-3941"></a>

### `gizmo_triangles`

```rust
gizmo_triangles: Vec<GizmoTriangle>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-3944"></a>

### `new`

```rust
pub fn new(enabled: bool) -> Self;
```

Creates an empty debug drawing in the requested state.

<a id="rustdoc-item-3945"></a>

### `is_enabled`

```rust
pub fn is_enabled(self: &Self) -> bool;
```

Whether drawing calls record anything.

<a id="rustdoc-item-3942"></a>

### `set_enabled`

```rust
pub fn set_enabled(self: &mut Self, enabled: bool);
```

Turns debug drawing on or off.

Turning it off also forgets every item still waiting to be drawn.

<a id="rustdoc-item-3946"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Forgets every item still waiting to be drawn.

<a id="rustdoc-item-3947"></a>

### `line`

```rust
pub fn line(self: &mut Self, start: [f32; 3], end: [f32; 3], style: DebugStyle) -> &mut Self;
```

Draws a line segment from `start` to `end`.

<a id="rustdoc-item-3948"></a>

### `aabb`

```rust
pub fn aabb(self: &mut Self, center: [f32; 3], half_extents: [f32; 3], style: DebugStyle) -> &mut Self;
```

Draws an axis-aligned box around `center`, `half_extents` from it on
each axis.

<a id="rustdoc-item-3949"></a>

### `circle`

```rust
pub fn circle(self: &mut Self, center: [f32; 3], normal: [f32; 3], radius: f32, style: DebugStyle) -> &mut Self;
```

Draws a circle around `center` in the plane whose normal is `normal`.

<a id="rustdoc-item-3950"></a>

### `sphere`

```rust
pub fn sphere(self: &mut Self, center: [f32; 3], radius: f32, style: DebugStyle) -> &mut Self;
```

Draws a sphere around `center` as its three great circles.

<a id="rustdoc-item-3951"></a>

### `arrow`

```rust
pub fn arrow(self: &mut Self, start: [f32; 3], end: [f32; 3], style: DebugStyle) -> &mut Self;
```

Draws an arrow from `start` to `end`, with a head a fifth of its
length.

<a id="rustdoc-item-3952"></a>

### `label_world`

```rust
pub fn label_world(self: &mut Self, position: [f32; 3], text: &str, style: DebugStyle) -> &mut Self;
```

Draws a text label at a world position.

<a id="rustdoc-item-3953"></a>

### `label_screen`

```rust
pub fn label_screen(self: &mut Self, x: f32, y: f32, text: &str, style: DebugStyle) -> &mut Self;
```

Draws a text label at physical pixels from a surface's top-left corner.

<a id="rustdoc-item-3954"></a>

### `label`

```rust
pub fn label(self: &mut Self, anchor: LabelAnchor, text: &str, style: DebugStyle) -> &mut Self;
```

Draws a text label at `anchor`.

<a id="rustdoc-item-3955"></a>

### `gizmo_line`

```rust
pub fn gizmo_line(self: &mut Self, start: [f32; 3], end: [f32; 3], color: DebugColor, handle: u32) -> &mut Self;
```

Draws a gizmo line on top for the next frame, pickable by `handle`.

<a id="rustdoc-item-3956"></a>

### `gizmo_triangle`

```rust
pub fn gizmo_triangle(self: &mut Self, corners: [[f32; 3]; 3], color: DebugColor, handle: u32) -> &mut Self;
```

Draws a gizmo triangle on top for the next frame, pickable by `handle`.

<a id="rustdoc-item-3957"></a>

### `collect_frame`

```rust
pub fn collect_frame(self: &mut Self, delta_seconds: f32) -> DebugFrame;
```

Returns the items to draw this frame and counts the lifetime of the
others down by `delta_seconds`.

Items that last one frame, and all gizmo geometry, are returned once
and then dropped. Items with a timed lifetime are copied out and kept
until their time runs out. A disabled drawing returns an empty frame.

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
- `Resource`
