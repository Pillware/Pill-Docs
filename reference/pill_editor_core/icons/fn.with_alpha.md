<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4569"></a>

# Function `pill_editor_core::icons::with_alpha`

```rust
pub fn with_alpha(color: egui::Color32, opacity_factor: f32) -> egui::Color32;
```

Source: `editor\pill_editor_core\src\icons.rs:489`

Returns `color` with its alpha channel scaled by `opacity_factor`.

The factor is clamped between 0 and 1.
