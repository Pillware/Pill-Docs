<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2400"></a>

# Function `pill_engine_core::asset_store::declare_module_root_hiding`

```rust
pub fn declare_module_root_hiding<impl Into<PathBuf>: Into<std::path::PathBuf>>(module: &str, directory: impl Into<std::path::PathBuf>, required_files: &[&str], hidden_extensions: &[&str]);
```

Source: `engine\pill_engine_core\src\asset_store.rs:343`

[`declare_module_root`](fn.declare_module_root.md#rustdoc-item-2399), with file extensions the listing leaves out.

A directory whose sources are cooked into a file beside them passes the
cooked file's extension here. The store still reads the cooked file by path
(a shader's stages, for example), and the editor's tree shows only the
sources a person edits.

## Panics

Panics on the same mistakes as [`declare_module_root`](fn.declare_module_root.md#rustdoc-item-2399): a missing
directory or file, or the same directory declared twice with a different
file or hidden-extension list.
