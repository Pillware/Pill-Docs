<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6354"></a>

# Type alias `pill_engine_core::persistence::registry::SerializeComponentFn`

```rust
pub(crate) type SerializeComponentFn = fn (storage: &crate::archetype::ComponentColumns, index: usize) -> Option<Vec<u8>>;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\persistence\registry.rs:447`

Serializes the component at `index` in the given storage map into JSON
bytes, or `None` when the value cannot be serialized.

The signature could not be infallible: `serde_json::to_vec` can fail for a
user type. Migration reports such a failure as a skipped type instead of
aborting the reload.
