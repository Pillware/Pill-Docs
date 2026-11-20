<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1265"></a>

# Function `pill_engine_core::assets::metadata::parse_metadata`

```rust
pub(in assets::metadata) fn parse_metadata<T: ImportedAsset>(path: &std::path::Path, bytes: &[u8]) -> crate::asset::AssetLoadResult<StoredMetadata<<T as >::ImportSettings>>;
```

Visibility: `{'restricted': {'parent': 988, 'path': '::assets::metadata'}}` · Source: `engine\pill_engine_core\src\assets\metadata.rs:435`

Parse a metadata file for `T`.

The header is checked before the settings are read, so the error says what
is actually wrong: a newer format, another asset type, or settings that do
not fit this type. A missing `settings` object means "all defaults".
