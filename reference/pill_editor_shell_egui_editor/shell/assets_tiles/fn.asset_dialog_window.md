<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-884"></a>

# Function `pill_editor_shell_egui_editor::shell::assets_tiles::asset_dialog_window`

```rust
pub fn asset_dialog_window(context: &egui::Context, dialog: &mut Option<AssetDialog>, pending: &mut PendingEditorCommands, snapshot: &EditorSnapshot, overlay_regions: &mut Vec<ShellRect>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\assets_tiles.rs:475`

Draws the create or rename dialog over the dock while one is open.

The create dialog lists the live standalone types and a name field; the
rename dialog shows the current path and the new name. Their buttons run the
shared submit helpers, which queue the recorded batch and close the dialog.

Public because [`run_frame`](../fn.run_frame.md#rustdoc-item-217)'s generated hot patch calls it through the
package path.

While the dialog is open, its rectangle joins the frame's overlay regions, so
a click on a button or in its name field belongs to the dialog and never
becomes a scene pick behind it.
