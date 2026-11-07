<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1114"></a>

# Function `pill_core::native_buffer::allocate`

```rust
pub unsafe fn allocate(byte_capacity: usize, element_align: usize) -> *mut u8;
```

Source: `engine\pill_core\src\native_buffer.rs:96`

Allocates one block of `byte_capacity` element bytes with the given element
alignment and returns a pointer to its uninitialised element area.

## Panics

Panics when `byte_capacity` is zero (an empty buffer has no block), when
`element_align` is not a power of two, or when the requested size cannot be
laid out. Aborts when the allocator cannot provide the memory.

## Safety

The returned pointer owns one reference. It must be handed to [`release`](fn.release.md#rustdoc-item-1116)
exactly once - through whichever handle owns it - after every [`retain`](fn.retain.md#rustdoc-item-1117)
taken from it has been balanced.
