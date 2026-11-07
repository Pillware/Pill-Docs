<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-710"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_widgets::axis_slot`

```rust
pub fn axis_slot(ui: &mut egui::Ui, axis: usize);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_widgets.rs:196`

Draws the axis letter of one vector component in its fixed-width slot. The
slot keeps every component's editor the same width, whatever width its own
glyph takes.
