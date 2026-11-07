<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3158"></a>

# Function `pill_engine_core::component_field::codec::decode_tagged`

```rust
pub(in component_field::codec) fn decode_tagged(bytes: &[u8], offset: usize, type_tag: &'static str, field_size: usize) -> super::FieldValue;
```

Visibility: `{'restricted': {'parent': 3089, 'path': '::component_field::codec'}}` · Source: `engine\pill_engine_core\src\component_field\codec.rs:418`

Decode one value of a tag from a row image.

A scalar tag decodes its scalar. A handle tag of [`HANDLE_SIZE`](constant.HANDLE_SIZE.md#rustdoc-item-3088) bytes
decodes an asset reference, and an entity tag of [`ENTITY_REFERENCE_SIZE`](constant.ENTITY_REFERENCE_SIZE.md#rustdoc-item-3090)
bytes decodes an entity reference. Any other tag is copied as an opaque
payload of `field_size` bytes.

`type_tag` is `'static` because every tag an `Opaque` value can carry comes
from a registered field layout (compile-time static data or a `Box::leak`ed
runtime string).
