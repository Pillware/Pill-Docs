<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-879"></a>

# Function `pill_editor_shell_egui_editor::shell::assets_tiles::tile_name_job`

```rust
pub fn tile_name_job(text: &str, font: &egui::FontId, color: egui::Color32, width: f32) -> egui::text::LayoutJob;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\assets_tiles.rs:371`

Returns the layout job for a tile's name: wrapped to
[`ASSETS_TILE_LABEL_ROWS`](constant.ASSETS_TILE_LABEL_ROWS.md#rustdoc-item-839) rows at `width` points, broken inside a word when
it must (a long file name has no spaces), with an ellipsis where the last
row runs out.
