<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1374"></a>

# Function `pill_engine_core::assets::standalone::document_to_json`

```rust
pub(in assets::standalone) fn document_to_json<T: StandaloneAsset>(path: &std::path::Path, document: &<T as >::Document) -> crate::asset::AssetLoadResult<serde_json::Value>;
```

Visibility: `{'restricted': {'parent': 1369, 'path': '::assets::standalone'}}` · Source: `engine\pill_engine_core\src\assets\standalone.rs:357`

Returns `document` as JSON, with `path` naming the asset in the error.

## Errors

[`AssetLoadError::Metadata`](../storage/enum.AssetLoadError.md#rustdoc-item-1297) when the document cannot be written as JSON.
