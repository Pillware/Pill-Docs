<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-606"></a>

# Function `pill_engine_core::assets::import_registry::import_erased`

```rust
pub(in assets::import_registry) fn import_erased<T: ImportedAsset>(assets: &mut crate::asset::AssetManager, path: &std::path::Path, policy: crate::asset_metadata::MetadataPolicy) -> ErasedImportResult;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:334`

[`AssetManager::import`](../storage/struct.AssetManager.md#rustdoc-item-605) for `T`, with the type's default initial settings.
