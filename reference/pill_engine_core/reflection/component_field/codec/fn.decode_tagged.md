<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7077"></a>

# Function `pill_engine_core::reflection::component_field::codec::decode_tagged`

```rust
pub(in reflection::component_field::codec) fn decode_tagged(bytes: &[u8], offset: usize, type_tag: &'static str, field_size: usize) -> super::FieldValue;
```

Visibility: `{'restricted': {'parent': 7007, 'path': '::reflection::component_field::codec'}}` · Source: `engine\pill_engine_core\src\reflection\component_field\codec.rs:461`

Decode one value of a tag from a row image.

A scalar tag decodes its scalar. A handle tag of [`HANDLE_SIZE`](constant.HANDLE_SIZE.md#rustdoc-item-7006) bytes
decodes an asset reference, and an entity tag of [`ENTITY_REFERENCE_SIZE`](constant.ENTITY_REFERENCE_SIZE.md#rustdoc-item-7008)
bytes decodes an entity reference. Any other tag is copied as an opaque
payload of `field_size` bytes.

`type_tag` is `'static` because every tag an `Opaque` value can carry comes
from a registered field layout (compile-time static data or a `Box::leak`ed
runtime string).
