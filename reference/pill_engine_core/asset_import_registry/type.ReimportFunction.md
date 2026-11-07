<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1394"></a>

# Type alias `pill_engine_core::asset_import_registry::ReimportFunction`

```rust
pub(in asset_import_registry) type ReimportFunction = fn (_: &mut crate::asset::AssetManager, _: &std::path::Path) -> ErasedImportResult;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:187`

Decode a loaded path again, in place.
