<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-586"></a>

# Function `pill_editor_shell::shell::inspector_fields::vector_slot_width`

```rust
pub fn vector_slot_width(ui: &egui::Ui, components: usize) -> f32;
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:1204`

Returns the width of one component's slot in a vector row: the control
column left after the label, shared equally by `components` slots and the
gaps between them. A narrow panel squashes every slot alike, down to the
axis letter and [`CONTROL_MIN_WIDTH`](../rows/constant.CONTROL_MIN_WIDTH.md#rustdoc-item-475) of field, and the value is cropped
inside its field.
