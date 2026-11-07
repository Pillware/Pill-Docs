<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1116"></a>

# Function `pill_master_renderer_data::assets::texture::project_equirect_to_cubemap`

```rust
pub fn project_equirect_to_cubemap(panorama: &[f32], width: u32, height: u32, face_size: u32) -> Vec<f32>;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\texture.rs:420`

Projects an equirectangular panorama onto the six faces of a cubemap.

Takes linear RGBA float texels of a `width` x `height` panorama and returns
the faces, each `face_size` square, one after another in layer order. Every
face texel samples the panorama bilinearly along its own direction. The
sampling wraps around the panorama's seam and clamps at its poles.
