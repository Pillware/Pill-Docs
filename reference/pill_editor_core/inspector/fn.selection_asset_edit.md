<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4974"></a>

# Function `pill_editor_core::inspector::selection_asset_edit`

```rust
pub fn selection_asset_edit(targets: &[pill_engine::Entity], primary: pill_engine::Entity, component: &str, field: &str, reference: Option<String>) -> (Vec<crate::editor_state::EditorCommand>, String, String);
```

Source: `editor\pill_editor_core\src\inspector.rs:989`

[`asset_edit`](fn.asset_edit.md#rustdoc-item-4972) for every entity of `targets`, as one recorded step labelled
and coalesced by the primary's edit, like [`selection_field_edit`](fn.selection_field_edit.md#rustdoc-item-4973).
