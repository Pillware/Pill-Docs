<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-250"></a>

# Function `pill_ui_kit::widgets::to_egui_color`

```rust
pub(in widgets) fn to_egui_color(theme_color: pill_ui_theme::Rgba) -> egui::Color32;
```

Visibility: `{'restricted': {'parent': 208, 'path': '::widgets'}}` · Source: `ui\pill_ui_kit\src\widgets.rs:215`

Returns the egui colour that matches a theme colour.

Both store straight sRGB alpha, so the four components pass through
unchanged.
