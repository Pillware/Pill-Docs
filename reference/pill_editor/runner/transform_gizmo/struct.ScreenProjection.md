<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-867"></a>

# Struct `pill_editor::runner::transform_gizmo::ScreenProjection`

```rust
pub(in runner) struct ScreenProjection;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\transform_gizmo.rs:1200`

One scene view's camera basis and projection terms, in the surface's
physical pixels.

Built by [`EditorWindow::screen_projection`](../editor_window/struct.EditorWindow.md#rustdoc-item-866). Every point a frame projects
into the same view shares these terms, so they are captured once rather
than recomputed for each point.

## Fields

<a id="rustdoc-item-1519"></a>

### `eye`

```rust
eye: [f32; 3]
```

_No documentation provided._

<a id="rustdoc-item-1520"></a>

### `forward`

```rust
forward: [f32; 3]
```

_No documentation provided._

<a id="rustdoc-item-1521"></a>

### `right`

```rust
right: [f32; 3]
```

_No documentation provided._

<a id="rustdoc-item-1522"></a>

### `up`

```rust
up: [f32; 3]
```

_No documentation provided._

<a id="rustdoc-item-1523"></a>

### `tangent`

```rust
tangent: f32
```

_No documentation provided._

<a id="rustdoc-item-1524"></a>

### `aspect`

```rust
aspect: f32
```

_No documentation provided._

<a id="rustdoc-item-1525"></a>

### `width`

```rust
width: f32
```

_No documentation provided._

<a id="rustdoc-item-1526"></a>

### `height`

```rust
height: f32
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1527"></a>

### `project`

```rust
pub(in runner) fn project(self: &Self, point: [f32; 3]) -> Option<(f32, f32)>;
```

Where `point` appears on the view's surface, in physical pixels, or
`None` when it is at or behind the camera.

<a id="rustdoc-item-1528"></a>

### `size`

```rust
pub(in runner) fn size(self: &Self) -> (f32, f32);
```

The surface's size, in physical pixels.

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
- `SerializableAny`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
- `Copy`
- `Debug`
