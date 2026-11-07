<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-848"></a>

# Function `pill_editor_shell_egui_editor::shell::assets_tiles::asset_tile`

```rust
pub fn asset_tile(ui: &mut egui::Ui, row: &AssetListing, cell: egui::Vec2, browser: &mut ProjectBrowser, snapshot: &EditorSnapshot, writes: &mut AssetTileWrites<'_>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\assets_tiles.rs:164`

Draws one grid tile: its preview or type icon, its wrapped name, the
highlight behind a selected or hovered tile, and the clicks, menu and drags
it answers. A double click opens a folder, or a scene in the editor.
