<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1322"></a>

# Struct `pill_master_renderer::overlay::OverlayFrame`

```rust
pub(crate) struct OverlayFrame<'a>;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:197`

One surface's frame, as the overlay needs it.

## Fields

<a id="rustdoc-item-1313"></a>

### `surface`

```rust
surface: u32
```

The surface being drawn.

<a id="rustdoc-item-1314"></a>

### `color_view`

```rust
color_view: &'a wgpu::TextureView
```

The view the chain drew into.

<a id="rustdoc-item-1315"></a>

### `depth_view`

```rust
depth_view: &'a wgpu::TextureView
```

The depth the chain's geometry left.

<a id="rustdoc-item-1316"></a>

### `viewport`

```rust
viewport: crate::components::RenderViewport
```

The region the scene was drawn into.

<a id="rustdoc-item-1317"></a>

### `camera`

```rust
camera: &'a crate::resources::RendererCamera
```

The camera the surface was drawn through.

<a id="rustdoc-item-1318"></a>

### `frame`

```rust
frame: &'a crate::frame::RenderFrame
```

The frame.

<a id="rustdoc-item-1319"></a>

### `render_queue`

```rust
render_queue: &'a [crate::render_queue::RenderQueueItem]
```

The frame's queue: queue position is instance index.

<a id="rustdoc-item-1320"></a>

### `instance_buffer`

```rust
instance_buffer: &'a wgpu::Buffer
```

The instance buffer the chain drew from.

<a id="rustdoc-item-1321"></a>

### `storage`

```rust
storage: &'a crate::resources::RendererResourceStorage
```

The meshes the queue names.

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
