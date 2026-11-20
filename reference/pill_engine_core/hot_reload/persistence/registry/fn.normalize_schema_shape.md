<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6928"></a>

# Function `pill_engine_core::hot_reload::persistence::registry::normalize_schema_shape`

```rust
pub(in hot_reload::persistence) fn normalize_schema_shape(value: &serde_json::Value) -> serde_json::Value;
```

Visibility: `{'restricted': {'parent': 5453, 'path': '::hot_reload::persistence'}}` · Source: `engine\pill_engine_core\src\hot_reload\persistence\registry.rs:539`

Builds a copy of a JSON tree in which every value is replaced by a marker
for its kind, such as `"number"` or `"string"`.

Hashing this copy instead of the original means that changing a default
value does not change the schema hash, while changing a field's kind does.
