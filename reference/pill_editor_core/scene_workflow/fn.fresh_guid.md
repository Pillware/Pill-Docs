<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8736"></a>

# Function `pill_editor_core::scene_workflow::fresh_guid`

```rust
pub(in scene_workflow) fn fresh_guid() -> Result<pill_engine::AssetGuid, String>;
```

Visibility: `{'restricted': {'parent': 8735, 'path': '::scene_workflow'}}` · Source: `editor\pill_editor_core\src\scene_workflow.rs:311`

A fresh guid for a scene file that does not exist yet.

## Errors

Returns an error when the platform random source cannot produce one.
