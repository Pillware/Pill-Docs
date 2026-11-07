<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-441"></a>

# Function `pill_editor_shell_egui_editor::shell::settle::settle_pass`

```rust
pub fn settle_pass(dock: &mut pill_editor_core::layout::EditorDock, popout_contexts: &mut std::collections::BTreeMap<EditorTab, egui::Context>, popout_inputs: &pill_editor_core::boundary::EguiPopoutInputs, windows: &mut PanelWindowSession, window_ping: &mut Option<(u16, String)>, toasts: &mut ToastSession, panels: &PanelRegistry, frame_index: u64, viewer: &mut EditorTabViewer<'_>, shell_frame: EguiShellFrame) -> EguiShellFrame;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\settle.rs:93`

Finishes one shell pass: applies the requests it deferred and returns the
frame the pass produced.

The order of the steps is the contract; the module docs say why each step
sits where it does. `viewer` is the pass's own viewer: the popped-out
windows draw through it, so it is passed whole instead of field by field.
`frame_index` is the pass number a panel toast counts its lifetime from.
