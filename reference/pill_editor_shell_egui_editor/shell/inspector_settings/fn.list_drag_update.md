<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-800"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::list_drag_update`

```rust
pub fn list_drag_update(ui: &mut egui::Ui, family: &str, entries: &[JsonValue], rows: &[egui::Rect], block: egui::Rect, asset_path: &str, root: &JsonValue, walk: &mut SettingsWalk<'_>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:498`

Turn a held list row into a reorder: while a row of this family is over the
block, the insertion point is marked, and on release the list is rewritten
in one recorded step.

The drop is read from the drag payload and the pointer, not from a drop
target, so a release anywhere over the block counts: on a picker button, in
a gap, or on the row that appends. That is what makes dropping between two
rows work.
