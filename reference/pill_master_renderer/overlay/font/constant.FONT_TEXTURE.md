<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-866"></a>

# Constant `pill_master_renderer::overlay::font::FONT_TEXTURE`

```rust
pub(crate) const FONT_TEXTURE: pill_ui_frame::TextureId = _;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\font.rs:118`

The texture the label list samples the font from.

The id is reserved at the top of the UI's id space. `pill_project_ui` maps
egui's managed textures to `1 << 63 | id` and its user textures below that
ceiling, so the only managed texture that could reach this id is the
largest one.
