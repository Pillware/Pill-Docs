<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6359"></a>

# Function `pill_engine_core::persistence::registry::merge_json`

```rust
pub(in persistence) fn merge_json(base_json: serde_json::Value, override_json: serde_json::Value) -> serde_json::Value;
```

Visibility: `{'restricted': {'parent': 6349, 'path': '::persistence'}}` · Source: `engine\pill_engine_core\src\persistence\registry.rs:487`

Deep-merges two JSON values: `base_json` provides the defaults and
`override_json` the stored data. Fields present in `override_json` win;
fields only in `base_json` keep their default value.
