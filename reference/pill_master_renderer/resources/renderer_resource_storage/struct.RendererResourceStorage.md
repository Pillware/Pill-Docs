<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-24"></a>

# Struct `pill_master_renderer::resources::renderer_resource_storage::RendererResourceStorage`

```rust
pub struct RendererResourceStorage;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_resource_storage.rs:60`

Every GPU resource the renderer holds, keyed by the handles it hands out.

One storage carries all five maps plus the engine parameters, so asset
sync, pass building, and drawing reach any resource through the same
borrow. The stand-in handles sit beside the maps that own their textures,
so a slot that binds nothing still finds one.

## Fields

<a id="rustdoc-item-2582"></a>

### `shaders`

```rust
shaders: pill_core::slot_map::SlotMap<renderer_shader::RendererShaderHandle, crate::resources::RendererShader>
```

Shader pipelines and their bind group layouts, one per shader handle.

<a id="rustdoc-item-2584"></a>

### `materials`

```rust
materials: pill_core::slot_map::SlotMap<renderer_material::RendererMaterialHandle, crate::resources::RendererMaterial>
```

Material bind groups, one per material handle.

<a id="rustdoc-item-2585"></a>

### `textures`

```rust
textures: pill_core::slot_map::SlotMap<renderer_texture::RendererTextureHandle, crate::resources::RendererTexture>
```

Uploaded textures, each with its view and sampler.

<a id="rustdoc-item-2586"></a>

### `meshes`

```rust
meshes: pill_core::slot_map::SlotMap<renderer_mesh::RendererMeshHandle, crate::resources::RendererMesh>
```

Mesh vertex and index buffers, ready to draw.

<a id="rustdoc-item-2587"></a>

### `cameras`

```rust
cameras: pill_core::slot_map::SlotMap<renderer_camera::RendererCameraHandle, crate::resources::RendererCamera>
```

Camera uniform buffers and the bind groups that carry them.

<a id="rustdoc-item-2588"></a>

### `engine_parameters`

```rust
engine_parameters: crate::resources::EngineParameters
```

The engine-wide uniform buffer and bind group, refilled every frame.

<a id="rustdoc-item-2589"></a>

### `default_color_texture`

```rust
default_color_texture: renderer_texture::RendererTextureHandle
```

The stand-in bound when a colour texture slot binds nothing.

<a id="rustdoc-item-2590"></a>

### `default_normal_texture`

```rust
default_normal_texture: renderer_texture::RendererTextureHandle
```

The stand-in bound when a normal texture slot binds nothing.

<a id="rustdoc-item-2591"></a>

### `default_equirect_texture`

```rust
default_equirect_texture: renderer_texture::RendererTextureHandle
```

The stand-in bound when an equirect slot binds nothing: one black texel,
so a sky with no environment map renders black instead of glaring
white.

<a id="rustdoc-item-2592"></a>

### `default_cubemap_texture`

```rust
default_cubemap_texture: renderer_texture::RendererTextureHandle
```

The stand-in bound when a cubemap slot binds nothing: six black faces.

## Associated functions and methods

<a id="rustdoc-item-2593"></a>

### `new`

```rust
pub fn new(device: &wgpu::Device, queue: &wgpu::Queue) -> Result<Self>;
```

Creates the storage with each map sized to its starting capacity, and
installs the colour, normal, equirect and cubemap stand-in textures.

#### Errors

Returns [`crate::error::RendererError::Other`] naming the stand-in when
the driver refuses its texture, upload, or sampler: `default_color`,
`default_normal`, `default_equirect` or `default_cubemap`. Nothing else
in the constructor returns an error.

<a id="rustdoc-item-2594"></a>

### `default_texture_for`

```rust
pub(crate) fn default_texture_for(self: &Self, kind: ShaderTextureKind) -> Option<RendererTextureHandle>;
```

Returns the stand-in texture a slot of `kind` falls back to when it
binds nothing. Returns `None` for a depth slot, because only a pass's
own input can supply one.

<a id="rustdoc-item-2597"></a>

### `install_default_textures`

```rust
pub(in resources::renderer_resource_storage) fn install_default_textures(self: &mut Self, device: &wgpu::Device, queue: &wgpu::Queue) -> Result<()>;
```

Installs the stand-in textures a texture slot falls back to when it
binds nothing: white for colour slots, the flat normal map for normal
slots, black for equirect and cubemap slots.

The colour and normal stand-ins are files the data module ships, read
through its store. A file that cannot be read falls back to the texel
built here, so a missing file cannot stop the renderer from starting.

#### Errors

Returns the error from [`RendererTexture::new_texture`](../renderer_texture/struct.RendererTexture.md#rustdoc-item-2596) when the driver
refuses one of the textures.

<a id="rustdoc-item-2599"></a>

### `create_stand_in_texture`

```rust
pub(in resources::renderer_resource_storage) fn create_stand_in_texture(device: &wgpu::Device, queue: &wgpu::Queue, name: &str, path: Option<&str>, texture_type: TextureType, texel_bytes: &[u8]) -> Result<RendererTexture>;
```

Creates one stand-in texture.

`name` labels the texture and names it in any error. When `path` names a
file the module ships and the file can be read, the texture is built
from it; otherwise it is a 1x1 texture built from `texel_bytes`. A file
that cannot be read is logged and replaced by that built-in texel.

#### Errors

Returns the error from [`RendererTexture::new_texture`](../renderer_texture/struct.RendererTexture.md#rustdoc-item-2596) when the driver
refuses the texture, the upload, or the sampler.

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
