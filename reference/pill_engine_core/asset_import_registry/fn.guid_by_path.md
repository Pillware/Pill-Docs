<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1495"></a>

# Function `pill_engine_core::asset_import_registry::guid_by_path`

```rust
pub(in asset_import_registry) fn guid_by_path<T>(assets: &crate::asset::AssetManager, path: &std::path::Path) -> Option<crate::asset::AssetGuid> where T: Asset + TraitAccessible<dyn Asset>;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:384`

The guid a `T` is loaded under, addressed by its path's normalized name.
