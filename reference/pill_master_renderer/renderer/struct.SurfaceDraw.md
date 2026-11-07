<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1963"></a>

# Struct `pill_master_renderer::renderer::SurfaceDraw`

```rust
pub(in renderer) struct SurfaceDraw<'a>;
```

Visibility: `{'restricted': {'parent': 1847, 'path': '::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:241`

One surface's frame between the acquire and the present.

Everything the recording phases need that changes per frame: the acquired
image, the view the passes draw into, the camera, the viewport and the
frame itself. Holding it apart from [`SurfaceTarget`](struct.SurfaceTarget.md#rustdoc-item-1863) is what lets the
phases be recorded in named steps without threading a dozen arguments
through each.

## Fields

<a id="rustdoc-item-1954"></a>

### `surface_id`

```rust
surface_id: u32
```

Which surface this is, as the overlay and the UI name it.

<a id="rustdoc-item-1955"></a>

### `image`

```rust
image: wgpu::SurfaceTexture
```

The image acquired from the surface, presented at the end.

<a id="rustdoc-item-1957"></a>

### `view`

```rust
view: wgpu::TextureView
```

The view the passes draw into, through the surface's own format.

<a id="rustdoc-item-1958"></a>

### `size`

```rust
size: (u32, u32)
```

The size of the acquired image, in pixels.

<a id="rustdoc-item-1959"></a>

### `viewport`

```rust
viewport: crate::components::RenderViewport
```

The region of it this frame covers.

<a id="rustdoc-item-1960"></a>

### `camera`

```rust
camera: renderer_camera::RendererCameraHandle
```

The camera this surface is drawn through.

<a id="rustdoc-item-1961"></a>

### `frame`

```rust
frame: &'a crate::frame::RenderFrame
```

The frame being drawn.

<a id="rustdoc-item-1962"></a>

### `render_queue`

```rust
render_queue: &'a [crate::render_queue::RenderQueueItem]
```

The frame's queue: in it, a queue position is an instance index.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
