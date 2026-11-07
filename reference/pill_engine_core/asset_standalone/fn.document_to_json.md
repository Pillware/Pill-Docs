<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2221"></a>

# Function `pill_engine_core::asset_standalone::document_to_json`

```rust
pub(in asset_standalone) fn document_to_json<T: StandaloneAsset>(path: &std::path::Path, document: &<T as >::Document) -> crate::asset::AssetLoadResult<serde_json::Value>;
```

Visibility: `{'restricted': {'parent': 2216, 'path': '::asset_standalone'}}` · Source: `engine\pill_engine_core\src\asset_standalone.rs:356`

Returns `document` as JSON, with `path` naming the asset in the error.

## Errors

[`AssetLoadError::Metadata`](../asset/enum.AssetLoadError.md#rustdoc-item-785) when the document cannot be written as JSON.
