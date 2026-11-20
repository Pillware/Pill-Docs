<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4921"></a>

# Function `pill_engine_core::ecs::world::storage::copy_column_bytes`

```rust
pub(in ecs::world::storage) fn copy_column_bytes(source: &crate::archetype::ComponentColumn, destination: &mut crate::archetype::ComponentColumn) -> Result<(), ()>;
```

Visibility: `{'restricted': {'parent': 4920, 'path': '::ecs::world::storage'}}` · Source: `engine\pill_engine_core\src\ecs\world\storage.rs:153`

Copies a column whose rows own no heap data, byte for byte.
