<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-26"></a>

# Struct `pill_master_renderer::resources::renderer_camera::RendererCamera`

```rust
pub struct RendererCamera;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_camera.rs:177`

The GPU-side resources of one camera: its uniform values, the buffer those
values are written to, and the bind group that exposes the buffer to
shaders.

It is built once and then only updated in place. [`RendererCamera::update`](#rustdoc-item-2332)
rewrites the buffer's contents on every frame, so moving the camera costs
one buffer write and no bind group rebuild.

## Fields

<a id="rustdoc-item-2333"></a>

### `parameters_data`

```rust
parameters_data: CameraParametersData
```

The values for the current frame. [`RendererCamera::update`](#rustdoc-item-2332) rebuilds
them before it writes them to the buffer.

<a id="rustdoc-item-2334"></a>

### `parameters_uniform_buffer`

```rust
parameters_uniform_buffer: wgpu::Buffer
```

The uniform buffer that holds `parameters_data`.

<a id="rustdoc-item-2335"></a>

### `bind_group_layout`

```rust
bind_group_layout: wgpu::BindGroupLayout
```

The layout the bind group was built from, kept beside it.

<a id="rustdoc-item-2336"></a>

### `bind_group`

```rust
bind_group: wgpu::BindGroup
```

The bind group every shader that reads the camera binds: at group 1 in
the chain's pipelines and the mesh drawer, at group 0 in the overlay's.

<a id="rustdoc-item-2337"></a>

### `projection_reported`

```rust
projection_reported: bool
```

Whether the last update already found unusable projection values and
warned about them. The flag keeps that warning to once per change
instead of once per frame, and clears when the values become usable.

## Associated functions and methods

<a id="rustdoc-item-2338"></a>

### `new`

```rust
pub fn new(device: &wgpu::Device, camera_bind_group_layout: wgpu::BindGroupLayout) -> Self;
```

Creates a camera on `device`, with its bind group built from
`camera_bind_group_layout`.

`camera_bind_group_layout` is the layout the renderer creates at
startup and hands to the camera and to every shader that reads the
camera. Sharing it is what makes the bind group compatible with those
pipelines.

<a id="rustdoc-item-2332"></a>

### `update`

```rust
pub fn update(self: &mut Self, queue: &wgpu::Queue, camera_component: &CameraComponent, transform_component: &TransformComponent, aspect: f32);
```

Uploads the camera's values for this frame to the uniform buffer.

Called once for each frame the surface draws, with the drawing
viewport's aspect ratio. An unusable projection value is reported when
it first appears, not on every frame it persists, so a broken camera
produces one warning instead of a stream of them.

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
- `Debug`
