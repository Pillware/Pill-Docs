<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1124"></a>

# Type alias `pill_csharp_bridge::csharp_runtime::LoadAssemblyFn`

```rust
pub(in csharp_runtime) type LoadAssemblyFn = unsafe extern "System" fn (_: *const u16, _: *const u16, _: *const u16, _: *const u16, _: *const std::ffi::c_void, _: *mut *const std::ffi::c_void) -> i32;
```

Visibility: `{'restricted': {'parent': 1118, 'path': '::csharp_runtime'}}` · Source: `csharp\pill_csharp_bridge\src\csharp_runtime.rs:83`

Signature of the `load_assembly_and_get_function_pointer` runtime delegate.

Loads a managed assembly and resolves one `UnmanagedCallersOnly` static
method into a native entry-point pointer.
