<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1373"></a>

# Function `pill_engine_core::assets::standalone::default_standalone_document`

```rust
pub fn default_standalone_document<T: StandaloneAsset>() -> crate::asset::AssetLoadResult<serde_json::Value>;
```

Source: `engine\pill_engine_core\src\assets\standalone.rs:348`

Returns the document a newly created `T` file holds, as JSON, which is
`T::Document::default()`.

## Errors

When the default document cannot be written as JSON.
