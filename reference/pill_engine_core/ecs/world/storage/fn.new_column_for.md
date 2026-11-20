<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4923"></a>

# Function `pill_engine_core::ecs::world::storage::new_column_for`

```rust
pub(in ecs::world::storage) fn new_column_for(world: &crate::world::World, component_id: crate::component::ComponentId, source_column: &crate::archetype::ComponentColumn) -> Option<crate::archetype::ComponentColumn>;
```

Visibility: `{'restricted': {'parent': 4920, 'path': '::ecs::world::storage'}}` · Source: `engine\pill_engine_core\src\ecs\world\storage.rs:260`

Builds an empty column of the same kind as `source_column`.

`None` when the component id no longer has a storage factory: the column
outlived its registration, and only the retiring image's code could read it.
