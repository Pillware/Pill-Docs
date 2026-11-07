<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4975"></a>

# Function `pill_editor_core::inspector::entity_edit`

```rust
pub fn entity_edit(entity: pill_engine::Entity, component: &str, field: &str, reference: Option<pill_engine::Entity>) -> (crate::editor_state::EditorCommand, String);
```

Source: `editor\pill_editor_core\src\inspector.rs:1005`

The recorded entity reference edit: `SetFieldEntity` under the field edit's
label (`set Component.field`).

`reference` is the entity to point at, and `None` clears the reference.
