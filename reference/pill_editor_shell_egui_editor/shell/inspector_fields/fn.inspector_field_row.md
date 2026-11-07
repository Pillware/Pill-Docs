<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-653"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_fields::inspector_field_row`

```rust
pub fn inspector_field_row(ui: &mut egui::Ui, entity: Entity, component: &ComponentView, row: &inspector::FieldRow, logged: &mut inspector::RowLogged, targets: &[Entity], details: &[EntityDetail], assets: &[AssetListing], engine_assets: &[EngineAsset], scene: &[EntityListEntry], pending: &mut PendingEditorCommands, session: &mut InspectorSession, overlay_regions: &mut Vec<ShellRect>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_fields.rs:128`

Draws one row of a component section.

The row comes from the Inspector's row model: a separator line or gap a
field's decorators declared, one field with its widget, a vector row
(side-by-side fields with axis labels in the gizmo's colours), or a value
shown read-only.
