<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1493"></a>

# Function `pill_engine_core::asset_import_registry::remove_loaded`

```rust
pub(in asset_import_registry) fn remove_loaded<T>(assets: &mut crate::asset::AssetManager, path: &std::path::Path) -> bool where T: crate::asset::Asset + trait_type_map::TraitAccessible<dyn crate::asset::Asset>;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:359`

Drop the `T` loaded under `path`'s normalized name, if any.
