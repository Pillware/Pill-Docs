<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6124"></a>

# Function `pill_engine_core::mirror::read_mut`

```rust
pub unsafe fn read_mut<'a, T>(address: *const u8, value_label: &str) -> MirrorResult<&'a mut T>;
```

Source: `engine\pill_engine_core\src\mirror.rs:249`

Borrow the value a `mut:` slot addresses, mutably.

`value_label` names the value in the error a null slot produces.

## Errors

Returns an error that names the value when the slot holds a null pointer.

## Safety

The slot must hold null or the address of a live `T` no one else uses for
`'a`.
