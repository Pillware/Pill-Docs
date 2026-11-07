<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-828"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_assets::assets_tree`

```rust
pub fn assets_tree(ui: &mut egui::Ui, snapshot: &EditorSnapshot, browser: &mut ProjectBrowser, selection: &mut EditorSelection, dialog: &mut Option<AssetDialog>, pending: &mut PendingEditorCommands, overlay_regions: &mut Vec<ShellRect>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_assets.rs:144`

Draws the Assets tab's folder tree: the panel's two roots - the project's
assets and the extensions' read-only resources - then every folder below
them at its own indent, with the open folder's row highlighted.

A row click opens that folder in the grid and selects it, and the create
dialog's target folder follows that selection. The caret opens and closes
the row's children. A dropped tile moves its file into the row's folder,
except on the extensions side, which takes no drops at all. A row's menu is
the container's: make an asset in that folder, or open it in the file
manager. The spare space below the rows offers the same for the open
folder.
