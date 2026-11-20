<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7826"></a>

# Type alias `pill_engine_core::scene::scene::ComponentMap`

```rust
pub(in scene::scene) type ComponentMap = std::collections::BTreeMap<String, std::collections::BTreeMap<String, serde_json::Value>>;
```

Visibility: `{'restricted': {'parent': 7827, 'path': '::scene::scene'}}` · Source: `engine\pill_engine_core\src\scene\scene.rs:85`

One entity's components as a scene document stores them: field values by
field name, by component name.
