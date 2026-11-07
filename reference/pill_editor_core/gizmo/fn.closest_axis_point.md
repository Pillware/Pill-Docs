<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4171"></a>

# Function `pill_editor_core::gizmo::closest_axis_point`

```rust
pub fn closest_axis_point(origin: [f32; 3], axis: [f32; 3], ray_origin: [f32; 3], ray_direction: [f32; 3]) -> Option<f32>;
```

Source: `editor\pill_editor_core\src\gizmo.rs:862`

Returns how far along `axis` the point closest to the cursor ray lies,
measured from `origin`. `None` when the ray runs parallel to the axis.

This is where two lines come closest: the axis through `origin` and the
cursor ray. A translation drag applies the difference between the value
recorded at the press and the value now, so the entity follows the cursor
without jumping to it.
