<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4184"></a>

# Function `pill_editor_core::gizmo::ray_segment_distance`

```rust
pub(in gizmo) fn ray_segment_distance(ray_origin: [f32; 3], ray_direction: [f32; 3], start: [f32; 3], end: [f32; 3]) -> Option<(f32, f32)>;
```

Visibility: `{'restricted': {'parent': 2489, 'path': '::gizmo'}}` · Source: `editor\pill_editor_core\src\gizmo.rs:1140`

Returns how far along the ray, and how far away from it, the ray comes
closest to the segment `start..end`.

A closest point behind the ray's origin is clamped to the origin. `None`
for a zero-length ray direction, or for a zero-length segment that lies
behind the origin.
