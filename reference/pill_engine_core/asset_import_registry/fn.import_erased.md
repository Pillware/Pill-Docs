<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1491"></a>

# Function `pill_engine_core::asset_import_registry::import_erased`

```rust
pub(in asset_import_registry) fn import_erased<T: ImportedAsset>(assets: &mut crate::asset::AssetManager, path: &std::path::Path, policy: crate::asset_metadata::MetadataPolicy) -> ErasedImportResult;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:334`

[`AssetManager::import`](../asset/struct.AssetManager.md#rustdoc-item-1114) for `T`, with the type's default initial settings.
