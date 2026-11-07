<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1855"></a>

# Struct `pill_master_renderer::rendering_resources_manager::RenderingResourcesManager`

```rust
pub(crate) struct RenderingResourcesManager;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\rendering_resources_manager.rs:133`

The GPU objects behind the asset store, and what they were built from.

The four columns below hold, per asset type, the content version each GPU
object was built from. A key that is not recorded, or whose version moved,
is rebuilt; a key whose version matches keeps its object.

## Fields

<a id="rustdoc-item-2092"></a>

### `synced_revision`

```rust
synced_revision: Option<u64>
```

The store revision these caches are up to date with, or `None` after an
explicit invalidation. The sync runs when it does not match the store's
revision.

<a id="rustdoc-item-2093"></a>

### `shaders`

```rust
shaders: GpuColumn<renderer_shader::RendererShaderHandle>
```

Shader objects by asset key.

<a id="rustdoc-item-2094"></a>

### `materials`

```rust
materials: GpuColumn<renderer_material::RendererMaterialHandle>
```

Material objects by asset key.

<a id="rustdoc-item-2095"></a>

### `textures`

```rust
textures: GpuColumn<renderer_texture::RendererTextureHandle>
```

Texture objects by asset key.

<a id="rustdoc-item-2096"></a>

### `meshes`

```rust
meshes: GpuColumn<renderer_mesh::RendererMeshHandle>
```

Mesh objects by asset key.

<a id="rustdoc-item-2097"></a>

### `default_shader`

```rust
default_shader: renderer_shader::RendererShaderHandle
```

The shader an instance draws with when its material names none, names
one that is not loaded, or is not in the resource storage.

<a id="rustdoc-item-2098"></a>

### `default_material`

```rust
default_material: renderer_material::RendererMaterialHandle
```

The material an instance draws with when its material never built.

<a id="rustdoc-item-2099"></a>

### `resource_epoch`

```rust
resource_epoch: u64
```

Generation counter for the shader and texture objects, increased by one
in each sync that created, recreated or dropped one. Pass bind groups
reference those objects by handle, so such a change is what puts them
out of date.

<a id="rustdoc-item-2100"></a>

### `live_asset_keys`

```rust
live_asset_keys: std::collections::HashSet<u64>
```

Scratch: the keys the store still holds for the column being walked.

One set serves all four columns, because the walks run one after
another and each clears it first.

<a id="rustdoc-item-2101"></a>

### `changed_asset_keys`

```rust
changed_asset_keys: std::collections::HashSet<u64>
```

Scratch: the keys whose object this sync rebuilt or removed. Read once,
by `invalidate_dependent_materials`, and meaningless outside the sync
that filled it.

## Associated functions and methods

<a id="rustdoc-item-2102"></a>

### `new`

```rust
pub(crate) fn new(state: &mut State) -> Result<Self>;
```

Creates a manager holding no GPU objects, plus the two objects the
fallbacks need.

#### Errors

Returns a [`RendererError`](crate::RendererError) when the built-in lit
shader or the material built from it will not build. Both defaults are
built here and every later fallback depends on them, so this is the one
creation failure that stops the renderer from starting.

<a id="rustdoc-item-2103"></a>

### `sync`

```rust
pub(crate) fn sync(self: &mut Self, assets: &AssetManager, state: &mut State);
```

Brings the GPU objects up to date with the asset store, one asset at a
time.

The store's revision decides whether this pass runs at all. Each
asset's content version then decides whether its object is rebuilt, so
one edited texture is uploaded again while its neighbours keep their
GPU objects and a removed asset frees its slot. A creation failure is
logged and skipped instead of ending the pass, so one bad asset neither
blocks the rest of the revision nor is retried every frame.

The scratch sets are fields rather than locals, because this runs on
every frame in which the store moved and a game that edits assets moves
it often.

<a id="rustdoc-item-2104"></a>

### `invalidate`

```rust
pub(crate) fn invalidate(self: &mut Self);
```

Forgets which versions the objects were built from, so the next sync
rebuilds all of them.

The objects themselves stay in place until that rebuild replaces them:
the sync removes a key's old object when it creates the new one, so
clearing the records is enough to get the whole store onto the GPU
again.

