<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-799"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::list_append_row`

```rust
pub fn list_append_row(ui: &mut egui::Ui, asset_path: &str, root: &JsonValue, field: &AssetReferenceField, walk: &mut SettingsWalk<'_>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:432`

Draw the row that appends an entry: the same picker, for the index one past
the end, and its choice is what creates the entry.

The label column stays empty so the button lines up with the rows above it,
and the row takes a file dragged from the Assets tab like any other picker.
