<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2951"></a>

# Function `pill_master_renderer::surface::configure_first`

```rust
pub(in surface) async fn configure_first(surface: &wgpu::Surface<'static>, device: &wgpu::Device, surface_configuration: &mut wgpu::SurfaceConfiguration) -> crate::error::Result<()>;
```

Visibility: `{'restricted': {'parent': 2900, 'path': '::surface'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\surface.rs:582`

Configures the surface for the first time, giving up the compositing alpha
mode if the driver refuses it.

`Surface::configure` returns nothing: a refused configuration only reaches
the device's error handler, which logs it, so the call would look like it
succeeded. A refusal is realistic because a compositing alpha mode needs a
compositing window, which a capability list does not promise. The requested
mode is therefore tried inside its own error scopes, and `Opaque`, the mode
every surface must support, is the fallback. The scopes are awaited: the
renderer is being built asynchronously, so every target can wait for them.

## Errors

Returns [`RendererError::Backend`] when the driver refused the
configuration in every candidate alpha mode, with each refusal in the text.
