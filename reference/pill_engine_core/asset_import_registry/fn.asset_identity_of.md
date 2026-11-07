<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1494"></a>

# Function `pill_engine_core::asset_import_registry::asset_identity_of`

```rust
pub(in asset_import_registry) fn asset_identity_of<T>(assets: &crate::asset::AssetManager, index: u32, generation: u32) -> Option<AssetIdentity> where T: Asset + TraitAccessible<dyn Asset>;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:371`

The live asset a `T` handle with `index` and `generation` addresses, or
`None` when the handle is stale.
