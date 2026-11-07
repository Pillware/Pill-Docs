<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2148"></a>

# Function `pill_engine_core::asset_metadata::render_metadata`

```rust
pub(in asset_metadata) fn render_metadata<T: ImportedAsset>(path: &std::path::Path, guid: crate::asset::AssetGuid, settings: &<T as >::ImportSettings) -> crate::asset::AssetLoadResult<Vec<u8>>;
```

Visibility: `{'restricted': {'parent': 1859, 'path': '::asset_metadata'}}` · Source: `engine\pill_engine_core\src\asset_metadata.rs:545`

Returns the bytes of a metadata file for `T` holding `guid` and `settings`.
