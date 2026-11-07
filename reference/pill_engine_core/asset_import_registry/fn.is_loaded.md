<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1492"></a>

# Function `pill_engine_core::asset_import_registry::is_loaded`

```rust
pub(in asset_import_registry) fn is_loaded<T>(assets: &crate::asset::AssetManager, path: &std::path::Path) -> bool where T: crate::asset::Asset + trait_type_map::TraitAccessible<dyn crate::asset::Asset>;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:351`

Whether a `T` is loaded under `path`'s normalized name.
