<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1915"></a>

# Struct `pill_master_renderer::surface::Surface`

```rust
pub struct Surface;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\surface.rs:54`

A window's swapchain, its configuration, and the colour format its
pipelines draw in.

Built by [`Surface::create`](#rustdoc-item-2008) or [`Surface::create_additional`](#rustdoc-item-2906), and
reconfigured in place for the rest of its life. The device it was configured
against is passed in rather than held: the same device creates every other
GPU object in the renderer, so holding it here would make this type look
like the device's owner as well as the surface's.

## Fields

<a id="rustdoc-item-2901"></a>

### `surface`

```rust
surface: wgpu::Surface<'static>
```

_No documentation provided._

<a id="rustdoc-item-2903"></a>

### `surface_configuration`

```rust
surface_configuration: wgpu::SurfaceConfiguration
```

_No documentation provided._

<a id="rustdoc-item-2904"></a>

### `render_format`

```rust
render_format: wgpu::TextureFormat
```

The render format: what the pipelines render to and what each frame is
drawn through. It is the configured format with an sRGB suffix where
the surface has an sRGB variant; see [`Surface::create`](#rustdoc-item-2008).

<a id="rustdoc-item-2905"></a>

### `backend`

```rust
backend: wgpu::Backend
```

The graphics API the device runs on, which the GPU profiler names its
timeline with.

## Associated functions and methods

<a id="rustdoc-item-2008"></a>

### `create`

```rust
pub async unsafe fn create(window: RawWindowData, width: u32, height: u32) -> Result<(Self, wgpu::Device, wgpu::Queue, wgpu::Instance, wgpu::Adapter)>;
```

Builds the GPU bootstrap: instance, surface, adapter, device and queue.

Returns the surface beside the device and queue it was configured with,
and the instance and adapter it was built from:
[`Surface::create_additional`](#rustdoc-item-2906) needs both to build further surfaces.

#### Errors

Returns a [`RendererError`] when a creation step fails: surface or
adapter acquisition, device creation, a surface advertising no texture
format or alpha mode, or a configuration every candidate was refused
for.

#### Safety

`window` must name a live window, and that window must outlive the
returned surface: nothing here keeps it alive.

<a id="rustdoc-item-2906"></a>

### `create_additional`

```rust
pub unsafe fn create_additional(instance: &wgpu::Instance, adapter: &wgpu::Adapter, device: &wgpu::Device, window: RawWindowData, width: u32, height: u32, render_format: wgpu::TextureFormat, present: pill_renderer_api::PresentPreference) -> Result<Self>;
```

Builds a surface for another window on the device the first surface
created, drawing in that surface's format.

The format has to match: every pass pipeline declares the first
surface's format, and one surface's pipelines cannot draw into another
format. A window whose surface cannot offer it is refused. The present
mode follows `present`, falling back to `Fifo` where the surface does
not list the preferred mode or the driver refuses it.

#### Errors

Returns [`RendererError::SurfaceCreation`] when the window's surface
cannot be created or the adapter cannot present to it,
[`RendererError::UnsupportedSurface`] when it cannot draw in
`render_format`, [`RendererError::Backend`] when it offers no alpha
mode, and the configuration errors of [`configure`](fn.configure.md#rustdoc-item-2910).

#### Safety

`window` must name a live window that outlives the returned surface.

<a id="rustdoc-item-2912"></a>

### `backend`

```rust
pub fn backend(self: &Self) -> wgpu::Backend;
```

The graphics API the device behind this surface runs on.

<a id="rustdoc-item-2913"></a>

### `format`

```rust
pub fn format(self: &Self) -> wgpu::TextureFormat;
```

The colour format every pipeline rendering to this surface declares,
and the format of the view each frame is drawn through: the configured
format's sRGB variant, or the configured format itself where the
surface has no sRGB variant.

<a id="rustdoc-item-2914"></a>

### `size`

```rust
pub fn size(self: &Self) -> (u32, u32);
```

The configured size, in physical pixels.

<a id="rustdoc-item-2915"></a>

### `composites`

```rust
pub fn composites(self: &Self) -> bool;
```

Whether the swapchain image's alpha reaches the compositor.

This decides whether a transparent pixel means "leave this pixel to
whatever else paints this window" or is simply opaque black, because
only a compositing mode carries alpha out of the image. [`configure`](fn.configure.md#rustdoc-item-2910)
records the mode the surface accepted, so an `Opaque` fallback shows up
here instead of being assumed away.

<a id="rustdoc-item-2916"></a>

### `configuration`

```rust
pub fn configuration(self: &Self) -> &wgpu::SurfaceConfiguration;
```

The whole configuration, for resources sized alongside the surface.

<a id="rustdoc-item-2917"></a>

### `resize`

```rust
pub fn resize(self: &mut Self, device: &wgpu::Device, width: u32, height: u32) -> Result<()>;
```

Reconfigures the surface for a new size.

The new size goes through [`configure`](fn.configure.md#rustdoc-item-2910), with its `Opaque` fallback, and
is only committed once the surface accepted it. A refusal therefore
leaves the old configuration in place, instead of one that disagrees
with the swapchain.

#### Errors

Returns [`RendererError::Backend`] when every candidate configuration
was refused, with each refusal collected.

<a id="rustdoc-item-2918"></a>

### `acquire`

```rust
pub fn acquire(self: &mut Self, device: &wgpu::Device) -> Result<wgpu::SurfaceTexture>;
```

Acquires the next frame, recovering a lost or outdated swapchain once.

#### Errors

Returns [`RendererError::Backend`] when the swapchain is still lost or
outdated after one reconfiguration, and again with wgpu's status for any
other acquisition failure.

<a id="rustdoc-item-2919"></a>

### `reconfigure`

```rust
pub(in surface) fn reconfigure(self: &mut Self, device: &wgpu::Device) -> Result<()>;
```

Reconfigures the surface from its current settings.

The recovery path for a lost or outdated swapchain: the configuration is
still what the window wants, only the platform-side surface needs
recreating.

#### Errors

Returns [`RendererError::Backend`] when every candidate alpha mode was
refused, as [`configure`](fn.configure.md#rustdoc-item-2910) reports it.

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
