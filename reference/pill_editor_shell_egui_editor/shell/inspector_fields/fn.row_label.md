<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-667"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_fields::row_label`

```rust
pub fn row_label(field: &str, details: &[EntityDetail], type_name: &str, index: usize, value: &FieldValue) -> String;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_fields.rs:1040`

Returns the label a row draws, with a `(mixed)` mark when the selection
disagrees on its value.
