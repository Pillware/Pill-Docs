<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-458"></a>

# Function `pill_editor_shell_egui_editor::shell::menus::scene_context_menu`

```rust
pub fn scene_context_menu(argument_0: &mut EditorTabViewer<'_>, argument_1: &mut egui::Ui);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\menus.rs:69`

Draws the scene viewport's context menu: the three transform tools,
snapping, the two spaces and the scene grid. A row shows as active when the
snapshot's settings say so. A click queues a `SetGizmoTool` edit for a tool,
a space or snapping, and a `SetGrid` edit for the grid.
