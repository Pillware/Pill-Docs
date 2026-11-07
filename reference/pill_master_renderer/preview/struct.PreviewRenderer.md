<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-780"></a>

# Struct `pill_master_renderer::preview::PreviewRenderer`

```rust
pub(crate) struct PreviewRenderer;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\preview.rs:147`

The GPU state one preview at a time needs: a 128x128 target, the two
pipelines that draw into it, and one readback slot.

## Fields

<a id="rustdoc-item-756"></a>

### `layout`

```rust
layout: wgpu::BindGroupLayout
```

The flat preview's bind group layout and pipeline: its parameters,
texture and sampler.

<a id="rustdoc-item-758"></a>

### `pipeline`

```rust
pipeline: wgpu::RenderPipeline
```

_No documentation provided._

<a id="rustdoc-item-759"></a>

### `mesh_layout`

```rust
mesh_layout: wgpu::BindGroupLayout
```

The mesh pipeline and its camera uniform: its own vertex layout,
depth test and framing.

<a id="rustdoc-item-760"></a>

### `mesh_pipeline`

```rust
mesh_pipeline: wgpu::RenderPipeline
```

_No documentation provided._

<a id="rustdoc-item-761"></a>

### `mesh_parameters`

```rust
mesh_parameters: wgpu::Buffer
```

_No documentation provided._

<a id="rustdoc-item-762"></a>

### `depth`

```rust
depth: wgpu::TextureView
```

The depth target a mesh preview tests against.

<a id="rustdoc-item-764"></a>

### `target`

```rust
target: wgpu::Texture
```

The 128x128 render target every preview draws into, and its view.

<a id="rustdoc-item-766"></a>

### `view`

```rust
view: wgpu::TextureView
```

_No documentation provided._

<a id="rustdoc-item-767"></a>

### `readback`

```rust
readback: crate::readback::MappedReadback
```

Where the drawn pixels are copied for mapping.

<a id="rustdoc-item-769"></a>

### `parameters`

```rust
parameters: wgpu::Buffer
```

The parameters buffer, rewritten per request.

<a id="rustdoc-item-770"></a>

### `sampler`

```rust
sampler: wgpu::Sampler
```

The sampler a texture preview reads through.

<a id="rustdoc-item-772"></a>

### `white_texture_view`

```rust
white_texture_view: wgpu::TextureView
```

A 1x1 white texture. A material preview binds it in place of the
asset's texture, so one bind group layout serves both modes.

<a id="rustdoc-item-773"></a>

### `texture_sources`

```rust
texture_sources: BudgetedCache<wgpu::TextureView>
```

Texture views by path, with the modified time each was decoded from.

<a id="rustdoc-item-775"></a>

### `mesh_sources`

```rust
mesh_sources: BudgetedCache<MeshSource>
```

Mesh sources by path, with the modified time each was decoded from.

<a id="rustdoc-item-776"></a>

### `in_flight_request_id`

```rust
in_flight_request_id: Option<u64>
```

The id of the request whose pixels are on their way.

<a id="rustdoc-item-778"></a>

### `finished_previews`

```rust
finished_previews: Vec<pill_renderer_api::PreviewImage>
```

Finished previews waiting for the next [`Self::collect`](#rustdoc-item-777).

## Associated functions and methods

<a id="rustdoc-item-781"></a>

### `new`

```rust
pub(crate) fn new(device: &wgpu::Device) -> Self;
```

Builds the target, both pipelines, the readback buffer and the caches.

<a id="rustdoc-item-782"></a>

### `ready`

```rust
pub(crate) fn ready(self: &Self) -> bool;
```

Returns whether a request can be drawn this frame: nothing is in flight
and no finished preview is still waiting to be handed over.

<a id="rustdoc-item-783"></a>

### `refuse`

```rust
pub(crate) fn refuse(self: &mut Self, id: u64);
```

Answers a request this renderer will not draw, so the caller stops
waiting for it.

The refusal goes on the finished list, which [`Self::collect`](#rustdoc-item-777) hands
over, so the caller gets exactly one answer for every request it made.

<a id="rustdoc-item-784"></a>

### `texture`

```rust
pub(crate) fn texture(self: &mut Self, device: &wgpu::Device, queue: &wgpu::Queue, path: &str) -> Option<(wgpu::TextureView, wgpu::Sampler)>;
```

Returns the view and sampler a texture preview samples.

The file is decoded and uploaded on first use. Its modified time is
remembered, and when the file changes it is decoded again, so a
re-imported texture previews its new pixels. Returns `None` when the
file cannot be read or decoded.

<a id="rustdoc-item-785"></a>

### `report_trimmed`

```rust
pub(in preview) fn report_trimmed(self: &Self, cache_name: &str, dropped: &[String]);
```

Logs a trim of one cache: how many entries were dropped and how many
bytes the cache holds now.

<a id="rustdoc-item-787"></a>

### `record`

```rust
pub(crate) fn record(self: &mut Self, device: &wgpu::Device, queue: &wgpu::Queue, encoder: &mut wgpu::CommandEncoder, id: u64, mode: PreviewMode, color: [f32; 4], source: Option<(wgpu::TextureView, wgpu::Sampler)>);
```

Records one texture or material preview into `encoder`.

`source` is the texture to sample. When it is `None`, the shader draws a
sphere in `color` instead. The caller submits the encoder, then calls
[`Self::after_submit`](#rustdoc-item-786) to start the readback's mapping, and
[`Self::collect`](#rustdoc-item-777) hands the pixels over.

<a id="rustdoc-item-788"></a>

### `mesh`

```rust
pub(crate) fn mesh(self: &mut Self, device: &wgpu::Device, queue: &wgpu::Queue, path: &str) -> Option<MeshSource>;
```

Returns the GPU mesh a mesh preview draws.

The file is decoded and uploaded on first use, and again when its
modified time changes. Returns `None` when the file cannot be read or
decoded, when it holds no vertices or triangles, or when its bounds
leave no room to frame it.

<a id="rustdoc-item-789"></a>

### `record_mesh`

```rust
pub(crate) fn record_mesh(self: &mut Self, device: &wgpu::Device, queue: &wgpu::Queue, encoder: &mut wgpu::CommandEncoder, id: u64, mesh: &MeshSource);
```

Records one mesh preview into `encoder`, then copies the square out for
mapping. The caller submits the encoder, as it does for the other modes.

<a id="rustdoc-item-790"></a>

### `copy_target_to_readback`

```rust
pub(in preview) fn copy_target_to_readback(self: &Self, encoder: &mut wgpu::CommandEncoder);
```

Copies the target's pixels into the readback buffer. Both preview
paths end with this step.

<a id="rustdoc-item-786"></a>

### `after_submit`

```rust
pub(crate) fn after_submit(self: &mut Self);
```

Starts mapping the readback buffer, which the last recorded preview
wrote.

Call this after the submission that holds the copy. Asking the buffer
to map before its copy is submitted makes the submission fail.

<a id="rustdoc-item-777"></a>

### `collect`

```rust
pub(crate) fn collect(self: &mut Self, device: &wgpu::Device) -> Vec<PreviewImage>;
```

Returns every preview the GPU has finished, polling without waiting.

When the readback fails, the request is answered with a refusal
instead. A caller that waits for an answer that never comes stops
asking, which would leave every later preview undrawn.

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
