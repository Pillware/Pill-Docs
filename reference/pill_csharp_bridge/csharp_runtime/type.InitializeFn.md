<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1121"></a>

# Type alias `pill_csharp_bridge::csharp_runtime::InitializeFn`

```rust
pub(in csharp_runtime) type InitializeFn = unsafe extern "System" fn (_: *const u16, _: *const std::ffi::c_void, _: *mut *mut std::ffi::c_void) -> i32;
```

Visibility: `{'restricted': {'parent': 1118, 'path': '::csharp_runtime'}}` · Source: `csharp\pill_csharp_bridge\src\csharp_runtime.rs:64`

Signature of the `hostfxr_initialize_for_runtime_config` export.

Starts a .NET runtime from a `runtimeconfig.json` file and writes the new
context handle to its last argument. It returns `0` on success or a
negative status code.
