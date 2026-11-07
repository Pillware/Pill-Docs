<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6119"></a>

# Function `pill_engine_core::mirror::read`

```rust
pub unsafe fn read<T: Copy>(address: *const u8) -> T;
```

Source: `engine\pill_engine_core\src\mirror.rs:177`

Read a plain value from the start of a slot or element.

## Safety

`address` must reference `size_of::<T>()` readable bytes holding a valid `T`.
