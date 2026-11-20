<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1517"></a>

# Function `pill_master_renderer::overlay::handle_line_vertices`

```rust
pub(in overlay) fn handle_line_vertices(debug_frame: &pill_engine::DebugFrame, view_projection: &pill_core::math::Matrix4f, viewport_size: (f32, f32)) -> Vec<HandleLineVertex>;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:1582`

The gizmo lines and point quads as the pick buffer draws them. Each is the
same geometry as the drawn handle, widened to the band the editor's hover
test accepts, so a pick covers the handle the pointer highlights.
