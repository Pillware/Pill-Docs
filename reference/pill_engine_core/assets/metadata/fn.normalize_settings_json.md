<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1298"></a>

# Function `pill_engine_core::assets::metadata::normalize_settings_json`

```rust
pub fn normalize_settings_json<T: ImportedAsset>(settings_document: serde_json::Value) -> crate::asset::AssetLoadResult<serde_json::Value>;
```

Source: `engine\pill_engine_core\src\assets\metadata.rs:1052`

Reads `settings_document` as `T`'s import settings and writes it back,
which fills every missing field with its default and drops unknown ones.

## Errors

Returns [`AssetLoadError::Metadata`](../storage/enum.AssetLoadError.md#rustdoc-item-1297) when `settings_document` does not fit
`T`'s settings.
