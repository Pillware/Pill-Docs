<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-256"></a>

# Function `pill_project_ui::textures::to_unpremultiplied_rgba8`

```rust
pub(in textures) fn to_unpremultiplied_rgba8(pixels: &[egui::Color32]) -> Vec<u8>;
```

Visibility: `{'restricted': {'parent': 10, 'path': '::textures'}}` · Source: `ui\pill_project_ui\src\textures.rs:214`

Converts egui's premultiplied sRGB pixels to straight-alpha RGBA8.
