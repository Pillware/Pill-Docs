<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-605"></a>

# Function `pill_engine::hot_patch::write_signature_out`

```rust
pub unsafe fn write_signature_out(signature: &'static [u8], out_signature: *mut *const u8, out_signature_length: *mut usize);
```

Source: `engine\pill_engine\src\hot_patch.rs:385`

Writes a signature's address and length through the two out-parameters the
caller passes, and writes nothing when either is null.

The signature text is embedded at compile time and ends with no NUL byte.
That is why it is reported as a pointer and a byte count, not a C string.

## Safety

Both pointers must be null or address writable slots, and `signature` must
stay readable for as long as the caller uses what it wrote there.
