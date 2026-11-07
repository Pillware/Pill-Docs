<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3155"></a>

# Function `pill_engine_core::component_field::codec::container_header`

```rust
pub(in component_field::codec) fn container_header(bytes: &[u8], offset: usize) -> Option<(*const u8, usize)>;
```

Visibility: `{'restricted': {'parent': 3089, 'path': '::component_field::codec'}}` · Source: `engine\pill_engine_core\src\component_field\codec.rs:316`

Read the `(pointer, length)` header of a std heap container field.

`vec:` and `string` tags reach here, and only from a row copied out of a
live column. Fixed-array fields do not: their elements are read one by one,
with the element size [`array_element_size`](fn.array_element_size.md#rustdoc-item-3151) computes from the descriptor.
