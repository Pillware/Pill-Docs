<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-803"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::list_picker_width`

```rust
pub fn list_picker_width(ui: &egui::Ui, row_width: f32) -> f32;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:604`

Returns the width a list row's picker takes: the row's width less its label
column, the gap after it, its remove button and the spacing around them,
and never less than 60 points.

The trailing spacing is egui's own. A row's extent includes the gap its
last control leaves, so a row sized without it comes back one gap wider and
pushes every row below it out of the panel.
