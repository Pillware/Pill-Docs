<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1295"></a>

# Function `pill_engine_core::assets::metadata::render_metadata`

```rust
pub(in assets::metadata) fn render_metadata<T: ImportedAsset>(path: &std::path::Path, guid: crate::asset::AssetGuid, settings: &<T as >::ImportSettings) -> crate::asset::AssetLoadResult<Vec<u8>>;
```

Visibility: `{'restricted': {'parent': 988, 'path': '::assets::metadata'}}` · Source: `engine\pill_engine_core\src\assets\metadata.rs:546`

Returns the bytes of a metadata file for `T` holding `guid` and `settings`.
