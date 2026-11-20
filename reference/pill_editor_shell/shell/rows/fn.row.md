<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-485"></a>

# Function `pill_editor_shell::shell::rows::row`

```rust
pub fn row(ui: &mut egui::Ui, label: &str, tooltip: Option<&str>, draw_control: &mut dyn FnMut(&mut egui::Ui));
```

Source: `editor\pill_editor_shell\src\shell\rows.rs:148`

Draws one label-and-control row in the panel's label column
([`label_column_width`](fn.label_column_width.md#rustdoc-item-481)): `label` on the left, then whatever `draw_control`
draws in the control column, which runs to the panel's right edge.
