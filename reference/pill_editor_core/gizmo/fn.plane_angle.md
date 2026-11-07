<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4173"></a>

# Function `pill_editor_core::gizmo::plane_angle`

```rust
pub fn plane_angle(origin: [f32; 3], axis: [f32; 3], point: [f32; 3]) -> f32;
```

Source: `editor\pill_editor_core\src\gizmo.rs:915`

Returns the angle of `point` around `axis`, in radians, measured in the
basis of the axis's rotation ring.

A rotation drag records this angle at the press and reads it again on every
move. The difference is the rotation, so the entity does not jump on the
first frame.
