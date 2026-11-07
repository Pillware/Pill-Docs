<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3081"></a>

# Constant `pill_development_host::native_library::MODULE_INIT_SYMBOL`

```rust
pub(in native_library) const MODULE_INIT_SYMBOL: &[u8] = b"pill_module_init";
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:131`

Required registration entry point of a loadable artifact.

One name covers both kinds. A project and an extension export the same
symbols, load the same way, reload through the same transaction and are
retired the same way. The differences that are real - a project is
singular where modules form an ordered list, and a module's components are
mirrored to C# - are policy, and live in the config and the reload
transaction rather than in the loader.
