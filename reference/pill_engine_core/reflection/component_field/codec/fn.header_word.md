<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7071"></a>

# Function `pill_engine_core::reflection::component_field::codec::header_word`

```rust
pub(in reflection::component_field::codec) fn header_word(bytes: &[u8], byte_offset: usize) -> Option<usize>;
```

Visibility: `{'restricted': {'parent': 7007, 'path': '::reflection::component_field::codec'}}` · Source: `engine\pill_engine_core\src\reflection\component_field\codec.rs:295`

Read one machine word out of a row image.

Returns `None` when the image ends before the whole word does.
