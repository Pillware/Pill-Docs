<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3177"></a>

# Type alias `pill_development_host::native_library::ModuleInitFn`

```rust
pub(in native_library) type ModuleInitFn = unsafe extern "C" fn (_: *const pill_engine::EngineApi) -> u32;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:544`

Signature of the required registration entry point.

Returns zero on success; any non-zero status reports a registration
failure and keeps the previous generation loaded.
