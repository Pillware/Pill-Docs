<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3152"></a>

# Function `pill_engine_core::component_field::codec::header_word`

```rust
pub(in component_field::codec) fn header_word(bytes: &[u8], byte_offset: usize) -> Option<usize>;
```

Visibility: `{'restricted': {'parent': 3089, 'path': '::component_field::codec'}}` · Source: `engine\pill_engine_core\src\component_field\codec.rs:252`

Read one machine word out of a row image.

Returns `None` when the image ends before the whole word does.
