<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-702"></a>

# Function `pill_editor_shell::shell::inspector_fields::vector_slots`

```rust
pub fn vector_slots(ui: &mut egui::Ui, components: usize, draw_component: &mut dyn FnMut(&mut egui::Ui, usize));
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:1252`

Draws `components` slots across the width left in the row, each an axis
letter and the field `draw_component` draws.
