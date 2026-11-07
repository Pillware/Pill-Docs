<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9172"></a>

# Function `pill_engine_core::world::is_valid_foreign_layout`

```rust
pub(in world) fn is_valid_foreign_layout(size: usize, align: usize) -> bool;
```

Visibility: `{'restricted': {'parent': 8658, 'path': '::world'}}` · Source: `engine\pill_engine_core\src\world\mod.rs:1722`

Whether a size and alignment can describe a foreign resource's allocation.

A foreign resource is one that another language declares. Both
[`World::register_foreign_resource`](struct.World.md#rustdoc-item-9019) and
[`World::relayout_foreign_resource`](struct.World.md#rustdoc-item-9025) need this check, and keeping it in one
place means the two cannot disagree. If a declaration passed but its later
relayout did not, the world would hold a resource shape it can no longer
store.
