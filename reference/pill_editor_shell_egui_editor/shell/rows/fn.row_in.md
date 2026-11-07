<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-470"></a>

# Function `pill_editor_shell_egui_editor::shell::rows::row_in`

```rust
pub fn row_in(ui: &mut egui::Ui, label_column_width: f32, label: &str, tooltip: Option<&str>, draw_control: &mut dyn FnMut(&mut egui::Ui));
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\rows.rs:122`

Draws one label-and-control row whose label column is `label_column_width`
points wide.
