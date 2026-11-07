<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-500"></a>

# Struct `pill_master_renderer::resources::renderer_texture::RendererTexture`

```rust
pub struct RendererTexture;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_texture.rs:45`

A texture together with the view and sampler that make it usable.

One type covers every texture the renderer holds: uploaded assets,
offscreen colour targets, and depth.

## Fields

<a id="rustdoc-item-2812"></a>

### `texture`

```rust
texture: wgpu::Texture
```

The texture the view and the sampler belong to.

<a id="rustdoc-item-2813"></a>

### `texture_view`

```rust
texture_view: wgpu::TextureView
```

The view a pass binds the texture through.

<a id="rustdoc-item-2814"></a>

### `sampler`

```rust
sampler: wgpu::Sampler
```

How a shader reads a texel: the filter and address modes in use.

<a id="rustdoc-item-2815"></a>

### `view_dimension`

```rust
view_dimension: wgpu::TextureViewDimension
```

The shape the view was created with: a 2D image, or a cube.

A texture slot declares the same shape. Binding a texture to a slot
that wants the other shape is refused with both names, instead of
failing later in wgpu's own validation message.

## Associated functions and methods

<a id="rustdoc-item-2816"></a>

### `DEPTH_FORMAT`

```rust
const DEPTH_FORMAT: wgpu::TextureFormat = wgpu::TextureFormat::Depth32Float;
```

Pixel format of the renderer's depth buffer.

Pipeline state that renders into the buffer has to declare the same
format the attachment was created with, so the value sits beside the
constructor that creates it.

<a id="rustdoc-item-2596"></a>

### `new_texture`

```rust
pub fn new_texture(device: &wgpu::Device, queue: &wgpu::Queue, name: Option<&str>, texel_bytes: &[u8], width: u32, height: u32, texture_type: TextureType) -> Result<Self>;
```

Creates a texture, view, and sampler from decoded texels.

`texel_bytes` holds the texels the way the texture asset stores them
for `texture_type`. `name` labels the texture and appears in every
error that mentions it.

#### Errors

Returns [`crate::error::RendererError::Other`] naming the asset when
`texel_bytes` does not match the declared size and type, or when the
driver refuses the texture, the upload, or the sampler.

<a id="rustdoc-item-2817"></a>

### `new_render_target`

```rust
pub fn new_render_target(device: &wgpu::Device, label: &str, width: u32, height: u32, format: wgpu::TextureFormat) -> Result<Self>;
```

An offscreen colour target: written by one pass, read by the next.

The caller picks the format because a chain that ends in tonemapping
has to carry the range the scene produced until its last step. A
format that cannot hold that range clips the picture on the way
through.

#### Errors

Returns [`crate::error::RendererError::Other`] naming the target when
the driver refuses the texture or its sampler.

<a id="rustdoc-item-2818"></a>

### `new_depth_texture`

```rust
pub fn new_depth_texture(device: &wgpu::Device, surface_configuration: &wgpu::SurfaceConfiguration, label: &str) -> Result<Self>;
```

Creates the surface-sized depth buffer, with a sampler for reading it.

Taking the surface configuration rather than a size keeps the buffer
and the swapchain in step. The renderer rebuilds the depth texture on
every resize by passing the new configuration through here.

#### Errors

Returns [`crate::error::RendererError::Other`] naming the buffer when
the driver refuses the texture or its sampler.

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
