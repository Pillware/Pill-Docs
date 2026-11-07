<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-372"></a>

# Struct `pill_master_renderer::resources::renderer_pass::RendererPass`

```rust
pub struct RendererPass;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_pass.rs:68`

One pass of the chain, in the shape its [`PassKind`] asks for: a geometry
pass drawing instances through its own shader, a fullscreen pass, or the
skybox.

## Fields

<a id="rustdoc-item-2541"></a>

### `name`

```rust
name: String
```

Name of the pass this pipeline was built for.

<a id="rustdoc-item-2542"></a>

### `pipeline`

```rust
pipeline: wgpu::RenderPipeline
```

Pipeline a draw of this pass binds.

<a id="rustdoc-item-2543"></a>

### `reads_engine_parameters`

```rust
reads_engine_parameters: bool
```

Whether the pass's shader reads the engine's parameters.

<a id="rustdoc-item-2544"></a>

### `reads_camera_parameters`

```rust
reads_camera_parameters: bool
```

Whether the pass's shader reads the camera's parameters.

<a id="rustdoc-item-2545"></a>

### `parameters_bind_group`

```rust
parameters_bind_group: Option<wgpu::BindGroup>
```

The pass's own parameter values, for a shader that declares parameter
slots. `None` when the shader declares none.

<a id="rustdoc-item-2546"></a>

### `textures_bind_group`

```rust
textures_bind_group: Option<wgpu::BindGroup>
```

The textures the pass samples, for a shader that declares texture
slots. `None` when the shader declares none.

## Associated functions and methods

<a id="rustdoc-item-2547"></a>

### `new`

```rust
pub fn new(device: &wgpu::Device, queue: &wgpu::Queue, rendering_resource_storage: &RendererResourceStorage, engine_bind_group_layout: &wgpu::BindGroupLayout, camera_bind_group_layout: &wgpu::BindGroupLayout, pass: &ResolvedPass, shader: &Shader, renderer_shader: &RendererShader, target_formats: &[wgpu::TextureFormat], depth_format: wgpu::TextureFormat, offscreen_targets: &HashMap<String, RendererTexture>, depth_texture: &RendererTexture, textures: &[(String, RendererTextureHandle)], defined_targets: &HashSet<String>) -> Result<Self>;
```

Builds the pipeline, the bind groups and the flags a pass draws with.

`shader` is the cooked source the pipeline's modules are created from,
and `renderer_shader` is the GPU shader built from it, whose group
layouts the bind groups are created against. `target_formats` holds one
format per output the pass writes, in the order the shader declares
them. `offscreen_targets` holds the texture created for each offscreen
target name in the chain, `depth_texture` is the renderer's own depth
buffer, and `defined_targets` names the targets the passes before this
one declared, which are the only ones this pass may read.

#### Errors

Returns [`RendererError::Other`] when wgpu refuses the pipeline, when a
texture slot cannot be resolved (a pass input no earlier pass writes is
one case), or when a shader declares slots and has no layout for them.

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
