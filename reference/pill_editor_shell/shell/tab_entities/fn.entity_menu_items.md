<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-580"></a>

# Function `pill_editor_shell::shell::tab_entities::entity_menu_items`

```rust
pub fn entity_menu_items(ui: &mut egui::Ui, entity: Option<Entity>, selection: &EditorSelection, pending: &mut PendingEditorCommands);
```

Source: `editor\pill_editor_shell\src\shell\tab_entities.rs:93`

Adds the entity menu's rows to `ui` and queues the recorded edit of the one
that is clicked.

`entity` is the row the menu was opened on, or `None` for the strip below
the rows, where only New Entity is offered. Undo reverses either edit.
