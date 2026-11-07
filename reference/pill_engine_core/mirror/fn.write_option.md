<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6133"></a>

# Function `pill_engine_core::mirror::write_option`

```rust
pub unsafe fn write_option<T, impl FnOnce(*mut u8, T): FnOnce(*mut u8, T)>(return_buffer: *mut u8, value: Option<T>, write_inner_value: impl FnOnce(*mut u8, T));
```

Source: `engine\pill_engine_core\src\mirror.rs:399`

Write an `option:` result: the presence byte, and the value when present.

## Safety

`return_buffer` must reference at least [`OPTION_RETURN_VALUE_OFFSET`](constant.OPTION_RETURN_VALUE_OFFSET.md#rustdoc-item-6108)
writable bytes plus what `write_inner_value` writes.
