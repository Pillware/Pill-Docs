<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1205"></a>

# Function `pill_editor_shell::egui_shell_update`

```rust
pub fn egui_shell_update(resources: (pill_engine::ResMut<'_, pill_editor_core::session::EguiShellState>, pill_engine::ResMut<'_, pill_editor_core::boundary::EguiShellInput>, pill_engine::ResMut<'_, pill_editor_core::boundary::EguiShellFrame>, (pill_engine::Res<'_, pill_editor_core::editor_state::EditorSnapshot>, pill_engine::ResMut<'_, pill_editor_core::editor_state::EditorSelection>, pill_engine::Res<'_, pill_editor_core::notices::EditorNotices>), (pill_engine::ResMut<'_, pill_editor_core::commands::PendingEditorCommands>, pill_engine::Res<'_, pill_editor_core::panels::PanelRegistry>, pill_engine::ResMut<'_, pill_editor_core::panels::PanelCommands>, pill_engine::ResMut<'_, pill_editor_core::clipboard::EditorClipboard>), pill_engine::Res<'_, pill_editor_core::boundary::EguiPopoutInputs>));
```

Source: `editor\pill_editor_shell\src\pill_editor_shell.rs:186`

Runs one egui pass: the dock and its tabs, then the frame the executable
draws.

The system runs inside the host's frame, between the executable queueing
its input and the presentation. Before the frame, the executable writes
[`EguiShellInput`]: geometry, focus and the events of the editor's own
windows. After it, it drains [`EguiShellFrame`].
