<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4183"></a>

# Function `pill_editor_core::gizmo::hit_test`

```rust
pub fn hit_test(geometry: &GizmoGeometry, ray_origin: [f32; 3], ray_direction: [f32; 3], radius: f32) -> Option<u32>;
```

Source: `editor\pill_editor_core\src\gizmo.rs:1097`

Returns the handle under a cursor ray: the nearest one whose line passes
within `radius` world units of the ray, or whose triangle the ray enters.
`None` when the ray touches no handle.

The test runs on the geometry the frame draws, the same numbers the
renderer turns into pixels, so the highlight cannot disagree with what is
on screen.
