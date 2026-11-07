<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1270"></a>

# Function `pill_master_renderer_data::assets::texture::cube_face_direction`

```rust
pub fn cube_face_direction(face: usize, s: f32, t: f32) -> glam::Vec3;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\texture.rs:402`

Returns the direction a texel of a cubemap face looks along.

`face` is the layer index: `+X`, `-X`, `+Y`, `-Y`, `+Z`, `-Z`. `s` and `t`
run from -1 to 1 across the face, left to right and top to bottom. This is
the cube face table GPUs sample by, so a texel stored here is the one a
shader reads for that direction.
