<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1738"></a>

# Function `pill_csharp_bridge::mirror_calls::ffi_get_native_resource`

```rust
pub(crate) extern "C" fn ffi_get_native_resource(stable_id_low: u64, stable_id_high: u64, mode: u8, output: *mut *mut std::ffi::c_void) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\mirror_calls.rs:153`

Writes the address of the Rust-owned resource registered under the shared
name whose 128-bit hash is `stable_id_low` and `stable_id_high`.

`mode` is `0` for a shared borrow (`&T`) and `1` for a mutable one
(`&mut T`). A startup holds the world exclusively, so it is always
authorized.

## Safety

`output` must be null or point at a writable pointer the caller keeps for
the duration of the call.

## Errors

Returns `STATUS_NULL_OUTPUT` (`5`) when the output is null,
`STATUS_NO_ACTIVE_SCOPE` (`3`) when no managed invocation is running,
`STATUS_ACCESS_NOT_DECLARED` (`2`) when the running system did not declare
this access, `STATUS_MISSING` (`1`) when the world holds no Rust-owned value
under that name, and `STATUS_PANICKED` (`4`) when the call panicked. It
returns `STATUS_OK` (`0`) after writing the address.
