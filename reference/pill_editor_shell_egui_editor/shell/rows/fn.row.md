<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-469"></a>

# Function `pill_editor_shell_egui_editor::shell::rows::row`

```rust
pub fn row(ui: &mut egui::Ui, label: &str, tooltip: Option<&str>, draw_control: &mut dyn FnMut(&mut egui::Ui));
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\rows.rs:111`

Draws one label-and-control row in the compact column: `label` in the label
column, then whatever `draw_control` draws beside it.
