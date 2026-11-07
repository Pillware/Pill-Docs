<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1474"></a>

# Type alias `pill_editor::runner::FileStamp`

```rust
pub(in runner) type FileStamp = pill_editor_core::state_watch::FileStamp;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3910`

A state file's metadata: what a frame compares to decide whether the file
needs reading at all.

The theme's layers keep their own stamps - they name a selection to
re-resolve rather than a document to read - and the rule itself lives in
[`pill_editor_core::state_watch`], where the two plain watchers share it.
