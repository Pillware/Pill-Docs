<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-792"></a>

# Function `pill_editor_shell::shell::inspector_widgets::integer_edit`

```rust
pub fn integer_edit(ui: &mut egui::Ui, number: &Number, range: Option<(f32, f32)>, floor: Option<f32>) -> Option<FieldEditResponse>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_widgets.rs:327`

Draws the whole-number editor for `number`: a slider over `range`, or a
drag value with `floor`. Both are clamped to the kind's own bounds.
