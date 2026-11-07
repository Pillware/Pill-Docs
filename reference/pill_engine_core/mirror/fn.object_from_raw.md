<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6215"></a>

# Function `pill_engine_core::mirror::object_from_raw`

```rust
pub unsafe fn object_from_raw<T: MirrorObject>(address: *const u8) -> MirrorResult<T>;
```

Source: `engine\pill_engine_core\src\mirror.rs:492`

Move an object out of the box a slot or element addresses.

## Errors

Returns an error when the slot holds a null pointer, which means the value
was missing or had already been moved.

## Safety

`address` must hold null or a pointer from [`object_into_raw`](fn.object_into_raw.md#rustdoc-item-6214) that the
managed side has given up, so nothing reads it again.
