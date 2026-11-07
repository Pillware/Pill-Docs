<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-798"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::reference_list_entry_row`

```rust
pub fn reference_list_entry_row(ui: &mut egui::Ui, asset_path: &str, root: &JsonValue, family: &str, index: usize, field: &AssetReferenceField, walk: &mut SettingsWalk<'_>) -> egui::Rect;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:305`

Draw one entry of a reference list: its index behind a drag handle, its
picker, and the button that drops it from the list.

The whole row starts a drag, both the handle and the picker beside it,
because a person grabs an entry by its name more often than by the handle.
The row therefore moves wherever it is held, while a press that does not
move still opens the picker. A drop turns the row's rectangle into an
index.
