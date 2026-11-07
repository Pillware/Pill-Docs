<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1396"></a>

# Type alias `pill_engine_core::asset_import_registry::NormalizeSettingsFunction`

```rust
pub(in asset_import_registry) type NormalizeSettingsFunction = fn (_: serde_json::Value) -> crate::asset::AssetLoadResult<serde_json::Value>;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:191`

Settings JSON checked against the type and normalized.
