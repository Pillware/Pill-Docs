<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1863"></a>

# Struct `pill_master_renderer::renderer::SurfaceTarget`

```rust
pub(crate) struct SurfaceTarget;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:156`

One surface the renderer draws into, and everything sized to it.

The primary surface the renderer was built on and every surface attached
since are the same type in one map: a swapchain, the depth buffer sized to
it, the offscreen targets its chain declares, the chain's own pass objects,
the camera it is drawn through, and the overlay's targets.

## Fields

<a id="rustdoc-item-1913"></a>

### `id`

```rust
id: pill_renderer_api::SurfaceId
```

Which surface this is, as the frame's views, picks and UI name it.

<a id="rustdoc-item-1914"></a>

### `surface`

```rust
surface: crate::surface::Surface
```

The surface's swapchain.

<a id="rustdoc-item-1916"></a>

### `depth_texture`

```rust
depth_texture: crate::resources::RendererTexture
```

Its depth buffer, sized to it.

<a id="rustdoc-item-1917"></a>

### `offscreen`

```rust
offscreen: std::collections::HashMap<String, crate::resources::RendererTexture>
```

Its offscreen targets, sized to it.

<a id="rustdoc-item-1918"></a>

### `chain`

```rust
chain: crate::chain::GpuChain
```

The chain's pass objects bound to this surface's targets.

<a id="rustdoc-item-1919"></a>

### `camera`

```rust
camera: renderer_camera::RendererCameraHandle
```

The camera this surface is drawn through, as a handle into the shared
camera storage.

<a id="rustdoc-item-1921"></a>

### `overlay_targets`

```rust
overlay_targets: crate::overlay::OverlayTargets
```

The overlay's targets, sized to it.

<a id="rustdoc-item-1922"></a>

### `viewport`

```rust
viewport: Option<crate::components::RenderViewport>
```

The region drawn to, or `None` for the whole surface.

<a id="rustdoc-item-1923"></a>

### `minimized`

```rust
minimized: bool
```

Whether the surface is zero-sized.

<a id="rustdoc-item-1924"></a>

### `ready`

```rust
ready: bool
```

Whether the surface may present this frame.

<a id="rustdoc-item-1925"></a>

### `presented`

```rust
presented: bool
```

Whether a frame has been presented to it, for the one-time line.

The primary surface's first frame is not announced - it is the window
the renderer was built on - so it starts out presented.

## Associated functions and methods

<a id="rustdoc-item-1926"></a>

### `resize`

```rust
pub(in renderer) fn resize(self: &mut Self, device: &wgpu::Device, overlay: &Overlay, width: u32, height: u32) -> Result<()>;
```

Rebuild what is sized to the surface for `width` by `height`.

The swapchain, the depth buffer and the overlay's targets are rebuilt
here. The offscreen targets are dropped and the chain is told to rebuild
the passes bound to them on the next frame, because those are sized to
the surface too.

#### Errors

Returns the error when the surface refuses the new configuration, or
when the new depth buffer cannot be created.

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
