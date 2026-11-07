<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2504"></a>

# Struct `pill_master_renderer::resources::renderer_mesh::RendererMesh`

```rust
pub struct RendererMesh;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_mesh.rs:70`

One mesh's GPU buffers: the vertex data and the index list that draws it.

The renderer builds one while it syncs mesh assets, when a mesh asset first
arrives or its version changes, and keeps it in the resource storage beside
every other GPU resource. A draw looks the mesh up by handle every frame,
so a rebuilt mesh is used without invalidating any pipeline.

## Fields

<a id="rustdoc-item-2507"></a>

### `name`

```rust
name: String
```

The mesh's name from its asset, used in logs and error messages.

<a id="rustdoc-item-2508"></a>

### `vertex_buffer`

```rust
vertex_buffer: wgpu::Buffer
```

The vertex data, bound at slot 0 by every pipeline that draws this mesh.

<a id="rustdoc-item-2509"></a>

### `index_buffer`

```rust
index_buffer: wgpu::Buffer
```

The indices into the vertex data, stored as `Uint32`.

<a id="rustdoc-item-2510"></a>

### `index_count`

```rust
index_count: u32
```

How many indices a draw of this mesh passes, taken from the asset.

## Associated functions and methods

<a id="rustdoc-item-2511"></a>

### `new`

```rust
pub fn new(device: &wgpu::Device, name: &str, mesh: &Mesh) -> Result<Self>;
```

Uploads a mesh's vertices and indices, ready to draw.

`name` is the mesh's name. It labels the GPU buffers and the error
message.

#### Errors

Returns [`RendererError::Other`] naming the mesh when it carries no
vertices or no indices. wgpu will not create a zero-sized buffer, so the
empty case has to be refused here. A mesh with nothing in it is a
mistake in the asset, and naming it helps more than an upload failure
buried in the log.

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
- `Vertex`
