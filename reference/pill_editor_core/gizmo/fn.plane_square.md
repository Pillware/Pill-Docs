<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4167"></a>

# Function `pill_editor_core::gizmo::plane_square`

```rust
pub(in gizmo) fn plane_square(triangles: &mut Vec<GizmoTriangle>, origin: [f32; 3], first_axis_direction: [f32; 3], second_axis_direction: [f32; 3], length: f32, color: [f32; 4], handle: u32);
```

Visibility: `{'restricted': {'parent': 2489, 'path': '::gizmo'}}` · Source: `editor\pill_editor_core\src\gizmo.rs:708`

Builds one translation plane's square as two triangles.

The square is centred [`PLANE_OFFSET`](constant.PLANE_OFFSET.md#rustdoc-item-4030) times `length` along both of the
plane's axes, and its half-size is [`PLANE_HALF`](constant.PLANE_HALF.md#rustdoc-item-4031) times `length`.
