<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1117"></a>

# Function `pill_core::native_buffer::retain`

```rust
pub unsafe fn retain(element_pointer: *mut u8, element_align: usize);
```

Source: `engine\pill_core\src\native_buffer.rs:137`

Takes one more reference to a block's elements.

## Safety

`element_pointer` must point at the element area of a live block allocated
by [`allocate`](fn.allocate.md#rustdoc-item-1114) with the same `element_align`. The caller owns the new
reference and must balance it with one [`release`](fn.release.md#rustdoc-item-1116).
