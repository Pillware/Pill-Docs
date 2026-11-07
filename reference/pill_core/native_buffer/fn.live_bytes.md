<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1112"></a>

# Function `pill_core::native_buffer::live_bytes`

```rust
pub fn live_bytes() -> usize;
```

Source: `engine\pill_core\src\native_buffer.rs:54`

Returns the total number of element bytes held by live blocks.

The header bytes of each block are not counted, so the number matches what
the handles' `(len, cap)` words add up to. Tests use it to check that a
world released everything it allocated.
