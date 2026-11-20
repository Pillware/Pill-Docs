<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7066"></a>

# Function `pill_engine_core::reflection::component_field::codec::encode_scalar`

```rust
pub(in reflection::component_field) fn encode_scalar(tag: &str, field_value: &super::FieldValue, encoded_bytes: &mut Vec<u8>) -> bool;
```

Visibility: `{'restricted': {'parent': 5515, 'path': '::reflection::component_field'}}` · Source: `engine\pill_engine_core\src\reflection\component_field\codec.rs:225`

Encode one scalar value into `encoded_bytes`, returning whether the tag
matched.
