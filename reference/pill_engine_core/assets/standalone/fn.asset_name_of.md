<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1370"></a>

# Function `pill_engine_core::assets::standalone::asset_name_of`

```rust
pub(in assets::standalone) fn asset_name_of(path: &std::path::Path) -> Result<String, crate::asset::AssetLoadError>;
```

Visibility: `{'restricted': {'parent': 1369, 'path': '::assets::standalone'}}` · Source: `engine\pill_engine_core\src\assets\standalone.rs:304`

Returns `path` as an asset name, or the error an import reports for a path
that does not normalize.
