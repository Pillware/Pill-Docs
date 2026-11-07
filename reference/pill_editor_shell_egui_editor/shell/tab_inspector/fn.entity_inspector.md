<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-576"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_inspector::entity_inspector`

```rust
pub fn entity_inspector(ui: &mut egui::Ui, snapshot: &EditorSnapshot, detail: &EntityDetail, pending: &mut PendingEditorCommands, overlay_regions: &mut Vec<ShellRect>, session: &mut InspectorSession);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_inspector.rs:319`

Draws one entity's components as collapsible sections. Each one has a
header bar (a caret, the component's duotone icon and its label) that
toggles the section and opens the component menu on a right-click, then
the rows the inspector's row model asks for.
