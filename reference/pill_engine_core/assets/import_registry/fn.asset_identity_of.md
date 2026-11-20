<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-609"></a>

# Function `pill_engine_core::assets::import_registry::asset_identity_of`

```rust
pub(in assets::import_registry) fn asset_identity_of<T>(assets: &crate::asset::AssetManager, index: u32, generation: u32) -> Option<AssetIdentity> where T: Asset + TraitAccessible<dyn Asset>;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:371`

The live asset a `T` handle with `index` and `generation` addresses, or
`None` when the handle is stale.
