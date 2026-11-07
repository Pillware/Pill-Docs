<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-174"></a>

# Function `pill_editor_core::assets::queue_move`

```rust
pub fn queue_move(pending: &mut crate::commands::PendingEditorCommands, from: &str, to: &str);
```

Source: `editor\pill_editor_core\src\assets.rs:517`

Queues the recorded move of `from` to `to`.

The `.meta` sidecar travels with the file, so the loaded asset keeps its
handle and guid.
