<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3174"></a>

# Function `pill_development_host::native_library::module_world_engine_dylib`

```rust
pub(in native_library) fn module_world_engine_dylib(workspace_root: &std::path::Path, stem: &str) -> Option<std::path::PathBuf>;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:460`

Locates the engine dylib `stem` that the module build produced: the staged
hot-load copy when a build has run, otherwise the one still in the private
build directory.
