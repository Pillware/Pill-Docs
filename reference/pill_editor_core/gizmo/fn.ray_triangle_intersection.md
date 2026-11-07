<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4185"></a>

# Function `pill_editor_core::gizmo::ray_triangle_intersection`

```rust
pub fn ray_triangle_intersection(ray_origin: [f32; 3], ray_direction: [f32; 3], corners: [[f32; 3]; 3]) -> Option<f32>;
```

Source: `editor\pill_editor_core\src\gizmo.rs:1194`

Returns how far along the ray it hits the triangle `corners`, using the
Möller-Trumbore test. `None` for a miss, or for a triangle behind the ray's
origin.
