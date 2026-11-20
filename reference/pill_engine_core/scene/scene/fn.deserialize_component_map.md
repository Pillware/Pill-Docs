<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7828"></a>

# Function `pill_engine_core::scene::scene::deserialize_component_map`

```rust
pub(in scene::scene) fn deserialize_component_map<'de, D>(deserializer: D) -> Result<std::collections::BTreeMap<String, std::collections::BTreeMap<String, serde_json::Value>>, <D as >::Error> where D: serde::Deserializer<'de>;
```

Visibility: `{'restricted': {'parent': 7827, 'path': '::scene::scene'}}` · Source: `engine\pill_engine_core\src\scene\scene.rs:90`

Reads an entity's component map with every component name in its current
form. When an older and a current spelling of one component both appear,
the first in name order is kept.
