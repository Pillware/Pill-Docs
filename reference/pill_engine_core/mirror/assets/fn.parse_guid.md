<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6099"></a>

# Function `pill_engine_core::mirror::assets::parse_guid`

```rust
pub(in mirror::assets) fn parse_guid(text: &str) -> MirrorResult<crate::asset::AssetGuid>;
```

Visibility: `{'restricted': {'parent': 6085, 'path': '::mirror::assets'}}` · Source: `engine\pill_engine_core\src\mirror.rs:937`

Parse a guid the managed side wrote as 32 hexadecimal digits.
