<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2992"></a>

# Function `pill_master_renderer::surface::apply_and_probe`

```rust
pub(in surface) fn apply_and_probe(surface: &wgpu::Surface<'static>, device: &wgpu::Device, surface_configuration: &wgpu::SurfaceConfiguration) -> std::result::Result<wgpu::SurfaceTexture, String>;
```

Visibility: `{'restricted': {'parent': 2937, 'path': '::surface'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\surface.rs:655`

Configures the surface and acquires a frame from it.

Acquiring a frame is what creates the swapchain for real: wgpu-core
accepting the configuration does not mean the driver created one, and a
refusal only shows up here.

## Errors

Returns the swapchain status as text when no frame could be acquired.
