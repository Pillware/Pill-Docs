<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1489"></a>

# Function `pill_engine_core::asset_import_registry::import_standalone_erased`

```rust
pub(in asset_import_registry) fn import_standalone_erased<T: StandaloneAsset>(assets: &mut crate::asset::AssetManager, path: &std::path::Path, _policy: crate::asset_metadata::MetadataPolicy) -> ErasedImportResult;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:298`

[`AssetManager::import_standalone`](../asset/struct.AssetManager.md#rustdoc-item-1129) for `T`. The metadata policy does not
apply here, because importing a standalone file never writes a file.
