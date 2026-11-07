<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1497"></a>

# Function `pill_engine_core::asset_import_registry::handle_by_name_of`

```rust
pub(in asset_import_registry) fn handle_by_name_of<T>(assets: &crate::asset::AssetManager, name: &str) -> Option<(u32, u32)> where T: Asset + TraitAccessible<dyn Asset>;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:406`

The raw parts of the handle the store holds `T` under `name`, if any.
