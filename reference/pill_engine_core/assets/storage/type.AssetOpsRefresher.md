<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1691"></a>

# Type alias `pill_engine_core::assets::storage::AssetOpsRefresher`

```rust
pub(in assets::storage) type AssetOpsRefresher = fn (_: &mut trait_type_map::TraitTypeMap<dyn Asset, trait_type_map::ErasedVecFamily>, _: std::any::TypeId);
```

Visibility: `{'restricted': {'parent': 1503, 'path': '::assets::storage'}}` · Source: `engine\pill_engine_core\src\assets\storage.rs:617`

The function that refreshes one asset type's column, given its storage key;
see [`refresh_column_ops`](fn.refresh_column_ops.md#rustdoc-item-1690).
