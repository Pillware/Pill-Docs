<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-598"></a>

# Function `pill_editor_shell::shell::tab_inspector::entity_inspector`

```rust
pub fn entity_inspector(ui: &mut egui::Ui, snapshot: &EditorSnapshot, detail: &EntityDetail, pending: &mut PendingEditorCommands, overlay_regions: &mut Vec<ShellRect>, session: &mut InspectorSession);
```

Source: `editor\pill_editor_shell\src\shell\tab_inspector.rs:335`

Draws one entity's components as collapsible sections. Each one has a
header bar (a caret, the component's duotone icon and its label) that
toggles the section and opens the component menu on a right-click, then
the rows the inspector's row model asks for.
