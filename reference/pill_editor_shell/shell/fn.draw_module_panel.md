<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1199"></a>

# Function `pill_editor_shell::shell::draw_module_panel`

```rust
pub fn draw_module_panel(argument_0: &mut EditorTabViewer<'_>, argument_1: &mut egui::Ui, argument_2: u16);
```

Source: `editor\pill_editor_shell\src\shell.rs:1105`

Runs one module panel's pass: check that its module is alive, draw the
panel, collect the window requests it made, and charge its draw time to the
panel budget.

The panel belongs to a module. Its draw function runs only while that
module's liveness marker is alive; when the marker is gone the tab says so
instead.
