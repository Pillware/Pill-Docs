<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2040"></a>

# Function `pill_csharp_bridge::resources::ffi_get_resource_view`

```rust
pub(crate) extern "C" fn ffi_get_resource_view(stable_id_low: u64, stable_id_high: u64, access_mode: u8, view_output: *mut super::abi::ResourceView) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\resources.rs:839`

The panic-guarded entry point for [`ffi_get_resource_view_guarded`](fn.ffi_get_resource_view_guarded.md#rustdoc-item-2039).

A panic that crosses an `extern "C"` boundary aborts the process. The
managed side already has a per-system error channel for a misbehaving
system, so a panic reached through this callback reports `5` instead of
killing the host mid-frame. That is the same status the callback returns
when the caller passes no output buffer, and the frame's error path names
the system that made the call.
