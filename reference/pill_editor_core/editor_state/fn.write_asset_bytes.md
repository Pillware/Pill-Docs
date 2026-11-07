<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3671"></a>

# Function `pill_editor_core::editor_state::write_asset_bytes`

```rust
pub(in editor_state) fn write_asset_bytes(file_path: &std::path::Path, bytes: &[u8]) -> Result<(), String>;
```

Visibility: `{'restricted': {'parent': 2404, 'path': '::editor_state'}}` · Source: `editor\pill_editor_core\src\editor_state\mod.rs:1236`

Writes `bytes` to `file_path` through a temporary file beside it, so a
reader never sees a half-written file. The parent directory is created when
it is missing.
