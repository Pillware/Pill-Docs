<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4919"></a>

# Function `pill_engine_core::ecs::world::storage::clone_column`

```rust
pub(in ecs::world::storage) fn clone_column<T: Component + Clone>(source: &crate::archetype::ComponentColumn, destination: &mut crate::archetype::ComponentColumn) -> Result<(), ()>;
```

Visibility: `{'restricted': {'parent': 4920, 'path': '::ecs::world::storage'}}` · Source: `engine\pill_engine_core\src\ecs\world\storage.rs:140`

The clone function a `Clone` component's registration records.
