<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-673"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_fields::inspector_row`

```rust
pub fn inspector_row(ui: &mut egui::Ui, label: &str, tooltip: Option<&str>, widget: &mut dyn FnMut(&mut egui::Ui));
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_fields.rs:1127`

Draws the Inspector's field row: the shared label/control row ([`row`](../rows/fn.row.md#rustdoc-item-469)),
with the field's label on the left and its widget in the control column. A
`[Tooltip]` shows while the pointer rests on the label.
