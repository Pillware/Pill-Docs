<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6126"></a>

# Function `pill_engine_core::mirror::read_plain_vec`

```rust
pub unsafe fn read_plain_vec<T: Copy>(address: *const u8) -> MirrorResult<Vec<T>>;
```

Source: `engine\pill_engine_core\src\mirror.rs:293`

Read a `slice:` slot of plain elements into an owned vector.

The elements are copied rather than borrowed. The managed caller packs them
without promising any alignment, and a vector is what most Rust APIs take
anyway.

## Errors

Returns an error when the slot names elements but points at nothing.

## Safety

The slot must describe `element_count` readable, valid `T` values.
