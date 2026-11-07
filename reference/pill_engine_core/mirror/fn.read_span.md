<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6122"></a>

# Function `pill_engine_core::mirror::read_span`

```rust
pub unsafe fn read_span(address: *const u8) -> (*const u8, usize);
```

Source: `engine\pill_engine_core\src\mirror.rs:208`

Read the `(pointer, length)` pair a `str` or `slice:` slot carries.

## Safety

`address` must reference twelve readable bytes.
