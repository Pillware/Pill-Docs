<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1401"></a>

# Type alias `pill_engine_core::asset_import_registry::EnsureMetadataFunction`

```rust
pub(in asset_import_registry) type EnsureMetadataFunction = fn (_: &crate::asset::AssetManager, _: &std::path::Path) -> Result<Option<crate::asset::AssetGuid>, crate::asset_metadata::AssetImportError>;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:203`

Write a sourced asset's metadata file when it has none, and return the guid
it wrote, if any.
