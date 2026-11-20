<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-699"></a>

# Function `pill_editor_shell::shell::inspector_fields::inspector_row`

```rust
pub fn inspector_row(ui: &mut egui::Ui, label: &str, tooltip: Option<&str>, widget: &mut dyn FnMut(&mut egui::Ui));
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:1184`

Draws the Inspector's field row: the shared label/control row ([`row`](../rows/fn.row.md#rustdoc-item-485)),
with the field's label on the left and its widget in the control column. A
`[Tooltip]` shows while the pointer rests on the label.
