<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1061"></a>

# Type alias `pill_engine_core::asset::AssetOpsRefresher`

```rust
pub(in asset) type AssetOpsRefresher = fn (_: &mut trait_type_map::TraitTypeMap<dyn Asset, trait_type_map::ErasedVecFamily>, _: std::any::TypeId);
```

Visibility: `{'restricted': {'parent': 865, 'path': '::asset'}}` · Source: `engine\pill_engine_core\src\asset.rs:617`

The function that refreshes one asset type's column, given its storage key;
see [`refresh_column_ops`](fn.refresh_column_ops.md#rustdoc-item-1060).
