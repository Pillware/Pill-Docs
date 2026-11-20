<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7067"></a>

# Function `pill_engine_core::reflection::component_field::codec::decode_scalar`

```rust
pub(in reflection::component_field) fn decode_scalar(bytes: &[u8], offset: usize, tag: &str) -> Option<super::FieldValue>;
```

Visibility: `{'restricted': {'parent': 5515, 'path': '::reflection::component_field'}}` · Source: `engine\pill_engine_core\src\reflection\component_field\codec.rs:237`

Decode one scalar from a byte buffer at `offset`.

Returns `None` when the tag is not a scalar, or when the buffer ends before
the value does.
