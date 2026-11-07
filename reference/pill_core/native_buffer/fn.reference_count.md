<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1118"></a>

# Function `pill_core::native_buffer::reference_count`

```rust
pub unsafe fn reference_count(element_pointer: *mut u8, element_align: usize) -> usize;
```

Source: `engine\pill_core\src\native_buffer.rs:203`

Returns how many references the block behind `element_pointer` holds.

## Safety

`element_pointer` must point at the element area of a live block allocated
by [`allocate`](fn.allocate.md#rustdoc-item-1114) with the same `element_align`.
