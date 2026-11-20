<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6920"></a>

# Function `pill_engine_core::hot_reload::persistence::components::deserialize_component`

```rust
pub(in hot_reload::persistence) fn deserialize_component<T>(bytes: &[u8]) -> Option<Box<dyn Component>> where T: Component + Serialize + DeserializeOwned + Default + 'static;
```

Visibility: `{'restricted': {'parent': 5453, 'path': '::hot_reload::persistence'}}` · Source: `engine\pill_engine_core\src\hot_reload\persistence\components.rs:400`

Deserialize JSON bytes into a heap-allocated component.

If the schema changed, for example when a field was added, missing fields
take their value from `T::default()`: the default JSON is merged with the
snapshot JSON before deserializing. A field that no longer exists in the
struct is ignored.

Returns `None` when the bytes or the default instance cannot be turned into
JSON, or when the merged value does not deserialize into `T` - for example
when a field's type changed.
