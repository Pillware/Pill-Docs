<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-127"></a>

# Function `pill_engine_core::abi::mirror::read_bool`

```rust
pub unsafe fn read_bool(address: *const u8) -> bool;
```

Source: `engine\pill_engine_core\src\abi\mirror.rs:188`

Read a `bool` (one byte, nonzero is true).

## Safety

`address` must reference one readable byte.
