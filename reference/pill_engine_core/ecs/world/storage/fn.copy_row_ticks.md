<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4922"></a>

# Function `pill_engine_core::ecs::world::storage::copy_row_ticks`

```rust
pub(in ecs::world::storage) fn copy_row_ticks(source: &crate::archetype::ComponentColumn, destination: &mut crate::archetype::ComponentColumn, index: usize);
```

Visibility: `{'restricted': {'parent': 4920, 'path': '::ecs::world::storage'}}` · Source: `engine\pill_engine_core\src\ecs\world\storage.rs:169`

Puts the source's change-detection ticks on the row just pushed.

The ticks travel with the storage, so a copy leaves change detection where
the original had it.
