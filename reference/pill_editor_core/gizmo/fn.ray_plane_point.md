<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4172"></a>

# Function `pill_editor_core::gizmo::ray_plane_point`

```rust
pub fn ray_plane_point(origin: [f32; 3], normal: [f32; 3], ray_origin: [f32; 3], ray_direction: [f32; 3]) -> Option<[f32; 3]>;
```

Source: `editor\pill_editor_core\src\gizmo.rs:891`

Where the cursor ray meets the plane through `origin` whose normal is
`normal`, or `None` when the ray runs parallel to it or the hit lies behind
the ray's origin.
