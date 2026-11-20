<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1367"></a>

# Function `pill_engine_core::assets::standalone::render_standalone`

```rust
pub fn render_standalone<T: StandaloneAsset>(guid: crate::asset::AssetGuid, document: &<T as >::Document) -> crate::asset::AssetLoadResult<Vec<u8>>;
```

Source: `engine\pill_engine_core\src\assets\standalone.rs:270`

Returns the bytes of a standalone file for `T`, holding `guid` and
`document`.

## Errors

Returns [`AssetLoadError::Metadata`](../storage/enum.AssetLoadError.md#rustdoc-item-1297) when the document cannot be written as
YAML.
