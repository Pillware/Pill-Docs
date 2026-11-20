<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3436"></a>

# Type alias `pill_development_host::native_library::FunctionAddressFn`

```rust
pub(in native_library) type FunctionAddressFn = unsafe extern "C" fn (_: *const std::ffi::c_char, _: *mut *const u8, _: *mut usize) -> usize;
```

Visibility: `{'restricted': {'parent': 3326, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:834`

Signature of the build-script-backed address resolver.
