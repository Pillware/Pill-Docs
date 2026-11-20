<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-602"></a>

# Function `pill_engine_core::assets::import_registry::import_standalone_erased`

```rust
pub(in assets::import_registry) fn import_standalone_erased<T: StandaloneAsset>(assets: &mut crate::asset::AssetManager, path: &std::path::Path, _policy: crate::asset_metadata::MetadataPolicy) -> ErasedImportResult;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:298`

[`AssetManager::import_standalone`](../storage/struct.AssetManager.md#rustdoc-item-601) for `T`. The metadata policy does not
apply here, because importing a standalone file never writes a file.
