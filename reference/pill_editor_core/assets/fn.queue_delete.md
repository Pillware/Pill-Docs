<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-172"></a>

# Function `pill_editor_core::assets::queue_delete`

```rust
pub fn queue_delete(pending: &mut crate::commands::PendingEditorCommands, path: &str);
```

Source: `editor\pill_editor_core\src\assets.rs:481`

Queues the recorded delete of `path`: the file and its `.meta` sidecar.
