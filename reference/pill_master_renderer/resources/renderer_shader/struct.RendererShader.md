<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2548"></a>

# Struct `pill_master_renderer::resources::renderer_shader::RendererShader`

```rust
pub struct RendererShader;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_shader.rs:57`

One shader's GPU pipeline and the group layouts its draws bind.

The pipeline is what a draw switches to. A material or pass built against
this shader binds its parameters and textures through these layouts.

## Fields

<a id="rustdoc-item-2677"></a>

### `name`

```rust
name: String
```

The shader asset's name, used in wgpu object labels, logs and error
messages.

<a id="rustdoc-item-2678"></a>

### `render_pipeline`

```rust
render_pipeline: wgpu::RenderPipeline
```

The pipeline a draw through this shader binds.

A pass that owns a pipeline draws through its own instead, because only
the pass knows the target's format, its depth settings and its culling.

<a id="rustdoc-item-2679"></a>

### `parameter_slots`

```rust
parameter_slots: indexmap::IndexMap<String, crate::assets::ShaderParameterSlot>
```

The uniforms the shader declares, by name, in declaration order.

<a id="rustdoc-item-2682"></a>

### `parameters_bind_group_layout`

```rust
parameters_bind_group_layout: Option<wgpu::BindGroupLayout>
```

Layout of the parameters group (set 2), or `None` when the shader
declares no parameters.

<a id="rustdoc-item-2683"></a>

### `texture_slots`

```rust
texture_slots: indexmap::IndexMap<String, crate::assets::ShaderTextureSlot>
```

The textures the shader declares, by name, each with its bindings.

<a id="rustdoc-item-2685"></a>

### `textures_bind_group_layout`

```rust
textures_bind_group_layout: Option<wgpu::BindGroupLayout>
```

Layout of the textures group (set 3), or `None` when the shader
declares no textures.

<a id="rustdoc-item-2686"></a>

### `reads_engine_parameters`

```rust
reads_engine_parameters: bool
```

Whether the shader reads the engine's parameters, in which case a
drawer binds that group before the draw.

<a id="rustdoc-item-2687"></a>

### `reads_camera_parameters`

```rust
reads_camera_parameters: bool
```

Whether the shader reads the camera's parameters, in which case a
drawer binds that group before the draw.

## Associated functions and methods

<a id="rustdoc-item-2688"></a>

### `new`

```rust
pub fn new(name: &str, device: &wgpu::Device, color_format: wgpu::TextureFormat, depth_format: Option<wgpu::TextureFormat>, vertex_layouts: &[wgpu::VertexBufferLayout<'_>], vertex_wgsl: &str, fragment_wgsl: &str, parameter_slots: &IndexMap<String, ShaderParameterSlot>, texture_slots: &IndexMap<String, ShaderTextureSlot>, engine_bind_group_layout: &wgpu::BindGroupLayout, camera_bind_group_layout: &wgpu::BindGroupLayout, uniform_groups: UniformGroups) -> Result<Self>;
```

Builds a shader's render pipeline and group layouts from its WGSL, for
the given color and depth formats.

The parameters and textures layouts exist only when the shader declares
slots of that kind. A missing one is padded with an empty layout, so the
shader keeps the engine's fixed group convention.

#### Errors

Returns [`RendererError::Other`] when wgpu reports an error while the
pipeline is created: a validation error, which means the shader asset is
wrong, or an out-of-memory or internal error. The error is captured
while the pipeline is built, so the refusal names the shader instead of
panicking.

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
