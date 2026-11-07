<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2423"></a>

# Struct `pill_master_renderer::resources::renderer_material::RendererMaterial`

```rust
pub struct RendererMaterial;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_material.rs:54`

One material's GPU resources: the bind groups its draws bind.

The game-facing [`Material`](../../preview/enum.PreviewMode.md#rustdoc-item-598) asset says what a surface
looks like; this is what that description becomes on the GPU once the
shader is known. One is built per material during asset sync and stored
beside every other GPU resource.

## Fields

<a id="rustdoc-item-2418"></a>

### `name`

```rust
name: String
```

Label used in logs and error messages, taken from the material asset.

<a id="rustdoc-item-2419"></a>

### `shader_handle`

```rust
shader_handle: renderer_shader::RendererShaderHandle
```

Shader the bind groups were built against.

Kept because the frame's queue packs it into the sort key, so draws
that share a shader within one rendering order end up adjacent, and
the drawer rebinds pipeline state once per run instead of once per
draw.

<a id="rustdoc-item-2420"></a>

### `parameters_bind_group`

```rust
parameters_bind_group: Option<wgpu::BindGroup>
```

Values the shader reads, bound at group 2.

Built from the shader's declared parameter slots, so a shader that
declares none leaves this `None` rather than an empty group.

<a id="rustdoc-item-2421"></a>

### `textures_bind_group`

```rust
textures_bind_group: Option<wgpu::BindGroup>
```

Textures the shader samples, bound at group 3.

One view and one sampler per declared slot. A slot the material left
unbound holds the renderer's default texture for that slot's type. A
shader that declares no texture slot leaves this `None`.

## Associated functions and methods

<a id="rustdoc-item-2425"></a>

### `new`

```rust
pub fn new(device: &wgpu::Device, queue: &wgpu::Queue, rendering_resource_storage: &RendererResourceStorage, name: &str, shader_handle: RendererShaderHandle, textures: &[(String, RendererTextureHandle)], parameters: &BTreeMap<String, MaterialParameter>) -> Result<Self>;
```

Builds one material's bind groups against the shader it names.

`name` is the material's name. It labels the bind groups and names the
material in every error message.

Both groups follow the slots the shader declares, not the material's
own parameter and texture maps. A value or texture bound under a name
the shader never declares is ignored. A declared parameter with no
value packs as zero, and a declared texture with none gets the
renderer's default.

#### Errors

Returns [`RendererError::RendererResourceNotFound`] when `shader_handle`
names no loaded shader. Every later failure is [`RendererError::Other`]:
a texture the material names that is not loaded, a texture whose view
shape does not match its slot's, a depth texture slot (only a pass can
supply one), a shader that declares slots but has no layout for them,
and a bind group the GPU refuses.

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
