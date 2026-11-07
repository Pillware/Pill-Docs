<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3162"></a>

# Function `pill_engine_core::component_field::codec::encode_field_write`

```rust
pub(in component_field) fn encode_field_write(descriptor: &crate::component_registry::ComponentFieldDescriptor, field_name: &str, field_value: &super::FieldValue) -> Result<super::row::FieldWrite, super::ComponentFieldError>;
```

Visibility: `{'restricted': {'parent': 3105, 'path': '::component_field'}}` · Source: `engine\pill_engine_core\src\component_field\codec.rs:471`

Encode one field value into the bytes a row write should carry.

## Errors

Returns [`ComponentFieldError::UnsupportedField`](../enum.ComponentFieldError.md#rustdoc-item-3159) for a heap-backed
container, for a tag outside the editable vocabulary, or for a fixed array
whose elements are not scalars. Returns
[`ComponentFieldError::TypeMismatch`](../enum.ComponentFieldError.md#rustdoc-item-3160) when the value does not match the
field's tag, and [`ComponentFieldError::ArrayLengthMismatch`](../enum.ComponentFieldError.md#rustdoc-item-3161) when an array
value has a different number of elements than the descriptor declares.
