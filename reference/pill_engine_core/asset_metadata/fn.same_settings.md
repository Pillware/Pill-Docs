<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2147"></a>

# Function `pill_engine_core::asset_metadata::same_settings`

```rust
pub(in asset_metadata) fn same_settings<T: ImportedAsset>(left: &<T as >::ImportSettings, right: &<T as >::ImportSettings) -> bool;
```

Visibility: `{'restricted': {'parent': 1859, 'path': '::asset_metadata'}}` · Source: `engine\pill_engine_core\src\asset_metadata.rs:535`

Whether two settings values are the same, compared through their JSON form
so that `ImportSettings` need not implement `PartialEq`.
