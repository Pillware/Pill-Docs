<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-566"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_preferences::preferences_tab`

```rust
pub fn preferences_tab(argument_0: &mut egui::Ui, argument_1: &EditorSnapshot, argument_2: &mut Option<preferences::PreferencesDraft>, argument_3: &mut PendingEditorCommands);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_preferences.rs:30`

Draws the Preferences tab: the editor-wide rows, then the project's name,
its remembered and active gizmo settings and the buttons that change the
gizmo.

The rows start from the text in the preferences file. Save queues one
read-modify-write batch holding every row, and Cancel drops the edits, so
the next frame starts from the file again. The gizmo buttons queue the same
`SetGizmoTool` commands the shortcuts, the menus and the scripted channel
queue.
