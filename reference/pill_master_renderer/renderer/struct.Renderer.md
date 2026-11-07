<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1865"></a>

# Struct `pill_master_renderer::renderer::Renderer`

```rust
pub struct Renderer;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:127`

The master renderer: the asset caches, a chain per surface, and the
submission behind the [`PillRenderer`] contract.

One renderer owns the surface of the window it was built on, every surface
attached since, and everything drawn to them: the shared GPU state, the
resource cache that keeps the GPU's copy of each asset current, and each
surface's chain.

## Fields

<a id="rustdoc-item-1853"></a>

### `state`

```rust
state: State
```

The wgpu device, queue and shared caches this renderer draws from.

<a id="rustdoc-item-1854"></a>

### `rendering_resources_manager`

```rust
rendering_resources_manager: crate::rendering_resources_manager::RenderingResourcesManager
```

The GPU object behind every live asset, with the asset version it was
built from. Comparing those versions is how a frame finds what changed,
one asset type at a time.

<a id="rustdoc-item-1857"></a>

### `metrics`

```rust
metrics: crate::api::RenderMetrics
```

The numbers measured for the last drawn frame: preparation and
submission times, instance bytes and pass counts. Reported through
[`PillRenderer::metrics`].

<a id="rustdoc-item-1859"></a>

### `queued_instances`

```rust
queued_instances: Vec<crate::Instance>
```

The frame's instances in queue order, as uploaded. Kept between frames
so its allocation is reused.

<a id="rustdoc-item-1861"></a>

### `surface_targets`

```rust
surface_targets: std::collections::BTreeMap<u32, SurfaceTarget>
```

Every surface this renderer draws, by id: the one it was built on under
[`SurfaceId::PRIMARY`], and each one attached since.

## Associated functions and methods

<a id="rustdoc-item-1867"></a>

### `new`

```rust
pub unsafe fn new(window: RawWindowData, width: u32, height: u32) -> Result<Self>;
```

Creates the renderer synchronously, blocking on [`Renderer::new_async`](#rustdoc-item-1866).

For the renderer module's attach export, which crosses a C ABI no
future can: loaded modules exist only in a native development build,
which can block.

#### Errors

Returns the errors of [`Renderer::new_async`](#rustdoc-item-1866), which does the work.

#### Safety

As [`Renderer::new_async`](#rustdoc-item-1866): `window` must name a live window that
outlives the renderer.

<a id="rustdoc-item-1866"></a>

### `new_async`

```rust
pub async unsafe fn new_async(window: RawWindowData, width: u32, height: u32) -> Result<Self>;
```

Creates the renderer: device and surface, the default material, and the
camera.

#### Errors

Returns a [`RendererError`] when a creation step fails: surface or
adapter acquisition, device creation, surface configuration, the depth
buffer, the resource storage, or the default material.

#### Safety

`window` must name a live window, and that window must outlive the
renderer: the surface is built on its raw handles and nothing here keeps
it alive. A frontend holds the window for as long as it holds the
renderer, and drops the renderer first.

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
- `Drop`
- `PillRenderer`
