<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-793"></a>

# Function `pill_editor_shell::shell::inspector_widgets::scalar_edit`

```rust
pub fn scalar_edit(ui: &mut egui::Ui, value: &FieldValue) -> Option<FieldEditResponse>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_widgets.rs:365`

Draws the editor for one scalar field: a checkbox for a boolean, a drag
value for a number (drag to scrub, click to type). Returns `None` when the
kind has no editor, and the caller then draws the value as read-only text.
