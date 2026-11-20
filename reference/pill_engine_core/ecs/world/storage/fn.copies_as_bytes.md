<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4924"></a>

# Function `pill_engine_core::ecs::world::storage::copies_as_bytes`

```rust
pub(in ecs::world::storage) fn copies_as_bytes(world: &crate::world::World, component_id: crate::component::ComponentId) -> bool;
```

Visibility: `{'restricted': {'parent': 4920, 'path': '::ecs::world::storage'}}` · Source: `engine\pill_engine_core\src\ecs\world\storage.rs:280`

Whether a column's rows may be copied byte for byte.

True for a foreign (descriptor) column, whose rows are plain data by
construction, and for a native type that declared a field layout with no
container field. A byte copy of a type that owns heap data would free the
same buffer twice, so a type without a layout is not copied that way.
