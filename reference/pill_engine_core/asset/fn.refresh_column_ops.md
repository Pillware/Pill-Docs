<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1060"></a>

# Function `pill_engine_core::asset::refresh_column_ops`

```rust
pub(in asset) fn refresh_column_ops<T>(columns: &mut trait_type_map::TraitTypeMap<dyn Asset, trait_type_map::ErasedVecFamily>, storage_key: std::any::TypeId) where T: Asset + TraitAccessible<dyn Asset>;
```

Visibility: `{'restricted': {'parent': 865, 'path': '::asset'}}` · Source: `engine\pill_engine_core\src\asset.rs:1370`

Rebuilds one asset type's function table from the code that is running now.

[`AssetManager::register`](struct.AssetManager.md#rustdoc-item-1077) records this function's address for each type. A
freshly loaded copy of the code calls it to point that type's column at its
own functions. Without that, the column would still call into the copy that
filled it and stop working once that copy is unloaded.
