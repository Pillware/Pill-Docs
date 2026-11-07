<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4176"></a>

# Function `pill_editor_core::gizmo::axis_angle_quaternion`

```rust
pub fn axis_angle_quaternion(axis: [f32; 3], radians: f32) -> [f32; 4];
```

Source: `editor\pill_editor_core\src\gizmo.rs:949`

Returns the `[x, y, z, w]` quaternion that turns by `radians` around
`axis`.

A zero-length axis gives the identity quaternion. A drag with no axis
cannot happen, but a caller must never get a NaN rotation from one.
