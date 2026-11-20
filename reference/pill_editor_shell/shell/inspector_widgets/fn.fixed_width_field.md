<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-787"></a>

# Function `pill_editor_shell::shell::inspector_widgets::fixed_width_field`

```rust
pub fn fixed_width_field(ui: &mut egui::Ui, value: &FieldValue, widget: Option<&inspector::FieldWidget>) -> Option<FieldEditResponse>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_widgets.rs:273`

Draws the editor for one vector component at the width left in its group.
The width is claimed exactly, and anything the editor paints past it - a
long value, the part of a drag value you drag - is cropped instead of
widening the row. Every component of a vector therefore keeps the same
width, whatever its value.

The crop is the child `Ui`'s clip rectangle. It also limits where the child
responds to the pointer, so a press past the field's edge never reaches
this editor. `widget` is the decorator the row model chose, or `None` for
the plain editor.
