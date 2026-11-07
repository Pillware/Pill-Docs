<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-16"></a>

# Struct `pill_master_renderer::drawers::mesh_drawer::DrawingContext`

```rust
pub(crate) struct DrawingContext;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\drawers\mesh_drawer.rs:58`

The bound state and instance range of the batch being accumulated.

It holds the shader, material, and mesh the bound GPU resources belong to,
plus the range of instances accumulated since the last recorded draw.
`Default` leaves it empty, so the first item always counts as a change and
its resources are bound before anything is drawn.

## Fields

<a id="rustdoc-item-0"></a>

### `shader_handle`

```rust
shader_handle: Option<renderer_shader::RendererShaderHandle>
```

_No documentation provided._

<a id="rustdoc-item-4"></a>

### `shader_name`

```rust
shader_name: String
```

_No documentation provided._

<a id="rustdoc-item-6"></a>

### `material_handle`

```rust
material_handle: Option<renderer_material::RendererMaterialHandle>
```

_No documentation provided._

<a id="rustdoc-item-8"></a>

### `material_name`

```rust
material_name: String
```

_No documentation provided._

<a id="rustdoc-item-9"></a>

### `mesh_handle`

```rust
mesh_handle: Option<renderer_mesh::RendererMeshHandle>
```

_No documentation provided._

<a id="rustdoc-item-11"></a>

### `mesh_name`

```rust
mesh_name: String
```

_No documentation provided._

<a id="rustdoc-item-12"></a>

### `mesh_index_count`

```rust
mesh_index_count: u32
```

How many indices the currently bound mesh has.

<a id="rustdoc-item-13"></a>

### `accumulated_instance_range`

```rust
accumulated_instance_range: std::ops::Range<u32>
```

_No documentation provided._

<a id="rustdoc-item-15"></a>

### `accumulated_instance_count`

```rust
accumulated_instance_count: u32
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-17"></a>

### `log`

```rust
pub fn log(self: &Self);
```

Writes the telemetry line that describes the draw just recorded.

The line carries the instance range and the shader, material, and mesh
names, so a frame that batches the wrong draws can be traced from the
log alone.

<a id="rustdoc-item-18"></a>

### `record_draw_accumulated_instances`

```rust
pub fn record_draw_accumulated_instances(self: &mut Self, render_pass: &mut wgpu::RenderPass<'_>);
```

Records the instances accumulated since the last draw as one indexed
draw, when there are any, and then empties the range.

Call it wherever the accumulated instances stop sharing the bound
state: before a shader, material, or mesh switch, when the pass's
pipeline changes between ranges, and at the end of the last range.

<a id="rustdoc-item-20"></a>

### `accumulate_instance`

```rust
pub fn accumulate_instance(self: &mut Self);
```

Extends the range the next draw covers by one instance.

The caller makes one call per queue item, so the range grows instance by
instance until a state change or the end of the range records it.

<a id="rustdoc-item-21"></a>

### `start_run`

```rust
pub fn start_run(self: &mut Self, render_pass: &mut wgpu::RenderPass<'_>, queue_position: u32);
```

Draws what is accumulated, then starts a new run at `queue_position`.

A range can begin anywhere in the instance buffer, so its first instance
does not have to follow the one the previous range ended with.

<a id="rustdoc-item-22"></a>

### `forget_bound_shader`

```rust
pub fn forget_bound_shader(self: &mut Self);
```

Forget which shader is bound, so the next item binds its pipeline again
even when the shader handle has not changed.

A queue key names the shader, material, and mesh a draw binds, but never
the pipeline it draws through. A run drawn through another pipeline
therefore has to bind that pipeline again.

<a id="rustdoc-item-23"></a>

### `change_shader`

```rust
pub fn change_shader(self: &mut Self, renderer_resource_storage: &RendererResourceStorage, shader_handle: RendererShaderHandle, pipeline_override: Option<&wgpu::RenderPipeline>, render_pass: &mut wgpu::RenderPass<'_>, camera: &RendererCamera);
```

Binds the pipeline and bind groups the given shader draws through.

The shader's own pipeline is used unless the pass supplies an override,
and the engine and camera bind groups are set only when the shader
declares that it reads them.

<a id="rustdoc-item-27"></a>

### `change_material`

```rust
pub fn change_material(self: &mut Self, renderer_resource_storage: &RendererResourceStorage, material_handle: RendererMaterialHandle, render_pass: &mut wgpu::RenderPass<'_>);
```

Binds the parameter and texture bind groups the given material draws
through.

Either group may be absent, because a material whose shader declares no
parameters, or no textures, stores no group for it. A missing group
leaves whatever was bound before it in place, so a material does not
clear bindings it does not use.

<a id="rustdoc-item-28"></a>

### `change_mesh`

```rust
pub fn change_mesh(self: &mut Self, renderer_resource_storage: &RendererResourceStorage, mesh_handle: RendererMeshHandle, render_pass: &mut wgpu::RenderPass<'_>);
```

Binds the vertex and index buffers of the given mesh.

The mesh's index count is stored alongside the binding, because the
draw calls read it from the context, not from the mesh.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
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
- `Debug`
- `Clone`
- `Default`
