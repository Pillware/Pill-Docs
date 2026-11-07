<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1496"></a>

# Function `pill_engine_core::asset_import_registry::loaded_by_guid_of`

```rust
pub(in asset_import_registry) fn loaded_by_guid_of<T>(assets: &crate::asset::AssetManager, guid: crate::asset::AssetGuid) -> Option<(String, u32, u32)> where T: Asset + TraitAccessible<dyn Asset>;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:393`

The name a `T` with `guid` is loaded under, with the handle's raw parts.
