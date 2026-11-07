<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-197"></a>

# Function `pill_ui_kit::style::margin`

```rust
pub(in style) fn margin(theme_margin: f32) -> egui::Margin;
```

Visibility: `{'restricted': {'parent': 118, 'path': '::style'}}` · Source: `ui\pill_ui_kit\src\style.rs:368`

Converts one theme number to an egui margin.

egui stores a margin as an `i8`, so the value is rounded and clamped to
`0..=127`.
