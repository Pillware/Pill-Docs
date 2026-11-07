<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1082"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_body`

```rust
pub fn tab_body(argument_0: &mut EditorTabViewer<'_>, argument_1: &mut egui::Ui, argument_2: EditorTab);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell.rs:941`

Draws one active tab's body and records how long it took.

Every tab is timed here because the Statistics tab exists to show
measurements, not estimates.
