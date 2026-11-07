<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4166"></a>

# Function `pill_editor_core::gizmo::build_geometry`

```rust
pub fn build_geometry(mode: GizmoMode, origin: [f32; 3], basis: [[f32; 3]; 3], length: f32) -> GizmoGeometry;
```

Source: `editor\pill_editor_core\src\gizmo.rs:616`

Builds the handles of `mode` around `origin`, one per basis vector, each
`length` long, with no hover or drag.

This is the plain form of [`build_geometry_styled`](fn.build_geometry_styled.md#rustdoc-item-4165).

`basis` is the frame the axes draw in: the world axes, or those axes with
the entity's rotation applied for local space. The caller picks the space,
so the geometry itself needs no quaternions.
