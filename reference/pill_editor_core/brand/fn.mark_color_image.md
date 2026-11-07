<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-455"></a>

# Function `pill_editor_core::brand::mark_color_image`

```rust
pub fn mark_color_image() -> egui::ColorImage;
```

Source: `editor\pill_editor_core\src\brand.rs:134`

Returns the mark as a white image whose alpha channel is the stored
coverage. The shell uploads it once per session and tints it with the
theme's text colour.
