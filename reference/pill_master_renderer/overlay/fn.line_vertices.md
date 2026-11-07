<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1457"></a>

# Function `pill_master_renderer::overlay::line_vertices`

```rust
pub(in overlay) fn line_vertices(debug_frame: &pill_engine::DebugFrame, view_projection: &pill_core::math::Matrix4f, viewport_size: (f32, f32), editor_view: bool) -> (Vec<LineVertex>, Vec<LineVertex>);
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:1172`

The frame's debug lines and gizmo lines as screen-space quads, split into
the lines tested against the scene's depth and the lines drawn on top.

Each quad is the segment widened by the line's half width plus its feather
on each side. Every corner carries its distance from the line's centre, so
the fragment shader can fade the edge. The widening happens in screen space
after projection, so a line keeps the same width at any depth. When
`editor_view` is false, the project's own debug lines still draw but the
editor's chrome (its drag guides and its gizmo handles) does not.
