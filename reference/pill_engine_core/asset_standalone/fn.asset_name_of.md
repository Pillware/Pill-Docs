<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2217"></a>

# Function `pill_engine_core::asset_standalone::asset_name_of`

```rust
pub(in asset_standalone) fn asset_name_of(path: &std::path::Path) -> Result<String, crate::asset::AssetLoadError>;
```

Visibility: `{'restricted': {'parent': 2216, 'path': '::asset_standalone'}}` · Source: `engine\pill_engine_core\src\asset_standalone.rs:303`

Returns `path` as an asset name, or the error an import reports for a path
that does not normalize.
