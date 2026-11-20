<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5659"></a>

# Function `pill_engine_core::ecs::world::is_valid_foreign_layout`

```rust
pub(in ecs::world) fn is_valid_foreign_layout(size: usize, align: usize) -> bool;
```

Visibility: `{'restricted': {'parent': 4727, 'path': '::ecs::world'}}` · Source: `engine\pill_engine_core\src\ecs\world\mod.rs:1823`

Whether a size and alignment can describe a foreign resource's allocation.

A foreign resource is one that another language declares. Both
[`World::register_foreign_resource`](struct.World.md#rustdoc-item-5356) and
[`World::relayout_foreign_resource`](struct.World.md#rustdoc-item-5367) need this check, and keeping it in one
place means the two cannot disagree. If a declaration passed but its later
relayout did not, the world would hold a resource shape it can no longer
store.
