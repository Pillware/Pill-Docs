<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-500"></a>

# Type alias `pill_engine_core::assets::import_registry::ImportFunction`

```rust
pub(in assets::import_registry) type ImportFunction = fn (_: &mut crate::asset::AssetManager, _: &std::path::Path, _: crate::asset_metadata::MetadataPolicy) -> ErasedImportResult;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:185`

Import a path as one asset type.
