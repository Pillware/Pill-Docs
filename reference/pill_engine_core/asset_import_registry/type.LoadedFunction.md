<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1407"></a>

# Type alias `pill_engine_core::asset_import_registry::LoadedFunction`

```rust
pub(in asset_import_registry) type LoadedFunction = fn (_: &crate::asset::AssetManager) -> Vec<(Option<crate::asset::AssetGuid>, String)>;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:214`

Every live asset of the type, as its guid and its name.
