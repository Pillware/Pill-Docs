<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7068"></a>

# Function `pill_engine_core::reflection::component_field::codec::enum_discriminant_value`

```rust
pub(in reflection::component_field) fn enum_discriminant_value(representation: &str, discriminant: i64) -> Option<super::FieldValue>;
```

Visibility: `{'restricted': {'parent': 5515, 'path': '::reflection::component_field'}}` · Source: `engine\pill_engine_core\src\reflection\component_field\codec.rs:244`

The scalar value of an enum's integer representation that holds
`discriminant`, or `None` when the representation is not an integer scalar
or the discriminant does not fit it.
