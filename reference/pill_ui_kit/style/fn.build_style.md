<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-171"></a>

# Function `pill_ui_kit::style::build_style`

```rust
pub fn build_style(theme: &pill_ui_theme::Theme, base_style: &egui::Style) -> egui::Style;
```

Source: `ui\pill_ui_kit\src\style.rs:124`

Builds egui's style from `theme`, starting from `base_style`.

Every field the theme owns is overwritten. Everything else keeps the value
`base_style` has.
