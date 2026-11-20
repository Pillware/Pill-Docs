<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-613"></a>

# Function `pill_engine_core::assets::import_registry::loaded_assets_of`

```rust
pub(in assets::import_registry) fn loaded_assets_of<T>(assets: &crate::asset::AssetManager) -> Vec<(Option<crate::asset::AssetGuid>, String)> where T: Asset + TraitAccessible<dyn Asset>;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:416`

Every live `T` in the store, as its guid and its name.
