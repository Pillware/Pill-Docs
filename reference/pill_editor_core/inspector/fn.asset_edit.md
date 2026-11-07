<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4972"></a>

# Function `pill_editor_core::inspector::asset_edit`

```rust
pub fn asset_edit(entity: pill_engine::Entity, component: &str, field: &str, reference: Option<String>) -> (crate::editor_state::EditorCommand, String);
```

Source: `editor\pill_editor_core\src\inspector.rs:970`

The recorded asset reference edit: `SetFieldAsset` under the field edit's
label (`set Component.field`).

`reference` is a path relative to `res`, a guid, or the name the asset was
added to the store under. `None` clears the reference.
