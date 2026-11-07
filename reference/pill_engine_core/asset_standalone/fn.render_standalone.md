<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2214"></a>

# Function `pill_engine_core::asset_standalone::render_standalone`

```rust
pub fn render_standalone<T: StandaloneAsset>(guid: crate::asset::AssetGuid, document: &<T as >::Document) -> crate::asset::AssetLoadResult<Vec<u8>>;
```

Source: `engine\pill_engine_core\src\asset_standalone.rs:266`

Returns the bytes of a standalone file for `T`, holding `guid` and
`document`.

## Errors

Returns [`AssetLoadError::Metadata`](../asset/enum.AssetLoadError.md#rustdoc-item-785) when the document cannot be written as
JSON.
