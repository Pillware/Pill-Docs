<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3151"></a>

# Function `pill_engine_core::component_field::codec::array_element_size`

```rust
pub(in component_field::codec) fn array_element_size(descriptor: &crate::component_registry::ComponentFieldDescriptor) -> Option<usize>;
```

Visibility: `{'restricted': {'parent': 3089, 'path': '::component_field::codec'}}` · Source: `engine\pill_engine_core\src\component_field\codec.rs:242`

The number of bytes one fixed-array element occupies, from the descriptor.

Returns `None` when the descriptor declares no elements, so there is no
count to divide by.
