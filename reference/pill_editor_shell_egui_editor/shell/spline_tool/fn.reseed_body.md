<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-372"></a>

# Function `pill_editor_shell_egui_editor::shell::spline_tool::reseed_body`

```rust
pub fn reseed_body(ui: &mut egui::Ui, context: &mut PanelContext<'_>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\spline_tool.rs:230`

Draws the re-seed confirmation's body.

The shell draws the window's buttons and reads Enter and Escape. This body
states the question and the entity it applies to.
