<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-807"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::colour_parameter_row`

```rust
pub fn colour_parameter_row(ui: &mut egui::Ui, asset_path: &str, root: &JsonValue, key: &str, channels: Vec<f32>, pending: &mut PendingEditorCommands);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:847`

Draw one colour parameter: a swatch whose popup holds the picker.

A commit writes the whole array back, as one recorded settings step.
