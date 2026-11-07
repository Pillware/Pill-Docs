<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1116"></a>

# Function `pill_core::native_buffer::release`

```rust
pub unsafe fn release(element_pointer: *mut u8, byte_capacity: usize, element_align: usize);
```

Source: `engine\pill_core\src\native_buffer.rs:164`

Drops one reference to a block's elements, and frees the block when the
last reference goes away.

## Panics

Panics in debug builds when the block is released more times than it was
retained.

## Safety

`element_pointer` must point at the element area of a live block allocated
by [`allocate`](fn.allocate.md#rustdoc-item-1114) with the same `byte_capacity` and `element_align`, and this
call must balance exactly one earlier [`allocate`](fn.allocate.md#rustdoc-item-1114) or [`retain`](fn.retain.md#rustdoc-item-1117). The
pointer must not be used after the call unless another reference is still
held.
