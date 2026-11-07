<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1271"></a>

# Function `pill_master_renderer_data::assets::texture::sample_bilinear`

```rust
pub(in assets::texture) fn sample_bilinear(panorama: &[f32], width: u32, height: u32, u: f32, v: f32) -> [f32; 4];
```

Visibility: `{'restricted': {'parent': 1176, 'path': '::assets::texture'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\texture.rs:446`

Reads a panorama at `(u, v)` with bilinear filtering.

`u` wraps around the seam and `v` clamps at the poles, so a sample never
leaves the image.
