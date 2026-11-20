<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1513"></a>

# Function `pill_master_renderer::overlay::point_vertices`

```rust
pub(in overlay) fn point_vertices(debug_frame: &pill_engine::DebugFrame, view_projection: &pill_core::math::Matrix4f, viewport_size: (f32, f32), editor_view: bool) -> Vec<PointVertex>;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:1430`

The frame's gizmo points as screen-aligned quads of the requested pixel
size, each corner carrying its offset from the point's centre so the
fragment shader can test the silhouette per sample. Returns an empty list
when `editor_view` is false; see [`line_vertices`](fn.line_vertices.md#rustdoc-item-1500).
