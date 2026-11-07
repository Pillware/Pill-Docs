<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6697"></a>

# Function `pill_editor_core::scene_workflow::fresh_guid`

```rust
pub(in scene_workflow) fn fresh_guid() -> Result<pill_engine::AssetGuid, String>;
```

Visibility: `{'restricted': {'parent': 6696, 'path': '::scene_workflow'}}` · Source: `editor\pill_editor_core\src\scene_workflow.rs:305`

A fresh guid for a scene file that does not exist yet.

## Errors

Returns an error when the platform random source cannot produce one.
