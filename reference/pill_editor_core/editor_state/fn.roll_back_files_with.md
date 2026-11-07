<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3673"></a>

# Function `pill_editor_core::editor_state::roll_back_files_with`

```rust
pub(in editor_state) fn roll_back_files_with(paths: &[String], remove_file: &mut dyn FnMut(&str) -> std::io::Result<()>) -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 2404, 'path': '::editor_state'}}` · Source: `editor\pill_editor_core\src\editor_state\mod.rs:1270`

Same as [`roll_back_files`](fn.roll_back_files.md#rustdoc-item-3672) with a file remover the caller supplies, so the
failing branch can be tested without a permission change.
