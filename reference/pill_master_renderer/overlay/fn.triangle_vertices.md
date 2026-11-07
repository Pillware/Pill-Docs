<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1469"></a>

# Function `pill_master_renderer::overlay::triangle_vertices`

```rust
pub(in overlay) fn triangle_vertices(debug_frame: &pill_engine::DebugFrame, view_projection: &pill_core::math::Matrix4f, viewport_size: (f32, f32), editor_view: bool) -> Vec<TriangleVertex>;
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:1340`

The frame's gizmo triangles as screen-space triangles whose corners are
pushed `TRIANGLE_FEATHER` pixels out, and which the fragment shader feathers
back down to the silhouette the triangles really have. Returns an empty list
when `editor_view` is false; see [`line_vertices`](fn.line_vertices.md#rustdoc-item-1457).
