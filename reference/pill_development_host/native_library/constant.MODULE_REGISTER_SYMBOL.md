<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3082"></a>

# Constant `pill_development_host::native_library::MODULE_REGISTER_SYMBOL`

```rust
pub(in native_library) const MODULE_REGISTER_SYMBOL: &[u8] = b"pill_module_register";
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:134`

Optional: an artifact's registration-only entry point, called instead of
`pill_module_init` on every generation after the first.
