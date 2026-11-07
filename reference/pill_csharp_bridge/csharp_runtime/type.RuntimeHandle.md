<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1120"></a>

# Type alias `pill_csharp_bridge::csharp_runtime::RuntimeHandle`

```rust
pub(in csharp_runtime) type RuntimeHandle = *mut std::ffi::c_void;
```

Visibility: `{'restricted': {'parent': 1118, 'path': '::csharp_runtime'}}` · Source: `csharp\pill_csharp_bridge\src\csharp_runtime.rs:57`

An opaque handle to one initialized `hostfxr` runtime context.

`hostfxr_initialize_for_runtime_config` creates it and `hostfxr_close`
releases it. The Rust side only passes it back to `hostfxr`; it never looks
inside.
