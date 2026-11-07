<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4976"></a>

# Function `pill_editor_core::inspector::selection_entity_edit`

```rust
pub fn selection_entity_edit(targets: &[pill_engine::Entity], primary: pill_engine::Entity, component: &str, field: &str, reference: Option<pill_engine::Entity>) -> (Vec<crate::editor_state::EditorCommand>, String, String);
```

Source: `editor\pill_editor_core\src\inspector.rs:1024`

[`entity_edit`](fn.entity_edit.md#rustdoc-item-4975) for every entity of `targets`, as one recorded step labelled
and coalesced by the primary's edit, like [`selection_field_edit`](fn.selection_field_edit.md#rustdoc-item-4973).
