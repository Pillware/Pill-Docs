<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3149"></a>

# Function `pill_engine_core::component_field::codec::encode_scalar`

```rust
pub(in component_field) fn encode_scalar(tag: &str, field_value: &super::FieldValue, encoded_bytes: &mut Vec<u8>) -> bool;
```

Visibility: `{'restricted': {'parent': 3105, 'path': '::component_field'}}` · Source: `engine\pill_engine_core\src\component_field\codec.rs:222`

Encode one scalar value into `encoded_bytes`, returning whether the tag
matched.
