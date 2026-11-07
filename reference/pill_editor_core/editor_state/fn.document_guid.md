<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3669"></a>

# Function `pill_editor_core::editor_state::document_guid`

```rust
pub(in editor_state) fn document_guid(bytes: &[u8]) -> Option<pill_engine::AssetGuid>;
```

Visibility: `{'restricted': {'parent': 2404, 'path': '::editor_state'}}` · Source: `editor\pill_editor_core\src\editor_state\mod.rs:1228`

Returns the guid a standalone asset's own header holds, when its bytes are a
document and the guid parses.
