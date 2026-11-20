<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-610"></a>

# Function `pill_engine_core::assets::import_registry::guid_by_path`

```rust
pub(in assets::import_registry) fn guid_by_path<T>(assets: &crate::asset::AssetManager, path: &std::path::Path) -> Option<crate::asset::AssetGuid> where T: Asset + TraitAccessible<dyn Asset>;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:384`

The guid a `T` is loaded under, addressed by its path's normalized name.
