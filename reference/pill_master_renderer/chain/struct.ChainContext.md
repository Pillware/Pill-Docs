<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-508"></a>

# Struct `pill_master_renderer::chain::ChainContext`

```rust
pub(crate) struct ChainContext<'a>;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:190`

What the chain needs from the renderer to build its GPU objects.

The chain names its shaders and textures by asset key, and the renderer
caches their GPU objects under the same key, so the chain is handed the
caches instead of a way to look them up.

The fields travel as one struct because the chain is mutated while the
renderer's state is borrowed, and eight separate arguments at every call
site would stop the chain reading as one unit.

## Fields

<a id="rustdoc-item-494"></a>

### `state`

```rust
state: &'a mut crate::renderer::State
```

The device, caches and layouts the passes are built from.

<a id="rustdoc-item-496"></a>

### `surface_format`

```rust
surface_format: wgpu::TextureFormat
```

The colour format a pass writing the surface declares.

<a id="rustdoc-item-498"></a>

### `size`

```rust
size: (u32, u32)
```

The surface size, in pixels: every offscreen target is sized from it.

<a id="rustdoc-item-499"></a>

### `depth_texture`

```rust
depth_texture: &'a crate::resources::RendererTexture
```

The depth buffer every geometry pass writes.

<a id="rustdoc-item-501"></a>

### `offscreen`

```rust
offscreen: &'a mut std::collections::HashMap<String, crate::resources::RendererTexture>
```

The offscreen colour targets the chain declares, by name.

<a id="rustdoc-item-503"></a>

### `shader_handles`

```rust
shader_handles: &'a crate::rendering_resources_manager::GpuColumn<renderer_shader::RendererShaderHandle>
```

Shader objects by asset key: a pass names its shader by key.

<a id="rustdoc-item-505"></a>

### `texture_handles`

```rust
texture_handles: &'a crate::rendering_resources_manager::GpuColumn<renderer_texture::RendererTextureHandle>
```

Texture objects by asset key: a pass's committed textures.

<a id="rustdoc-item-507"></a>

### `resource_epoch`

```rust
resource_epoch: u64
```

Bumped whenever a shader or texture object is created, recreated, or
dropped. It is part of both comparison keys, because a pass's bind
groups reference those objects by handle.

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
