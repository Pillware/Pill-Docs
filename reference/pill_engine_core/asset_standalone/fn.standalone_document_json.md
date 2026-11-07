<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2218"></a>

# Function `pill_engine_core::asset_standalone::standalone_document_json`

```rust
pub fn standalone_document_json<T: StandaloneAsset>(path: &std::path::Path) -> crate::asset::AssetLoadResult<serde_json::Value>;
```

Source: `engine\pill_engine_core\src\asset_standalone.rs:315`

Returns the document of the standalone file at `path`, as JSON.

## Errors

When the path does not normalize, the file cannot be read, or it is not a
`T`'s file.
