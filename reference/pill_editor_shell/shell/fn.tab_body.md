<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1189"></a>

# Function `pill_editor_shell::shell::tab_body`

```rust
pub fn tab_body(argument_0: &mut EditorTabViewer<'_>, argument_1: &mut egui::Ui, argument_2: EditorTab);
```

Source: `editor\pill_editor_shell\src\shell.rs:1022`

Draws one active tab's body and records how long it took.

Every tab is timed here because the Statistics tab exists to show
measurements, not estimates.
