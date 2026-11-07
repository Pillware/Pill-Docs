<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1473"></a>

# Function `pill_master_renderer::overlay::label_list`

```rust
pub(crate) fn label_list(debug_frame: &pill_engine::DebugFrame, view_projection: &pill_core::math::Matrix4f, viewport: crate::components::RenderViewport) -> pill_ui_frame::DrawList;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:1504`

The frame's labels as a `pill_ui_frame` list in surface pixels: glyph quads
over the bitmap font texture, each drawn over a shadow one glyph pixel down
and right. The UI painter draws it after the overlay, so text stays readable
over everything the overlay drew.

Debug colours are linear and the painter decodes sRGB vertex colours, so
each colour is converted on the way in and reaches the screen unchanged.
