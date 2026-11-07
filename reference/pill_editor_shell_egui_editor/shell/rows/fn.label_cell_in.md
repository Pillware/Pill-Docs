<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-467"></a>

# Function `pill_editor_shell_egui_editor::shell::rows::label_cell_in`

```rust
pub fn label_cell_in(ui: &mut egui::Ui, label_column_width: f32, label: &str, tooltip: Option<&str>) -> egui::Response;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\rows.rs:78`

Draws one row's label in a label column `label_column_width` points wide.

The cell takes its own rectangle and the label is laid out from that
rectangle's left edge. A label given a fixed-size slot by the row itself
would be centered in it, so a short name would drift away from the column
it belongs to.
