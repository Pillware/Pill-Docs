<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6436"></a>

# Function `pill_engine_core::persistence::resources::restore_resource`

```rust
pub(in persistence) fn restore_resource<T>(world: &mut crate::world::World, bytes: &[u8]) -> bool where T: Resource + Serialize + DeserializeOwned + Default;
```

Visibility: `{'restricted': {'parent': 6349, 'path': '::persistence'}}` · Source: `engine\pill_engine_core\src\persistence\resources.rs:491`

Rebuild resource `T` from JSON and insert it into the world.

The snapshot payload is merged over a default instance, so a field added
since the snapshot arrives with its default value and a field removed since
is ignored. That is the same name-matched reconciliation
[`deserialize_component`](../components/fn.deserialize_component.md#rustdoc-item-6350) performs, and it is why a reshaped resource keeps
the parts of its value that still mean something.

Returns `false` when the payload is not JSON, when `T::default()` cannot be
turned into JSON, or when the merged value does not deserialize into `T`. A
parse or deserialize failure is logged at warning level, and the world keeps
the value it already had.
