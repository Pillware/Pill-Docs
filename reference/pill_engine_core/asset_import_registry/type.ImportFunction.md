<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1391"></a>

# Type alias `pill_engine_core::asset_import_registry::ImportFunction`

```rust
pub(in asset_import_registry) type ImportFunction = fn (_: &mut crate::asset::AssetManager, _: &std::path::Path, _: crate::asset_metadata::MetadataPolicy) -> ErasedImportResult;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:185`

Import a path as one asset type.
