<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6435"></a>

# Function `pill_engine_core::persistence::resources::serialize_resource`

```rust
pub(in persistence) fn serialize_resource<T>(world: &crate::world::World) -> Option<Vec<u8>> where T: Resource + Serialize;
```

Visibility: `{'restricted': {'parent': 6349, 'path': '::persistence'}}` · Source: `engine\pill_engine_core\src\persistence\resources.rs:463`

Serialize the live value of resource `T` as JSON.

Returns `None` when the world holds no value for `T`, or when the value
cannot be turned into JSON. A failed conversion is logged at warning level.
