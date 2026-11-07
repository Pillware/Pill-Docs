<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-495"></a>

# Struct `pill_master_renderer::renderer::State`

```rust
pub struct State;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:708`

The wgpu state every surface shares: the device, the queue, the caches and
the painters.

It lives in a field of [`Renderer`](struct.Renderer.md#rustdoc-item-1865) rather than as loose fields, so the
shared GPU objects have one home and the asset caches stay separate.
Nothing sized to a single surface lives here; that belongs to
[`SurfaceTarget`](struct.SurfaceTarget.md#rustdoc-item-1863), one per surface.

## Fields

<a id="rustdoc-item-1990"></a>

### `renderer_resource_storage`

```rust
renderer_resource_storage: crate::resources::RendererResourceStorage
```

The per-type cache of every GPU resource - shaders, textures, meshes,
materials and cameras - and the engine parameters table.

<a id="rustdoc-item-1991"></a>

### `surface_format`

```rust
surface_format: wgpu::TextureFormat
```

The colour format every pipeline that renders to a surface declares.

All surfaces use one format. A surface attached later is refused if it
cannot be drawn in this format, so each asset's GPU object can be built
once, whatever surfaces exist.

<a id="rustdoc-item-1992"></a>

### `device`

```rust
device: wgpu::Device
```

The device every GPU object in this module is created from.

<a id="rustdoc-item-1993"></a>

### `queue`

```rust
queue: wgpu::Queue
```

The queue every upload and frame submission goes through.

<a id="rustdoc-item-1994"></a>

### `depth_format`

```rust
depth_format: wgpu::TextureFormat
```

Format of the depth buffer each surface owns, and of every geometry
pass's depth attachment.

<a id="rustdoc-item-1995"></a>

### `mesh_drawer`

```rust
mesh_drawer: crate::drawers::mesh_drawer::MeshDrawer
```

Records the geometry passes and holds the instance buffer they read.

<a id="rustdoc-item-1996"></a>

### `gpu_profiler`

```rust
gpu_profiler: Option<crate::profiler::Profiler>
```

GPU timestamps and pipeline statistics, when `PILL_GPU_PROFILE` asked
for them and the device has the features.

<a id="rustdoc-item-1997"></a>

### `frames_since_gpu_report`

```rust
frames_since_gpu_report: u32
```

Frames rendered since the GPU profiler last logged its numbers.

<a id="rustdoc-item-1998"></a>

### `camera_bind_group_layout`

```rust
camera_bind_group_layout: wgpu::BindGroupLayout
```

Layout every camera bind group is built from.

<a id="rustdoc-item-1999"></a>

### `instance`

```rust
instance: wgpu::Instance
```

The instance the surfaces were created from; a surface attached later
needs it.

<a id="rustdoc-item-2001"></a>

### `adapter`

```rust
adapter: wgpu::Adapter
```

The adapter the device runs on; a surface attached later is checked
against it.

<a id="rustdoc-item-2003"></a>

### `overlay`

```rust
overlay: crate::overlay::Overlay
```

Debug drawing, outlines and picking, drawn over every surface's chain.

<a id="rustdoc-item-2004"></a>

### `preview`

```rust
preview: crate::preview::PreviewRenderer
```

The asset preview path: one small off-screen render per request, read
back between frames.

<a id="rustdoc-item-2005"></a>

### `ui_renderer`

```rust
ui_renderer: renderer::UiRenderer
```

The UI painter: the game's UI and the debug labels, over every
surface's overlay. Its pipeline is tied to the surfaces' colour format,
and the debug font is registered in it from the start.

<a id="rustdoc-item-2007"></a>

### `frames_since_ui_report`

```rust
frames_since_ui_report: u32
```

UI frames since the UI pass last logged what it drew, so the log
stays readable while the end-to-end suites still see the token.

## Associated functions and methods

<a id="rustdoc-item-2009"></a>

### `new`

```rust
pub(in renderer) async unsafe fn new(window: RawWindowData, width: u32, height: u32) -> Result<(Self, SurfaceTarget)>;
```

The shared state, beside the primary surface's target.

The surface is one of the surfaces the state draws rather than part of
its own state, so it comes back as a [`SurfaceTarget`](struct.SurfaceTarget.md#rustdoc-item-1863) like every
surface attached later.

#### Errors

Returns a [`RendererError`] when the surface or device cannot be
created, the depth buffer cannot be built, the camera bind group layout
is refused, or the overlay or the resource storage cannot be created.

#### Safety

As [`Surface::create`](../surface/struct.Surface.md#rustdoc-item-2008): `window` must outlive the state.

<a id="rustdoc-item-2010"></a>

### `record_ui`

```rust
pub(in renderer) fn record_ui(self: &mut Self, surface_id: u32, encoder: &mut wgpu::CommandEncoder, view: &wgpu::TextureView, size: (u32, u32), frame: &RenderFrame, labels: &pill_ui_frame::DrawList);
```

Draw the debug labels and the frame's UI for `surface_id`.

The labels go first, in surface pixels, then the game's lists that name
`surface_id`, so the game's UI stays on top. Every surface records
through this same path with its own id, and all of a surface's lists go
to the painter in one call. [`Renderer::render`] applied the frame's
textures before this ran, so nothing here uploads.

<a id="rustdoc-item-2011"></a>

### `render`

```rust
pub(in renderer) fn render(self: &mut Self, target: &mut SurfaceTarget, plan: &[PassPlan<'_>], frame: &RenderFrame, camera: &CameraComponent, transform: &TransformComponent, render_queue: &[RenderQueueItem]) -> Result<()>;
```

Draw one surface's frame into `target`: the chain's passes, the overlay,
the UI, and the present.

The target is handed in rather than swapped into the state's own fields,
so a per-surface field has one home whether the surface is the primary
one or one attached later.

#### Errors

Returns the error when the surface's image cannot be acquired, when the
device was lost, or when wgpu refuses the frame's commands at
submission.

<a id="rustdoc-item-2012"></a>

### `begin_surface_frame`

```rust
pub(in renderer) fn begin_surface_frame<'a>(self: &mut Self, target: &mut SurfaceTarget, frame: &'a RenderFrame, camera: &CameraComponent, transform: &TransformComponent, render_queue: &'a [RenderQueueItem]) -> Result<SurfaceDraw<'a>>;
```

Acquire one surface's image and prepare everything the passes read.

The device-loss check, the swapchain acquire, the engine parameters, the
camera the surface is drawn through and the profiler's frame all happen
here, so the recording phases only record.

#### Errors

Returns the error when the device was lost, or when the surface's image
cannot be acquired.

<a id="rustdoc-item-2013"></a>

### `record_pass`

```rust
pub(in renderer) fn record_pass(self: &mut Self, encoder: &mut wgpu::CommandEncoder, entry: &PassPlan<'_>, target: &SurfaceTarget, draw: &SurfaceDraw<'_>);
```

Record one pass of the chain into `encoder`.

A pass whose target or camera is gone records nothing: the chain log
already named the pass that could not be built.

<a id="rustdoc-item-2014"></a>

### `pass_color_attachments`

```rust
pub(in renderer) fn pass_color_attachments<'a>(self: &Self, entry: &PassPlan<'_>, target: &'a SurfaceTarget, draw: &'a SurfaceDraw<'_>) -> Option<Vec<Option<wgpu::RenderPassColorAttachment<'a>>>>;
```

The colour attachments a pass writes, in the order the shader's
`SV_TARGET` list names them.

`None` when one of them was never created: the pass then draws nothing,
because drawing into the remaining targets would leave a picture the
next pass cannot read.

<a id="rustdoc-item-2015"></a>

### `record_geometry_pass`

```rust
pub(in renderer) fn record_geometry_pass(self: &mut Self, encoder: &mut wgpu::CommandEncoder, entry: &PassPlan<'_>, target: &SurfaceTarget, draw: &SurfaceDraw<'_>, color_attachments: &[Option<wgpu::RenderPassColorAttachment<'_>>], clear: bool) -> bool;
```

Record a geometry pass: the instances it was handed, through the
pipeline it built or through each instance's own material.

Returns whether a GPU timestamp was written before the pass.

<a id="rustdoc-item-2016"></a>

### `record_fullscreen_pass`

```rust
pub(in renderer) fn record_fullscreen_pass(self: &mut Self, encoder: &mut wgpu::CommandEncoder, entry: &PassPlan<'_>, target: &SurfaceTarget, draw: &SurfaceDraw<'_>, color_attachments: &[Option<wgpu::RenderPassColorAttachment<'_>>], clear: bool) -> bool;
```

Record a fullscreen pass: its single triangle over the whole target,
clipped to the frame's rectangle.

Returns whether a GPU timestamp was written before the pass.

<a id="rustdoc-item-2017"></a>

### `record_overlay_and_ui`

```rust
pub(in renderer) fn record_overlay_and_ui(self: &mut Self, encoder: &mut wgpu::CommandEncoder, target: &mut SurfaceTarget, draw: &SurfaceDraw<'_>);
```

Record the overlay and the UI over the chain's picture.

<a id="rustdoc-item-2018"></a>

### `finish_surface_frame`

```rust
pub(in renderer) fn finish_surface_frame(self: &mut Self, encoder: wgpu::CommandEncoder, draw: SurfaceDraw<'_>) -> Result<()>;
```

Resolve the profiler's queries, submit the frame's commands and present
the image.

#### Errors

Returns the error when wgpu refuses the frame's command buffer at
submission.

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
- `WasmNotSend`
