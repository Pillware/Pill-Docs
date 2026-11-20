<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-222"></a>

# Function `pill_editor_shell::shell::run_frame`

```rust
pub fn run_frame(state: &mut EguiShellState, shell_input: &EguiShellInput, frame: &mut EguiShellFrame, snapshot: &EditorSnapshot, selection: &mut EditorSelection, pending: &mut PendingEditorCommands, notices: &EditorNotices, panels: &PanelRegistry, panel_commands: &mut Vec<PanelCommand>, clipboard: &mut pill_editor_core::clipboard::EditorClipboard, popout_inputs: &pill_editor_core::boundary::EguiPopoutInputs);
```

Source: `editor\pill_editor_shell\src\shell.rs:498`

Runs one shell frame: the boundary input becomes egui input, the dock and
its tabs draw, and the result becomes the frame the executable draws. The
asset dialog, the menus, the toasts and the command palette are drawn over
the dock.
