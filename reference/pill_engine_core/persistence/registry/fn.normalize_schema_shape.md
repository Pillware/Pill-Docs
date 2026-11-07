<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6360"></a>

# Function `pill_engine_core::persistence::registry::normalize_schema_shape`

```rust
pub(in persistence) fn normalize_schema_shape(value: &serde_json::Value) -> serde_json::Value;
```

Visibility: `{'restricted': {'parent': 6349, 'path': '::persistence'}}` · Source: `engine\pill_engine_core\src\persistence\registry.rs:520`

Builds a copy of a JSON tree in which every value is replaced by a marker
for its kind, such as `"number"` or `"string"`.

Hashing this copy instead of the original means that changing a default
value does not change the schema hash, while changing a field's kind does.
