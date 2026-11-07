<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3677"></a>

# Function `pill_editor_core::editor_state::with_rollback_paths`

```rust
pub(in editor_state) fn with_rollback_paths(message: String, left_behind_paths: &[String]) -> String;
```

Visibility: `{'restricted': {'parent': 2404, 'path': '::editor_state'}}` · Source: `editor\pill_editor_core\src\editor_state\mod.rs:1297`

Extends a failed command's message with the paths its rollback left on
disk. The Console has to say what is still there, not only what failed.
