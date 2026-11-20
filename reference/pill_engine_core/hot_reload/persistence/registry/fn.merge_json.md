<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6927"></a>

# Function `pill_engine_core::hot_reload::persistence::registry::merge_json`

```rust
pub(in hot_reload::persistence) fn merge_json(base_json: serde_json::Value, override_json: serde_json::Value) -> serde_json::Value;
```

Visibility: `{'restricted': {'parent': 5453, 'path': '::hot_reload::persistence'}}` · Source: `engine\pill_engine_core\src\hot_reload\persistence\registry.rs:506`

Deep-merges two JSON values: `base_json` provides the defaults and
`override_json` the stored data. Fields present in `override_json` win;
fields only in `base_json` keep their default value.
