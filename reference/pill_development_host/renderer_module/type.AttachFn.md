<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3720"></a>

# Type alias `pill_development_host::renderer_module::AttachFn`

```rust
pub(in renderer_module) type AttachFn = unsafe extern "C" fn (_: *const pill_renderer_api::RawWindowData, _: u32, _: u32) -> *mut std::ffi::c_void;
```

Visibility: `{'restricted': {'parent': 3718, 'path': '::renderer_module'}}` · Source: `hosting\pill_development_host\src\renderer_module.rs:70`

Signature of the `pill_renderer_attach` export: it builds a backend on the
window the data describes, or returns null.
