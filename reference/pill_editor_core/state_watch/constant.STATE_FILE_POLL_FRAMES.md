<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8047"></a>

# Constant `pill_editor_core::state_watch::STATE_FILE_POLL_FRAMES`

```rust
pub const STATE_FILE_POLL_FRAMES: u64 = 30;
```

Source: `editor\pill_editor_core\src\state_watch.rs:39`

The number of frames after which a state file is re-read even when its
stamp did not move.

A filesystem may report a modification time that changes less often than
the file does, so the stamp alone can miss an edit. This regular re-read
bounds how long the editor can miss it.
