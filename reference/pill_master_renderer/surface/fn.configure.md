<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2910"></a>

# Function `pill_master_renderer::surface::configure`

```rust
pub(in surface) fn configure(surface: &wgpu::Surface<'static>, device: &wgpu::Device, surface_configuration: &mut wgpu::SurfaceConfiguration) -> crate::error::Result<()>;
```

Visibility: `{'restricted': {'parent': 2900, 'path': '::surface'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\surface.rs:622`

Reconfigures the surface during a frame (on a resize, or for a lost
swapchain), with the same `Opaque` fallback as [`configure_first`](fn.configure_first.md#rustdoc-item-2951).

A frame cannot await, so the error scopes are only blocked on in a native
development build. Elsewhere a refusal reaches the device's error handler,
which logs it, and the frame probe still reports it here. The alpha mode
reused is the one the first configuration proved, so this is the rare path.

## Errors

Returns [`RendererError::Backend`] when the driver refused the
configuration in every alpha mode it tried, with each refusal in the text.
