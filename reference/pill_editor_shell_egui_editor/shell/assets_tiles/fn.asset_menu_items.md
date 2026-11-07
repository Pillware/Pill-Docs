<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-883"></a>

# Function `pill_editor_shell_egui_editor::shell::assets_tiles::asset_menu_items`

```rust
pub fn asset_menu_items(ui: &mut egui::Ui, snapshot: &EditorSnapshot, selection: &EditorSelection, dialog: &mut Option<AssetDialog>, pending: &mut PendingEditorCommands);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\assets_tiles.rs:387`

Draws the menu a file tile offers: rename and delete. Creating an asset and
opening a folder belong to a container's menu ([`asset_container_menu`](fn.asset_container_menu.md#rustdoc-item-882)), so
a file's menu never carries them.
