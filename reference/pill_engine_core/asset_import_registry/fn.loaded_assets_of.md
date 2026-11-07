<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1498"></a>

# Function `pill_engine_core::asset_import_registry::loaded_assets_of`

```rust
pub(in asset_import_registry) fn loaded_assets_of<T>(assets: &crate::asset::AssetManager) -> Vec<(Option<crate::asset::AssetGuid>, String)> where T: Asset + TraitAccessible<dyn Asset>;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:416`

Every live `T` in the store, as its guid and its name.
