<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-788"></a>

# Function `pill_editor_shell::shell::inspector_widgets::stretched_drag_value`

```rust
pub fn stretched_drag_value(ui: &mut egui::Ui, drag_value: egui::DragValue<'_>) -> egui::Response;
```

Source: `editor\pill_editor_shell\src\shell\inspector_widgets.rs:300`

Adds a drag value that spans the whole width left in the row, the way every
value field in the Inspector runs to the panel's right edge.

egui centres a drag value in a larger slot rather than stretching it; its
smallest width is the style's interact width, so the width is raised to the
room left for this one widget.
