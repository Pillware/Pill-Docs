<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1122"></a>

# Type alias `pill_csharp_bridge::csharp_runtime::GetDelegateFn`

```rust
pub(in csharp_runtime) type GetDelegateFn = unsafe extern "System" fn (_: *mut std::ffi::c_void, _: i32, _: *mut *mut std::ffi::c_void) -> i32;
```

Visibility: `{'restricted': {'parent': 1118, 'path': '::csharp_runtime'}}` · Source: `csharp\pill_csharp_bridge\src\csharp_runtime.rs:71`

Signature of the `hostfxr_get_runtime_delegate` export.

Asks a live context for a runtime delegate of the requested kind and writes
an untyped pointer to it.
