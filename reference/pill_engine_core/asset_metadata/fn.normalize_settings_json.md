<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2150"></a>

# Function `pill_engine_core::asset_metadata::normalize_settings_json`

```rust
pub fn normalize_settings_json<T: ImportedAsset>(settings_document: serde_json::Value) -> crate::asset::AssetLoadResult<serde_json::Value>;
```

Source: `engine\pill_engine_core\src\asset_metadata.rs:1054`

Reads `settings_document` as `T`'s import settings and writes it back,
which fills every missing field with its default and drops unknown ones.

## Errors

Returns [`AssetLoadError::Metadata`](../asset/enum.AssetLoadError.md#rustdoc-item-785) when `settings_document` does not fit
`T`'s settings.
