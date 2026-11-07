<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1790"></a>

# Function `pill_csharp_bridge::parallel::ffi_parallel_for`

```rust
pub(crate) extern "C" fn ffi_parallel_for(callback: extern "C" fn (_: *mut std::ffi::c_void, _: u32), state: *mut std::ffi::c_void, count: u32) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\parallel.rs:138`

Runs the managed trampoline for every index in `0..count`. This is the
entry the managed runtime calls through the API table.

`state` is opaque: it is passed back to `callback` unchanged.
