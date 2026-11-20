<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1412"></a>

# Struct `pill_master_renderer::overlay::Overlay`

```rust
pub(crate) struct Overlay;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:243`

The overlay's pipelines and the buffers they read.

One overlay serves every surface; what it draws into is made per surface
([`OverlayTargets`](struct.OverlayTargets.md#rustdoc-item-1327)), because the mask and the pick buffer are sized to the
surface they belong to.

## Fields

<a id="rustdoc-item-1390"></a>

### `depth_tested_lines_pipeline`

```rust
depth_tested_lines_pipeline: wgpu::RenderPipeline
```

_No documentation provided._

<a id="rustdoc-item-1391"></a>

### `on_top_lines_pipeline`

```rust
on_top_lines_pipeline: wgpu::RenderPipeline
```

_No documentation provided._

<a id="rustdoc-item-1392"></a>

### `on_top_triangles_pipeline`

```rust
on_top_triangles_pipeline: wgpu::RenderPipeline
```

_No documentation provided._

<a id="rustdoc-item-1393"></a>

### `on_top_points_pipeline`

```rust
on_top_points_pipeline: wgpu::RenderPipeline
```

_No documentation provided._

<a id="rustdoc-item-1394"></a>

### `outline_edge_pipeline`

```rust
outline_edge_pipeline: wgpu::RenderPipeline
```

_No documentation provided._

<a id="rustdoc-item-1395"></a>

### `outline_mask_pipeline`

```rust
outline_mask_pipeline: wgpu::RenderPipeline
```

_No documentation provided._

<a id="rustdoc-item-1396"></a>

### `mesh_pick_pipeline`

```rust
mesh_pick_pipeline: wgpu::RenderPipeline
```

_No documentation provided._

<a id="rustdoc-item-1397"></a>

### `handle_lines_pick_pipeline`

```rust
handle_lines_pick_pipeline: wgpu::RenderPipeline
```

_No documentation provided._

<a id="rustdoc-item-1398"></a>

### `handle_triangles_pick_pipeline`

```rust
handle_triangles_pick_pipeline: wgpu::RenderPipeline
```

_No documentation provided._

<a id="rustdoc-item-1399"></a>

### `grid_pipeline`

```rust
grid_pipeline: wgpu::RenderPipeline
```

_No documentation provided._

<a id="rustdoc-item-1400"></a>

### `grid_parameters_buffer`

```rust
grid_parameters_buffer: wgpu::Buffer
```

_No documentation provided._

<a id="rustdoc-item-1401"></a>

### `grid_bind_group`

```rust
grid_bind_group: wgpu::BindGroup
```

_No documentation provided._

<a id="rustdoc-item-1402"></a>

### `outline_bind_group_layout`

```rust
outline_bind_group_layout: wgpu::BindGroupLayout
```

_No documentation provided._

<a id="rustdoc-item-1403"></a>

### `outline_parameters_buffer`

```rust
outline_parameters_buffer: wgpu::Buffer
```

_No documentation provided._

<a id="rustdoc-item-1404"></a>

### `tested_lines_buffer`

```rust
tested_lines_buffer: crate::stream_buffer::StreamBuffer
```

_No documentation provided._

<a id="rustdoc-item-1406"></a>

### `on_top_lines_buffer`

```rust
on_top_lines_buffer: crate::stream_buffer::StreamBuffer
```

_No documentation provided._

<a id="rustdoc-item-1407"></a>

### `triangles_buffer`

```rust
triangles_buffer: crate::stream_buffer::StreamBuffer
```

_No documentation provided._

<a id="rustdoc-item-1408"></a>

### `points_buffer`

```rust
points_buffer: crate::stream_buffer::StreamBuffer
```

_No documentation provided._

<a id="rustdoc-item-1409"></a>

### `handle_lines_buffer`

```rust
handle_lines_buffer: crate::stream_buffer::StreamBuffer
```

_No documentation provided._

<a id="rustdoc-item-1410"></a>

### `handle_triangles_buffer`

```rust
handle_triangles_buffer: crate::stream_buffer::StreamBuffer
```

_No documentation provided._

<a id="rustdoc-item-1411"></a>

### `readback`

```rust
readback: picking::PickReadback
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1414"></a>

### `new`

```rust
pub fn new(device: &wgpu::Device, color_format: wgpu::TextureFormat, depth_format: wgpu::TextureFormat, camera_bind_group_layout: &wgpu::BindGroupLayout) -> Result<Self>;
```

Creates every overlay pipeline, for a surface drawn in `color_format`
whose geometry writes `depth_format`. Every pipeline that reads the
camera binds `camera_bind_group_layout` at group 0.

#### Errors

Returns [`RendererError::Other`] when wgpu refuses a shader or pipeline.

<a id="rustdoc-item-1415"></a>

### `create`

```rust
pub(in overlay) fn create(device: &wgpu::Device, color_format: wgpu::TextureFormat, depth_format: wgpu::TextureFormat, camera_bind_group_layout: &wgpu::BindGroupLayout) -> Self;
```

_No documentation provided._

<a id="rustdoc-item-1416"></a>

### `new_targets`

```rust
pub(crate) fn new_targets(self: &Self, device: &wgpu::Device, (width, height): (u32, u32)) -> OverlayTargets;
```

Creates the targets a surface of `width` by `height` draws its overlay
into.

They are made when the surface is attached or resized, so the overlay's
targets follow the surface they are sized to rather than a cache keyed
by size.

<a id="rustdoc-item-1417"></a>

### `record`

```rust
pub fn record(self: &mut Self, device: &wgpu::Device, queue: &wgpu::Queue, encoder: &mut wgpu::CommandEncoder, targets: &mut OverlayTargets, overlay_frame: OverlayFrame<'_>);
```

Records one surface's overlay after its chain: the outlines, the scene
grid, the debug lines and the gizmos into the surface, and the pick
buffer when this surface has picks waiting.

<a id="rustdoc-item-1418"></a>

### `after_submit`

```rust
pub fn after_submit(self: &mut Self);
```

Starts reading back the picks recorded by the frame that was just
submitted.

<a id="rustdoc-item-1419"></a>

### `answer_undrawn`

```rust
pub fn answer_undrawn(self: &mut Self, requests: &[PickRequest], drawn_surfaces: &[u32]);
```

Answers with nothing every request whose surface was not drawn this
frame. Its pixel was never drawn, so the caller must not keep waiting
for it.

<a id="rustdoc-item-1420"></a>

### `take_results`

```rust
pub fn take_results(self: &mut Self, device: &wgpu::Device) -> Vec<PickResult>;
```

Returns every pick answer that has arrived since the last call.

<a id="rustdoc-item-1421"></a>

### `record_outline_mask`

```rust
pub(in overlay) fn record_outline_mask(self: &Self, encoder: &mut wgpu::CommandEncoder, targets: &OverlayTargets, overlay_frame: &OverlayFrame<'_>, outlined_queue_positions: &[u32]);
```

Draw the outlined instances' silhouettes into the mask.

<a id="rustdoc-item-1422"></a>

### `record_picks`

```rust
pub(in overlay) fn record_picks(self: &mut Self, device: &wgpu::Device, queue: &wgpu::Queue, encoder: &mut wgpu::CommandEncoder, targets: &mut OverlayTargets, overlay_frame: &OverlayFrame<'_>, picks: Vec<PickRequest>, editor_view: bool);
```

Draws the pick buffer and records the copies of the requested pixels.

A surface that is not an editor view draws no handles into its pick
buffer, because the gizmo is not there and nothing can pick a handle on
it.

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
