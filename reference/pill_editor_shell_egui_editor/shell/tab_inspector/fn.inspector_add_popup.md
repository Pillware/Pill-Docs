<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-574"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_inspector::inspector_add_popup`

```rust
pub fn inspector_add_popup(ui: &mut egui::Ui, snapshot: &EditorSnapshot, detail: &EntityDetail, pending: &mut PendingEditorCommands, overlay_regions: &mut Vec<ShellRect>, session: &mut InspectorSession);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_inspector.rs:218`

Draws the Add Component popup, opened under the `+` button. It lists every
registered addable component the entity does not carry yet; a pick queues
the recorded `add {short}` step that the component menu and the scripted
channel also queue.
