<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-786"></a>

# Function `pill_editor_shell::shell::inspector_widgets::axis_slot`

```rust
pub fn axis_slot(ui: &mut egui::Ui, axis: usize);
```

Source: `editor\pill_editor_shell\src\shell\inspector_widgets.rs:252`

Draws the axis letter of one vector component in its fixed-width slot. The
slot keeps every component's editor the same width, whatever width its own
glyph takes.
