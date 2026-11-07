<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-829"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_assets::folder_tree_rows`

```rust
pub fn folder_tree_rows(ui: &mut egui::Ui, assets: &[AssetListing], browser: &mut ProjectBrowser, selection: &mut EditorSelection, dialog: &mut Option<AssetDialog>, pending: &mut PendingEditorCommands, overlay_regions: &mut Vec<ShellRect>, snapshot: &EditorSnapshot, parent: &str, depth: usize);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_assets.rs:216`

Draws one level of the folder tree: a row per folder directly under
`parent` and, for each row the tree shows expanded, that row's own
children under it.
