<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1123"></a>

# Type alias `pill_csharp_bridge::csharp_runtime::CloseFn`

```rust
pub(in csharp_runtime) type CloseFn = unsafe extern "System" fn (_: *mut std::ffi::c_void) -> i32;
```

Visibility: `{'restricted': {'parent': 1118, 'path': '::csharp_runtime'}}` · Source: `csharp\pill_csharp_bridge\src\csharp_runtime.rs:77`

Signature of the `hostfxr_close` export.

Closes an initialized runtime context.
