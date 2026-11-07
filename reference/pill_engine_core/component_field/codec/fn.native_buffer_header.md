<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3156"></a>

# Function `pill_engine_core::component_field::codec::native_buffer_header`

```rust
pub(in component_field::codec) fn native_buffer_header(bytes: &[u8], offset: usize) -> Option<(*const u8, usize)>;
```

Visibility: `{'restricted': {'parent': 3089, 'path': '::component_field::codec'}}` · Source: `engine\pill_engine_core\src\component_field\codec.rs:328`

Read the `(pointer, length)` header of an engine-owned native buffer field.

`DynamicBuffer` fixes the word order with `repr(C)`, and the C# mirror reads
the same three words straight out of the row. Unlike [`container_header`](fn.container_header.md#rustdoc-item-3155),
this function can name the offsets.
