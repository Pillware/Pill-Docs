<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2950"></a>

# Function `pill_master_renderer::surface::pick_color_format`

```rust
pub(in surface) fn pick_color_format(available_formats: &[wgpu::TextureFormat]) -> Option<wgpu::TextureFormat>;
```

Visibility: `{'restricted': {'parent': 2900, 'path': '::surface'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\surface.rs:520`

The configured colour format to ask a surface for.

An sRGB format where the surface offers one, Rgba ahead of Bgra because it
needs no channel swizzle, and otherwise the first format the surface
advertises, since a poor format beats refusing to start.
