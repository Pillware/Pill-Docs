<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-139"></a>

# Function `pill_engine_core::abi::mirror::read_option`

```rust
pub unsafe fn read_option<T, impl FnOnce(*const u8) -> MirrorResult<T>: FnOnce(*const u8) -> MirrorResult<T>>(address: *const u8, read_inner_value: impl FnOnce(*const u8) -> MirrorResult<T>) -> MirrorResult<Option<T>>;
```

Source: `engine\pill_engine_core\src\abi\mirror.rs:371`

Read an `option:` slot, decoding the inner value only when present.

## Errors

Returns the error the inner reader reports when the value is present.

## Safety

The slot must hold the inner encoding and a presence byte at
[`OPTION_ARGUMENT_FLAG_OFFSET`](constant.OPTION_ARGUMENT_FLAG_OFFSET.md#rustdoc-item-110).
