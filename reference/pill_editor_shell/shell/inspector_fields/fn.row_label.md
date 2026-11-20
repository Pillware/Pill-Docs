<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-692"></a>

# Function `pill_editor_shell::shell::inspector_fields::row_label`

```rust
pub fn row_label(field: &str, details: &[EntityDetail], type_name: &str, index: usize, value: &FieldValue) -> String;
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:1091`

Returns the label a row draws, with a `(mixed)` mark when the selection
disagrees on its value.
