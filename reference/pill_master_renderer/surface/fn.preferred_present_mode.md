<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2949"></a>

# Function `pill_master_renderer::surface::preferred_present_mode`

```rust
pub(in surface) fn preferred_present_mode(present: pill_renderer_api::PresentPreference, available_present_modes: &[wgpu::PresentMode]) -> wgpu::PresentMode;
```

Visibility: `{'restricted': {'parent': 2900, 'path': '::surface'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\surface.rs:499`

The present mode a surface asking for `present` gets: that mode when the
surface supports it, vsync otherwise.
