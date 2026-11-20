<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-701"></a>

# Function `pill_editor_shell::shell::inspector_fields::vector_row`

```rust
pub fn vector_row(ui: &mut egui::Ui, label: &str, tooltip: Option<&str>, components: usize, draw_component: &mut dyn FnMut(&mut egui::Ui, usize));
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:1222`

Draws a vector row: the label, then one axis letter and field per
component, the components sharing the control column equally.

When the control column is too narrow for every component to get
[`VECTOR_SLOT_MIN_WIDTH`](../tab_inspector/constant.VECTOR_SLOT_MIN_WIDTH.md#rustdoc-item-589), the components move to their own line under the
label and share the panel's whole width there, the way Unity lays out a
vector in a narrow Inspector. Nothing runs past the panel's edge either way.
`draw_component` draws component `index`'s field in the slot after its
letter.
