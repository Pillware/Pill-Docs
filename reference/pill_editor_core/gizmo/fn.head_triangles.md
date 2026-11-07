<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4169"></a>

# Function `pill_editor_core::gizmo::head_triangles`

```rust
pub(in gizmo) fn head_triangles(triangles: &mut Vec<GizmoTriangle>, origin: [f32; 3], axis: [f32; 3], tip: [f32; 3], color: [f32; 4], handle: u32);
```

Visibility: `{'restricted': {'parent': 2489, 'path': '::gizmo'}}` · Source: `editor\pill_editor_core\src\gizmo.rs:756`

Builds an arrow head at `tip`: a square base 80% of the way along `axis`,
with one triangle from each of its edges to the tip.

The head is small next to the axis length, so it reads as an arrow from any
side.
