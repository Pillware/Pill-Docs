<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6125"></a>

# Function `pill_engine_core::mirror::read_str`

```rust
pub unsafe fn read_str<'a>(address: *const u8) -> MirrorResult<&'a str>;
```

Source: `engine\pill_engine_core\src\mirror.rs:266`

Read a `str` slot as a borrowed string, checking it is UTF-8.

## Errors

Returns an error when the slot names bytes but points at nothing, and when
the bytes are not valid UTF-8.

## Safety

The slot must describe `length` readable bytes that stay valid for `'a`.
