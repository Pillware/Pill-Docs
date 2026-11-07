<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1114"></a>

# Function `pill_master_renderer_data::assets::texture::equirect_uv`

```rust
pub fn equirect_uv(direction: glam::Vec3) -> (f32, f32);
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\texture.rs:389`

Returns the equirectangular uv that a direction samples, in `[0, 1]`.

Looking down `-Z` maps to the middle of the panorama (`u = 0.5`), `+X` maps
three quarters of the way across, and straight up maps to the top row. The
skybox shaders use the same formula, so a cubemap projected here shows the
same sky as the panorama it came from.
