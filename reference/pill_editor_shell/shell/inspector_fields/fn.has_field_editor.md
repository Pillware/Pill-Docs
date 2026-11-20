<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-700"></a>

# Function `pill_editor_shell::shell::inspector_fields::has_field_editor`

```rust
pub fn has_field_editor(value: &FieldValue) -> bool;
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:1195`

Returns whether a field's value has an editor in the Inspector: every
scalar kind and every declared enum. Any other kind is shown as text.
