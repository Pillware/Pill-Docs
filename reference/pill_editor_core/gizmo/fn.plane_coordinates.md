<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4178"></a>

# Function `pill_editor_core::gizmo::plane_coordinates`

```rust
pub fn plane_coordinates(origin: [f32; 3], first_axis_direction: [f32; 3], second_axis_direction: [f32; 3], point: [f32; 3]) -> (f32, f32);
```

Source: `editor\pill_editor_core\src\gizmo.rs:989`

Returns `point`'s coordinates along a plane's two axes, measured from
`origin`.

A plane drag records both at the press and reads them again on every move,
so the object follows the cursor without jumping to it.
[`closest_axis_point`](fn.closest_axis_point.md#rustdoc-item-4171) does the same for a single axis. The two axes are the
gizmo's basis vectors, so world and local space both work.
