<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8456"></a>

# Function `pill_editor_core::style::to_egui_color`

```rust
pub(in style) fn to_egui_color(theme_color: pill_ui_theme::Rgba) -> egui::Color32;
```

Visibility: `{'restricted': {'parent': 8137, 'path': '::style'}}` · Source: `editor\pill_editor_core\src\style.rs:676`

Converts a theme colour to an egui colour, keeping its straight (not
premultiplied) alpha.
