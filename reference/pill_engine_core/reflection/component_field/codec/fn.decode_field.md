<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7076"></a>

# Function `pill_engine_core::reflection::component_field::codec::decode_field`

```rust
pub(in reflection::component_field) fn decode_field(bytes: &[u8], descriptor: &crate::component_registry::ComponentFieldDescriptor) -> super::FieldValue;
```

Visibility: `{'restricted': {'parent': 5515, 'path': '::reflection::component_field'}}` · Source: `engine\pill_engine_core\src\reflection\component_field\codec.rs:379`

Decode one field (scalar, whole array, heap container, or opaque) from a
row image.
