<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6127"></a>

# Function `pill_engine_core::mirror::read_string_vec`

```rust
pub unsafe fn read_string_vec(address: *const u8) -> MirrorResult<Vec<String>>;
```

Source: `engine\pill_engine_core\src\mirror.rs:320`

Read a `slice:str` slot into owned strings.

## Errors

Returns an error when the slot names strings but points at nothing, and the
errors [`read_str`](fn.read_str.md#rustdoc-item-6125) reports for one of them.

## Safety

The slot must describe `string_count` readable `(pointer, length)` pairs,
each describing readable bytes.
