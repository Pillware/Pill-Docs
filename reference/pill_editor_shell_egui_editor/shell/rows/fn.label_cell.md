<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-466"></a>

# Function `pill_editor_shell_egui_editor::shell::rows::label_cell`

```rust
pub fn label_cell(ui: &mut egui::Ui, label: &str, tooltip: Option<&str>) -> egui::Response;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\rows.rs:68`

Draws one row's label in the compact column, left-aligned and cut off at
[`ROW_LABEL_WIDTH`](constant.ROW_LABEL_WIDTH.md#rustdoc-item-462). `tooltip` is shown while the pointer rests on it.
