<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6698"></a>

# Function `pill_editor_core::scene_workflow::clear_world`

```rust
pub(in scene_workflow) fn clear_world(world: &mut pill_engine::World) -> usize;
```

Visibility: `{'restricted': {'parent': 6696, 'path': '::scene_workflow'}}` · Source: `editor\pill_editor_core\src\scene_workflow.rs:311`

Destroy every entity and return how many there were. A destroy that fails
is ignored.
