<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6123"></a>

# Function `pill_engine_core::mirror::read_ref`

```rust
pub unsafe fn read_ref<'a, T>(address: *const u8, value_label: &str) -> MirrorResult<&'a T>;
```

Source: `engine\pill_engine_core\src\mirror.rs:230`

Borrow the value a `ref:` slot addresses.

`value_label` names the value in the error a null slot produces.

## Errors

Returns an error that names the value when the slot holds a null pointer.

## Safety

The slot must hold null or the address of a live `T` that nothing else
mutates for `'a`.
