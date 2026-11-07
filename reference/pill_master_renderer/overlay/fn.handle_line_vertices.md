<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1471"></a>

# Function `pill_master_renderer::overlay::handle_line_vertices`

```rust
pub(in overlay) fn handle_line_vertices(debug_frame: &pill_engine::DebugFrame, view_projection: &pill_core::math::Matrix4f, viewport_size: (f32, f32)) -> Vec<HandleLineVertex>;
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:1456`

The gizmo lines as the pick buffer draws them. Each is the same quad as the
drawn line, widened to the band the editor's hover test accepts, so a pick
covers the handle the pointer highlights.
