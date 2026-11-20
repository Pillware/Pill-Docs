<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-604"></a>

# Function `pill_editor_shell::shell::inspector_fields::reference_button_width`

```rust
pub fn reference_button_width(ui: &egui::Ui, side_buttons: usize) -> f32;
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:50`

The width a reference row's main button takes: what is left after
`side_buttons` small buttons and the gap before each, never less than
[`CONTROL_MIN_WIDTH`](../rows/constant.CONTROL_MIN_WIDTH.md#rustdoc-item-475).
