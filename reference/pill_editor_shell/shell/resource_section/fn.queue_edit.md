<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-385"></a>

# Function `pill_editor_shell::shell::resource_section::queue_edit`

```rust
pub fn queue_edit(pending: &mut PendingEditorCommands, view: &ResourceView, field: &ResourceFieldView, value: FieldValue);
```

Source: `editor\pill_editor_shell\src\shell\resource_section.rs:54`

Queues one field write as a recorded `SetResourceField`.
