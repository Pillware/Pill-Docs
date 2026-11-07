<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1406"></a>

# Type alias `pill_engine_core::asset_import_registry::LoadedByNameFunction`

```rust
pub(in asset_import_registry) type LoadedByNameFunction = fn (_: &crate::asset::AssetManager, _: &str) -> Option<(u32, u32)>;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:212`

The handle the store holds an asset under a name, as its raw parts.
