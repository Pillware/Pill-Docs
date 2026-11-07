<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-173"></a>

# Function `pill_editor_core::assets::queue_write_meta`

```rust
pub fn queue_write_meta(pending: &mut crate::commands::PendingEditorCommands, path: &str);
```

Source: `editor\pill_editor_core\src\assets.rs:498`

Queues the recorded `.meta` write for `path`, which gives a sourced file the
sidecar it is missing.
