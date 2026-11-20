<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-785"></a>

# Function `pill_editor_shell::shell::inspector_widgets::scalar_edit_decorated`

```rust
pub fn scalar_edit_decorated(ui: &mut egui::Ui, value: &FieldValue, widget: &inspector::FieldWidget) -> Option<FieldEditResponse>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_widgets.rs:196`

Draws the editor for one scalar field, as the widget the row model chose:
a slider over a `[Range]`, a drag value with a `[Min]` floor, and the plain
editor for every other kind.

A whole-number slider or floor runs through `f64` and is rounded back,
which is exact for the 8- to 32-bit kinds and precise to the float mantissa
above that.
