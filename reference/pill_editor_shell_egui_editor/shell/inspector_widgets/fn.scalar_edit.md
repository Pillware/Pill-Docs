<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-714"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_widgets::scalar_edit`

```rust
pub fn scalar_edit(ui: &mut egui::Ui, value: &FieldValue) -> Option<FieldValue>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_widgets.rs:289`

Draws the editor for one scalar field: a checkbox for a boolean, a drag
value for a number (drag to scrub, click to type). Returns `None` when the
kind has no editor, and the caller then draws the value as read-only text.
