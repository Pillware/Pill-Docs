<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7850"></a>

# Function `pill_engine_core::scene::encode_field_value`

```rust
pub(in scene) fn encode_field_value(world: &crate::world::World, assets: &crate::asset::AssetManager, registry: &crate::asset_import_registry::ImportRegistry, field_value: &crate::component_field::FieldValue) -> Option<serde_json::Value>;
```

Visibility: `{'restricted': {'parent': 7769, 'path': '::scene'}}` · Source: `engine\pill_engine_core\src\scene.rs:238`

Returns one field value the way a scene document stores it, or `None` when
it has no saved form. That is a heap container, which the field layer
cannot read out, and a float JSON cannot hold (NaN or an infinity).

`Text` and `List` both return `None` for the same reason: the field layer
cannot write a heap-backed field, so a value saved here would never reach
a component on load.
