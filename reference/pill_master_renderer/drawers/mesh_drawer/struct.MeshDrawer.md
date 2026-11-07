<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-127"></a>

# Struct `pill_master_renderer::drawers::mesh_drawer::MeshDrawer`

```rust
pub(crate) struct MeshDrawer;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\drawers\mesh_drawer.rs:262`

Owns the instance buffer and records a frame's mesh draws through it.

One drawer lives for the renderer's lifetime. The buffer is reused every
frame and grows only when a frame brings more instances than it holds.

## Fields

<a id="rustdoc-item-123"></a>

### `instance_capacity_step`

```rust
instance_capacity_step: usize
```

How many instances the buffer grows by at a time.

<a id="rustdoc-item-124"></a>

### `instance_buffer`

```rust
instance_buffer: wgpu::Buffer
```

_No documentation provided._

<a id="rustdoc-item-126"></a>

### `instance_capacity`

```rust
instance_capacity: usize
```

How many instances the buffer has room for.

## Associated functions and methods

<a id="rustdoc-item-128"></a>

### `new`

```rust
pub fn new(device: &wgpu::Device, instance_capacity_step: usize) -> Self;
```

Creates a drawer whose instance buffer has room for
`instance_capacity_step` instances, and grows in steps of that many.

<a id="rustdoc-item-130"></a>

### `instance_buffer`

```rust
pub fn instance_buffer(self: &Self) -> &wgpu::Buffer;
```

The buffer the frame's instances were uploaded into, in queue order.

<a id="rustdoc-item-131"></a>

### `allocate`

```rust
pub(in drawers::mesh_drawer) fn allocate(device: &wgpu::Device, instance_capacity: usize) -> wgpu::Buffer;
```

Creates the instance buffer with room for `instance_capacity` instances.

<a id="rustdoc-item-132"></a>

### `upload_instances`

```rust
pub fn upload_instances(self: &mut Self, device: &wgpu::Device, queue: &wgpu::Queue, instances: &[Instance]);
```

Uploads the frame's instances, in queue order, in one write.

Call this once per frame, before any pass records: every geometry pass
draws from this one upload, addressing instances by queue position. The
data is copied to the GPU before the command buffers that draw from it
are submitted, so one write here serves every pass. A buffer written
between passes would instead hold only the last write when the draws
run, and every pass would read that.

<a id="rustdoc-item-135"></a>

### `record_draw_commands`

```rust
pub fn record_draw_commands(self: &mut Self, encoder: &mut wgpu::CommandEncoder, renderer_resource_storage: &RendererResourceStorage, label: &str, pass_pipeline: Option<&wgpu::RenderPipeline>, color_attachments: &[Option<wgpu::RenderPassColorAttachment<'_>>], depth_stencil_attachment: wgpu::RenderPassDepthStencilAttachment<'_>, camera: &RendererCamera, render_queue: &[RenderQueueItem], ranges: &[crate::chain::DrawRange], viewport: RenderViewport, profiler: Option<&Profiler>);
```

Opens a render pass on `encoder`, records the draws for the queue
positions in `ranges`, and ends the pass before returning.

The instances were uploaded by [`MeshDrawer::upload_instances`](#rustdoc-item-132) in queue
order, so a queue position is also the instance's index in the bound
buffer and nothing is copied here. Consecutive items with equal keys
become one instanced draw.

`pass_pipeline` is the pass's own pipeline. A run the pass owns draws
through it; a run it does not own draws through the pipeline of the
shader its material names.

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
