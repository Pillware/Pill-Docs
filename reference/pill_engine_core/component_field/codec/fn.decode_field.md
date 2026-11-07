<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3157"></a>

# Function `pill_engine_core::component_field::codec::decode_field`

```rust
pub(in component_field) fn decode_field(bytes: &[u8], descriptor: &crate::component_registry::ComponentFieldDescriptor) -> super::FieldValue;
```

Visibility: `{'restricted': {'parent': 3105, 'path': '::component_field'}}` · Source: `engine\pill_engine_core\src\component_field\codec.rs:336`

Decode one field (scalar, whole array, heap container, or opaque) from a
row image.
