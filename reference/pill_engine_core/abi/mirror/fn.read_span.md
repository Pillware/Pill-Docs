<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-129"></a>

# Function `pill_engine_core::abi::mirror::read_span`

```rust
pub unsafe fn read_span(address: *const u8) -> (*const u8, usize);
```

Source: `engine\pill_engine_core\src\abi\mirror.rs:208`

Read the `(pointer, length)` pair a `str` or `slice:` slot carries.

## Safety

`address` must reference twelve readable bytes.
