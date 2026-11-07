<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2149"></a>

# Function `pill_engine_core::asset_metadata::settings_json_for`

```rust
pub fn settings_json_for<T: ImportedAsset>(path: &std::path::Path) -> crate::asset::AssetLoadResult<serde_json::Value>;
```

Source: `engine\pill_engine_core\src\asset_metadata.rs:1035`

Returns the import settings `T` would use for the source at `path`, as
JSON: the metadata file's, or the type's defaults when there is none.

For code that edits settings without knowing `T` (an editor's inspector),
reached through the import registry.

## Errors

Returns an [`AssetLoadError`](../asset/enum.AssetLoadError.md#rustdoc-item-789) when the path does not normalize, or its
metadata file exists but cannot be read as `T`'s.
