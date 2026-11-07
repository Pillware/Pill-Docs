<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6121"></a>

# Function `pill_engine_core::mirror::read_pointer`

```rust
pub unsafe fn read_pointer(address: *const u8) -> *mut u8;
```

Source: `engine\pill_engine_core\src\mirror.rs:198`

Read the address a slot carries.

## Safety

`address` must reference a readable pointer-sized value.
