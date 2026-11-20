<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-512"></a>

# Type alias `pill_engine_core::assets::import_registry::EnsureMetadataFunction`

```rust
pub(in assets::import_registry) type EnsureMetadataFunction = fn (_: &crate::asset::AssetManager, _: &std::path::Path) -> Result<Option<crate::asset::AssetGuid>, crate::asset_metadata::AssetImportError>;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:203`

Write a sourced asset's metadata file when it has none, and return the guid
it wrote, if any.
