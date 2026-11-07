<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4983"></a>

# Function `pill_editor_core::inspector::element_edit`

```rust
pub fn element_edit(entity: pill_engine::Entity, component: &str, field: &str, index: usize, value: pill_engine::FieldValue) -> (crate::editor_state::EditorCommand, String);
```

Source: `editor\pill_editor_core\src\inspector.rs:1132`

The recorded array-element edit: `SetArrayElement` labelled
`set {short}[{index}].{field}`.
