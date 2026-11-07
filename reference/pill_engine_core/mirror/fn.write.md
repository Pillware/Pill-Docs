<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6132"></a>

# Function `pill_engine_core::mirror::write`

```rust
pub unsafe fn write<T: Copy>(return_buffer: *mut u8, value: T);
```

Source: `engine\pill_engine_core\src\mirror.rs:387`

Write a plain value to the start of a return buffer.

## Safety

`return_buffer` must reference `size_of::<T>()` writable bytes.
