<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1514"></a>

# Function `pill_master_renderer::overlay::point_quad`

```rust
pub(in overlay) fn point_quad(point: &pill_engine::GizmoPoint, view_projection: &pill_core::math::Matrix4f, viewport_size: (f32, f32), extra_pixels: f32) -> Option<[[f32; 4]; 6]>;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:1476`

The six clip-space corners of a point's screen-aligned quad around its
projected centre, its half extent being its half size plus
`extra_pixels`. `None` when the point is behind the camera.
