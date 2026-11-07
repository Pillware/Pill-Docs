<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4990"></a>

# Function `pill_editor_core::inspector::resource_edit`

```rust
pub fn resource_edit(resource: &str, field: &str, value: pill_engine::FieldValue) -> (crate::editor_state::EditorCommand, String);
```

Source: `editor\pill_editor_core\src\inspector.rs:1252`

One recorded field write on an editor-editable resource.

The command is `SetResourceField`, labelled `set {resource}.{field}`. A
resource has no selection, so there is no per-entity batch here.
