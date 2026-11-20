<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-796"></a>

# Function `pill_editor_shell::shell::inspector_widgets::format_field_value`

```rust
pub fn format_field_value(value: &FieldValue) -> String;
```

Source: `editor\pill_editor_shell\src\shell\inspector_widgets.rs:447`

Returns a field value as display text. Kinds without their own formatting
fall back to their debug form.
