<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1115"></a>

# Function `pill_core::native_buffer::header_size`

```rust
pub const fn header_size(element_align: usize) -> usize;
```

Source: `engine\pill_core\src\native_buffer.rs:74`

Returns the distance in bytes between a block's elements and its
reference-count header.

The result is at least one `usize`, so the header itself is aligned. It is
also a multiple of `element_align` for the power-of-two alignments
[`allocate`](fn.allocate.md#rustdoc-item-1114) accepts, which keeps the element area aligned.
