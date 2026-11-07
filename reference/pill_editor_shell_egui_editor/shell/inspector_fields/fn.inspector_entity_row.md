<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-657"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_fields::inspector_entity_row`

```rust
pub fn inspector_entity_row(ui: &mut egui::Ui, row_input: EntityRowInput<'_>, pending: &mut PendingEditorCommands, session: &mut InspectorSession, overlay_regions: &mut Vec<ShellRect>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_fields.rs:730`

Draws one entity reference row.

The row is a button naming the referenced entity, which opens a picker over
the scene, a target button that arms a scene click, a clear button, and a
drop target for an entity dragged out of the Entities tab.

Every choice becomes one recorded `SetFieldEntity` step for the whole
selection. A reference whose entity is gone reads `(missing)` rather than
disappearing: the field still holds the handle, and hiding it would leave
the row looking unset while the stored bytes say otherwise.
