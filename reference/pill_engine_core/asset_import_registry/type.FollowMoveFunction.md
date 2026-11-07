<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1399"></a>

# Type alias `pill_engine_core::asset_import_registry::FollowMoveFunction`

```rust
pub(in asset_import_registry) type FollowMoveFunction = fn (_: &mut crate::asset::AssetManager, _: &std::path::Path) -> Result<Option<String>, crate::asset_metadata::AssetImportError>;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:198`

Follow a source that was moved together with its metadata file, and return
the name it had before the move, if any.
