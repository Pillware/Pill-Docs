<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-846"></a>

# Constant `pill_editor::runner::STATE_FILE_POLL_FRAMES`

```rust
pub(in runner) const STATE_FILE_POLL_FRAMES: u64 = pill_editor_core::state_watch::STATE_FILE_POLL_FRAMES;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:205`

Frames between unconditional re-reads of the editor's state files - the
theme's layers poll on it, and the watchers in
[`pill_editor_core::state_watch`] do.
