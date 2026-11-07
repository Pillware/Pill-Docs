<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4971"></a>

# Function `pill_editor_core::inspector::field_edit`

```rust
pub fn field_edit(entity: pill_engine::Entity, component: &str, field: &str, value: pill_engine::FieldValue) -> (crate::editor_state::EditorCommand, String);
```

Source: `editor\pill_editor_core\src\inspector.rs:948`

The recorded whole-field edit: `SetField` labelled `set {short}.{field}`.
