<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-595"></a>

# Function `pill_editor_shell::shell::tab_inspector::inspector_header`

```rust
pub fn inspector_header(ui: &mut egui::Ui, snapshot: &EditorSnapshot, detail: &EntityDetail, pending: &mut PendingEditorCommands, overlay_regions: &mut Vec<ShellRect>, session: &mut InspectorSession);
```

Source: `editor\pill_editor_shell\src\shell\tab_inspector.rs:182`

Draws the Inspector's top row: the selected entity's name, and the Add
Component button aligned to the right. The button opens and closes the
popup that lists the components it can attach.