<a id="rustdoc-item-2105"></a>

### `build_queue`

```rust
pub(crate) fn build_queue(self: &Self, frame: &RenderFrame, state: &State) -> Vec<RenderQueueItem>;
```

Builds one queue item per drawable instance, sorted so that draws
sharing a key are recorded as one instanced draw.

An instance whose mesh never uploaded is skipped. One whose material
never built draws with the default material, and a material the
resource storage does not hold draws with the default shader. A partly
broken revision therefore still draws something, which is what the two
defaults are for.

<a id="rustdoc-item-2106"></a>

### `resolve_draw_handles`

```rust
pub(in rendering_resources_manager) fn resolve_draw_handles(self: &Self, mesh_key: u64, material_key: u64, state: &State) -> Option<(RendererShaderHandle, RendererMaterialHandle, RendererMeshHandle)>;
```

Returns the shader, material and mesh handles one instance draws with,
or `None` when its mesh never uploaded.

A material that never built falls back to the default material, and a
material the resource storage does not hold to the default shader.

<a id="rustdoc-item-2107"></a>

### `shader_handles`

```rust
pub(crate) fn shader_handles(self: &Self) -> &GpuColumn<RendererShaderHandle>;
```

Returns the shader column, which the chain reads to find the pipeline
behind a pass's shader.

<a id="rustdoc-item-2108"></a>

### `chain_context`

```rust
pub(crate) fn chain_context<'a>(self: &'a Self, state: &'a mut State, surface_format: wgpu::TextureFormat, size: (u32, u32), depth_texture: &'a RendererTexture, offscreen: &'a mut HashMap<String, RendererTexture>) -> ChainContext<'a>;
```

Returns what the chain needs from these caches to build its GPU
objects.

The chain reads the shader and texture columns by key, together with
the epoch that moves when one of them is rebuilt. Passing them together
keeps the borrow split in one place instead of at every call site. The
surface arrives as the pieces the chain reads - its format, its size,
its depth buffer and its offscreen targets - rather than as the whole
target, so the chain those pieces belong to can be rebuilt at the same
time.

<a id="rustdoc-item-2109"></a>

### `invalidate_dependent_materials`

```rust
pub(in rendering_resources_manager) fn invalidate_dependent_materials(self: &mut Self, assets: &AssetManager);
```

Forgets the version of every material that reads an asset this sync
rebuilt.

A material's bind groups are built from the layouts and views its
shader and textures had at the time. When one of those is rebuilt or
removed, the bind groups are out of date, yet the material's own
content version does not change. Forgetting the version makes
`sync_materials` rebuild the material in the same pass, against the new
object.

<a id="rustdoc-item-2110"></a>

### `sync_textures`

```rust
pub(in rendering_resources_manager) fn sync_textures(self: &mut Self, assets: &AssetManager, state: &mut State) -> bool;
```

Drops and rebuilds the textures whose asset changed.

Returns whether any texture object was created, recreated or dropped.
Keys whose object moved are added to `changed_asset_keys`, so the
materials built against them can be rebuilt too.

<a id="rustdoc-item-2111"></a>

### `sync_shaders`

```rust
pub(in rendering_resources_manager) fn sync_shaders(self: &mut Self, assets: &AssetManager, state: &mut State) -> bool;
```

Drops and rebuilds the shaders whose asset changed.

Returns whether any shader object was created, recreated or dropped.
Keys whose object moved are added to `changed_asset_keys`, so the
materials built against them can be rebuilt too.

<a id="rustdoc-item-2112"></a>

### `sync_meshes`

```rust
pub(in rendering_resources_manager) fn sync_meshes(self: &mut Self, assets: &AssetManager, state: &mut State);
```

Drops and rebuilds the meshes whose asset changed.

Meshes need no epoch increase. The draw path resolves a mesh handle per
frame, so a rebuilt mesh is picked up without any pipeline going out of
date.

<a id="rustdoc-item-2113"></a>

### `sync_materials`

```rust
pub(in rendering_resources_manager) fn sync_materials(self: &mut Self, assets: &AssetManager, state: &mut State);
```

Drops and rebuilds the materials whose asset changed.

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
