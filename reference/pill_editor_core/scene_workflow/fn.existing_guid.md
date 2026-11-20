<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8734"></a>

# Function `pill_editor_core::scene_workflow::existing_guid`

```rust
pub(in scene_workflow) fn existing_guid(engine: &mut pill_engine::Engine, path: &str) -> Option<pill_engine::AssetGuid>;
```

Visibility: `{'restricted': {'parent': 8735, 'path': '::scene_workflow'}}` · Source: `editor\pill_editor_core\src\scene_workflow.rs:298`

The guid the scene file at `path` already carries, or `None` when it cannot
be read.
