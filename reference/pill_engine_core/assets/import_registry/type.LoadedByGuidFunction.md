<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-516"></a>

# Type alias `pill_engine_core::assets::import_registry::LoadedByGuidFunction`

```rust
pub(in assets::import_registry) type LoadedByGuidFunction = fn (_: &crate::asset::AssetManager, _: crate::asset::AssetGuid) -> Option<(String, u32, u32)>;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:210`

What the store holds for a guid: its name and the handle's raw parts.
