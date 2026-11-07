<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2118"></a>

# Function `pill_engine_core::asset_metadata::parse_metadata`

```rust
pub(in asset_metadata) fn parse_metadata<T: ImportedAsset>(path: &std::path::Path, bytes: &[u8]) -> crate::asset::AssetLoadResult<StoredMetadata<<T as >::ImportSettings>>;
```

Visibility: `{'restricted': {'parent': 1859, 'path': '::asset_metadata'}}` · Source: `engine\pill_engine_core\src\asset_metadata.rs:435`

Parse a metadata file for `T`.

The header is checked before the settings are read, so the error says what
is actually wrong: a newer format, another asset type, or settings that do
not fit this type. A missing `settings` object means "all defaults".
