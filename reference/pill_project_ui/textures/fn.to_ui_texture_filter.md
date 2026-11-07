<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-257"></a>

# Function `pill_project_ui::textures::to_ui_texture_filter`

```rust
pub(in textures) fn to_ui_texture_filter(texture_options: &egui::TextureOptions) -> pill_ui_frame::UiTextureFilter;
```

Visibility: `{'restricted': {'parent': 10, 'path': '::textures'}}` · Source: `ui\pill_project_ui\src\textures.rs:226`

Returns the filter mode `texture_options` asks for.

The frame carries one filter per texture, so only the magnification
setting is read.
