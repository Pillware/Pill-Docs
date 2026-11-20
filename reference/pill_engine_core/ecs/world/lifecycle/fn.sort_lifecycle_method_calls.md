<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4790"></a>

# Function `pill_engine_core::ecs::world::lifecycle::sort_lifecycle_method_calls`

```rust
pub(in ecs::world::lifecycle) fn sort_lifecycle_method_calls(ordered: &mut [(i32, &String, crate::entity::Entity)]);
```

Visibility: `{'restricted': {'parent': 4789, 'path': '::ecs::world::lifecycle'}}` · Source: `engine\pill_engine_core\src\ecs\world\lifecycle.rs:322`

Sorts `(order, type name, entity)` triples the same way the pending events
are sorted, so every pass in a frame runs in one predictable sequence.
