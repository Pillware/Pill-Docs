<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4992"></a>

# Function `pill_engine_core::ecs::world::storage::clone_resource`

```rust
pub(in ecs::world::storage) fn clone_resource<T: crate::resource::Resource + Clone>(source: &crate::resource::ErasedResource) -> Option<crate::resource::ErasedResource>;
```

Visibility: `{'restricted': {'parent': 4920, 'path': '::ecs::world::storage'}}` · Source: `engine\pill_engine_core\src\ecs\world\storage.rs:360`

The clone function a `Clone` resource's insertion records.
