<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-457"></a>

# Function `pill_editor_shell_egui_editor::shell::menus::component_menu_items`

```rust
pub fn component_menu_items(ui: &mut egui::Ui, snapshot: &EditorSnapshot, detail: &EntityDetail, current: Option<&str>, pending: &mut PendingEditorCommands);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\menus.rs:22`

Draws the component menu. When `current` names the heading's component, a
Remove row detaches it. The Add Component submenu lists every registered
component marked addable that the entity does not carry. Both picks go
through the shared `inspector` builders and are labelled `add {short}` /
`remove {short}`.
