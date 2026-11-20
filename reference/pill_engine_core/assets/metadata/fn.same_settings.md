<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1294"></a>

# Function `pill_engine_core::assets::metadata::same_settings`

```rust
pub(in assets::metadata) fn same_settings<T: ImportedAsset>(left: &<T as >::ImportSettings, right: &<T as >::ImportSettings) -> bool;
```

Visibility: `{'restricted': {'parent': 988, 'path': '::assets::metadata'}}` · Source: `engine\pill_engine_core\src\assets\metadata.rs:536`

Whether two settings values are the same, compared through their JSON form
so that `ImportSettings` need not implement `PartialEq`.
