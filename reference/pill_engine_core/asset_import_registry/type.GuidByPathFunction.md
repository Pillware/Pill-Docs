<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1404"></a>

# Type alias `pill_engine_core::asset_import_registry::GuidByPathFunction`

```rust
pub(in asset_import_registry) type GuidByPathFunction = fn (_: &crate::asset::AssetManager, _: &std::path::Path) -> Option<crate::asset::AssetGuid>;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:208`

The guid the store holds a path's asset under, when it is loaded.
