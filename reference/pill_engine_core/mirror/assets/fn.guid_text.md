<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6100"></a>

# Function `pill_engine_core::mirror::assets::guid_text`

```rust
pub(in mirror::assets) fn guid_text(guid: Option<crate::asset::AssetGuid>) -> String;
```

Visibility: `{'restricted': {'parent': 6085, 'path': '::mirror::assets'}}` · Source: `engine\pill_engine_core\src\mirror.rs:943`

A guid as the string channel carries it: 32 hexadecimal digits, or the
empty string when the asset has none.
