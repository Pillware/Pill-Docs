<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1372"></a>

# Function `pill_engine_core::assets::standalone::normalize_standalone_document`

```rust
pub fn normalize_standalone_document<T: StandaloneAsset>(document_json: serde_json::Value) -> crate::asset::AssetLoadResult<serde_json::Value>;
```

Source: `engine\pill_engine_core\src\assets\standalone.rs:330`

Reads `document_json` as `T`'s document and returns it as JSON, with
missing fields set to their defaults and unknown ones dropped.

## Errors

[`AssetLoadError::Metadata`](../storage/enum.AssetLoadError.md#rustdoc-item-1297) when the value does not fit the document.
