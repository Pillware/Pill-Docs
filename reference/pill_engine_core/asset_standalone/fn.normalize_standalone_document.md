<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2219"></a>

# Function `pill_engine_core::asset_standalone::normalize_standalone_document`

```rust
pub fn normalize_standalone_document<T: StandaloneAsset>(document_json: serde_json::Value) -> crate::asset::AssetLoadResult<serde_json::Value>;
```

Source: `engine\pill_engine_core\src\asset_standalone.rs:329`

Reads `document_json` as `T`'s document and returns it as JSON, with
missing fields set to their defaults and unknown ones dropped.

## Errors

[`AssetLoadError::Metadata`](../asset/enum.AssetLoadError.md#rustdoc-item-785) when the value does not fit the document.
