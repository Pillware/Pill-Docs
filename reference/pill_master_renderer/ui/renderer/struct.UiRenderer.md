<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2006"></a>

# Struct `pill_master_renderer::ui::renderer::UiRenderer`

```rust
pub struct UiRenderer;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\ui\renderer.rs:154`

The GPU resources that draw `pill_ui_frame` draw lists.

One instance belongs to one device and one target format. The caller uploads
texture changes once per frame ([`Self::apply_texture_set`](#rustdoc-item-3019)) and then calls
[`Self::render`](#rustdoc-item-3020) once per surface.

## Fields

<a id="rustdoc-item-3005"></a>

### `pipeline`

```rust
pipeline: wgpu::RenderPipeline
```

_No documentation provided._

<a id="rustdoc-item-3006"></a>

### `globals_buffer`

```rust
globals_buffer: wgpu::Buffer
```

_No documentation provided._

<a id="rustdoc-item-3007"></a>

### `globals_bind_group`

```rust
globals_bind_group: wgpu::BindGroup
```

_No documentation provided._

<a id="rustdoc-item-3008"></a>

### `texture_layout`

```rust
texture_layout: wgpu::BindGroupLayout
```

_No documentation provided._

<a id="rustdoc-item-3010"></a>

### `sampler`

```rust
sampler: wgpu::Sampler
```

The sampler used for textures that ask for [`UiTextureFilter::Linear`].

<a id="rustdoc-item-3012"></a>

### `nearest_sampler`

```rust
nearest_sampler: wgpu::Sampler
```

The sampler used for textures that ask for [`UiTextureFilter::Nearest`].

<a id="rustdoc-item-3013"></a>

### `textures`

```rust
textures: std::collections::HashMap<pill_ui_frame::TextureId, HeldTexture>
```

Every texture the received sets carried and this renderer has not freed,
with the revision it was uploaded at. A new instance starts empty, so
its first set uploads everything.

<a id="rustdoc-item-3015"></a>

### `vertices`

```rust
vertices: crate::stream_buffer::StreamBuffer
```

The vertices of every list on the surface being drawn, one list after
the next.

<a id="rustdoc-item-3016"></a>

### `indices`

```rust
indices: crate::stream_buffer::StreamBuffer
```

The indices of every list on the surface being drawn, in the same
order.

<a id="rustdoc-item-3017"></a>

### `scratch_vertices`

```rust
scratch_vertices: Vec<GpuVertex>
```

Vertices converted for the surface being drawn. The next surface clears
and refills them, so their allocation is reused.

<a id="rustdoc-item-3018"></a>

### `scratch_indices`

```rust
scratch_indices: Vec<u32>
```

Indices of the surface being drawn, reused in the same way.

## Associated functions and methods

<a id="rustdoc-item-3021"></a>

### `new`

```rust
pub fn new(device: &wgpu::Device, target_format: wgpu::TextureFormat) -> UiRenderer;
```

Creates the pipeline and the resources it draws with for
`target_format`.

`target_format` must be an sRGB format, such as `Rgba8UnormSrgb` or a
surface format's sRGB variant. The shader writes linear light and relies
on the target to encode it.

<a id="rustdoc-item-3019"></a>

### `apply_texture_set`

```rust
pub fn apply_texture_set(self: &mut Self, device: &wgpu::Device, queue: &wgpu::Queue, texture_set: &UiTextureSet);
```

Uploads every texture in `texture_set` whose revision this instance has
not applied yet, then frees the ones the set names.

A set carries whole images, so a new instance that holds no textures
uploads all of them from this one call and can draw with them straight
away. A running instance uploads only the textures whose revision
changed.

<a id="rustdoc-item-3022"></a>

### `apply_texture`

```rust
pub(in ui::renderer) fn apply_texture(self: &mut Self, device: &wgpu::Device, queue: &wgpu::Queue, texture: &UiTexture);
```

Uploads one texture's whole image at the revision it carries. A GPU
texture of the same size is reused instead of creating a new one.

<a id="rustdoc-item-3020"></a>

### `render`

```rust
pub fn render(self: &mut Self, device: &wgpu::Device, queue: &wgpu::Queue, encoder: &mut wgpu::CommandEncoder, target: &wgpu::TextureView, target_size: (u32, u32), lists: &[(&DrawList, f32)]);
```

Draws `lists` into `target`, in order, on top of what the target
already holds.

`target_size` is the target's size in physical pixels. Each list comes
with the scale factor of the monitor it was built for, which turns its
logical pixels into physical ones. Call this once per surface with every
list for that surface, because the buffers hold one surface's data and
can be written only once per submission.

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
