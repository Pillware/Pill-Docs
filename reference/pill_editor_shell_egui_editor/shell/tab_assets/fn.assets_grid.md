<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-832"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_assets::assets_grid`

```rust
pub fn assets_grid(ui: &mut egui::Ui, snapshot: &EditorSnapshot, browser: &mut ProjectBrowser, writes: &mut AssetTileWrites<'_>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_assets.rs:346`

Draws the open folder's tiles: its folders first, then its files, each an
icon with its own name under it. The pane below the last row takes a
dropped tile into the open folder, and a right-click there opens the
container menu of the open folder.
