<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1737"></a>

# Function `pill_csharp_bridge::mirror_calls::ffi_take_mirror_text`

```rust
pub(crate) extern "C" fn ffi_take_mirror_text(text_kind: u8, out_data: *mut *const u8, out_length: *mut u32) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\mirror_calls.rs:95`

Takes the last error or the returned string of the mirrored call that just
ran on this thread.

`text_kind` is `TEXT_LAST_ERROR` (`0`) for the last error or
`TEXT_RETURN_STRING` (`1`) for the returned string; any other value takes
nothing. On success the text stays valid on this thread until the next call
that hands text out, and both outputs point at it.

## Safety

Both outputs must be null or point at a writable value of their type, which
the caller keeps for the duration of the call.

## Errors

Returns `STATUS_NULL_OUTPUT` (`5`) when either output is null,
`STATUS_MISSING` (`1`) when the requested channel holds no text, and
`STATUS_PANICKED` (`4`) when the call panicked. It returns `STATUS_OK`
(`0`) after writing both outputs.
