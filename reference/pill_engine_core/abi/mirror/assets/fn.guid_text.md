<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-99"></a>

# Function `pill_engine_core::abi::mirror::assets::guid_text`

```rust
pub(in abi::mirror::assets) fn guid_text(guid: Option<crate::asset::AssetGuid>) -> String;
```

Visibility: `{'restricted': {'parent': 78, 'path': '::abi::mirror::assets'}}` · Source: `engine\pill_engine_core\src\abi\mirror.rs:943`

A guid as the string channel carries it: 32 hexadecimal digits, or the
empty string when the asset has none.
