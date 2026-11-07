<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3150"></a>

# Function `pill_engine_core::component_field::codec::decode_scalar`

```rust
pub(in component_field) fn decode_scalar(bytes: &[u8], offset: usize, tag: &str) -> Option<super::FieldValue>;
```

Visibility: `{'restricted': {'parent': 3105, 'path': '::component_field'}}` · Source: `engine\pill_engine_core\src\component_field\codec.rs:234`

Decode one scalar from a byte buffer at `offset`.

Returns `None` when the tag is not a scalar, or when the buffer ends before
the value does.
