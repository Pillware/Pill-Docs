<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7069"></a>

# Function `pill_engine_core::reflection::component_field::codec::discriminant_of_scalar`

```rust
pub(in reflection::component_field::codec) fn discriminant_of_scalar(value: &super::FieldValue) -> Option<i64>;
```

Visibility: `{'restricted': {'parent': 7007, 'path': '::reflection::component_field::codec'}}` · Source: `engine\pill_engine_core\src\reflection\component_field\codec.rs:265`

The discriminant an integer scalar holds, or `None` for a value that is not
an integer or does not fit an `i64`.
