<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6357"></a>

# Type alias `pill_engine_core::persistence::registry::SerializeResourceFn`

```rust
pub type SerializeResourceFn = fn (world: &crate::world::World) -> Option<Vec<u8>>;
```

Source: `engine\pill_engine_core\src\persistence\registry.rs:471`

Serializes one registered resource out of the world into JSON bytes.

Returns `None` when the world holds no value for the resource, which is
different from an empty value: a resource that was never inserted has
nothing to record. The function takes the whole world rather than a value
because a resource is found by its id, and the `T` it is monomorphized for
supplies that id.
