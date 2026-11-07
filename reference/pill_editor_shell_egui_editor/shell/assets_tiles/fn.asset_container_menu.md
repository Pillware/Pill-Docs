<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-882"></a>

# Function `pill_editor_shell_egui_editor::shell::assets_tiles::asset_container_menu`

```rust
pub fn asset_container_menu(ui: &mut egui::Ui, snapshot: &EditorSnapshot, selection: &EditorSelection, dialog: &mut Option<AssetDialog>, pending: &mut PendingEditorCommands, folder: &str);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\assets_tiles.rs:422`

Draws the menu a container offers: the grid's empty strip and a folder tile.
A folder can have an asset created in it and can be opened in the system's
file manager.

A module's folder can be opened but not written into: its resources are
shown and inspected, never created beside.
