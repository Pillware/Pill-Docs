<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-482"></a>

# Function `pill_editor_shell::shell::rows::label_cell`

```rust
pub fn label_cell(ui: &mut egui::Ui, label: &str, tooltip: Option<&str>) -> egui::Response;
```

Source: `editor\pill_editor_shell\src\shell\rows.rs:103`

Draws one row's label in the panel's label column
([`label_column_width`](fn.label_column_width.md#rustdoc-item-481)), left-aligned and cut off at its edge. `tooltip`
is shown while the pointer rests on it.
