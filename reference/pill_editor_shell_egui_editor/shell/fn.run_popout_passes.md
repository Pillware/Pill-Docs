<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1089"></a>

# Function `pill_editor_shell_egui_editor::shell::run_popout_passes`

```rust
pub fn run_popout_passes(dock: &mut pill_editor_core::layout::EditorDock, contexts: &mut std::collections::BTreeMap<EditorTab, egui::Context>, inputs: &pill_editor_core::boundary::EguiPopoutInputs, viewer: &mut EditorTabViewer<'_>) -> Vec<pill_editor_core::boundary::PopoutFrame>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell.rs:801`

Runs one egui pass for each popped-out tab.

Every popped-out window has its own context, so it draws on its own, after
the dock pass in the main window. The data and the viewer code are the same;
the widget state and the input record are the window's own. The tab body is
the same `TabViewer::ui` implementation the dock calls, which is what keeps
a tab looking and behaving the same in a window and in the dock.

`dock.popouts()` holds the tabs that are *not* in the dock tree, so nothing
is drawn twice. The viewer's viewport rectangles are reset for each pass: a
popped-out Scene tab reports its rectangle in its own window's coordinates,
and the frontend places that view's surface there.
