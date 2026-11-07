<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3722"></a>

# Type alias `pill_development_host::renderer_module::DetachFn`

```rust
pub(in renderer_module) type DetachFn = unsafe extern "C" fn (_: *mut std::ffi::c_void);
```

Visibility: `{'restricted': {'parent': 3718, 'path': '::renderer_module'}}` · Source: `hosting\pill_development_host\src\renderer_module.rs:74`

Signature of the `pill_renderer_detach` export: it drops a backend inside
the module.
