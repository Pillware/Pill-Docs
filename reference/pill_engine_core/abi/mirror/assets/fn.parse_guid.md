<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-97"></a>

# Function `pill_engine_core::abi::mirror::assets::parse_guid`

```rust
pub(in abi::mirror::assets) fn parse_guid(text: &str) -> MirrorResult<crate::asset::AssetGuid>;
```

Visibility: `{'restricted': {'parent': 78, 'path': '::abi::mirror::assets'}}` · Source: `engine\pill_engine_core\src\abi\mirror.rs:937`

Parse a guid the managed side wrote as 32 hexadecimal digits.
