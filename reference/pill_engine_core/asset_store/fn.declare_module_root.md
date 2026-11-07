<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2399"></a>

# Function `pill_engine_core::asset_store::declare_module_root`

```rust
pub fn declare_module_root<impl Into<PathBuf>: Into<std::path::PathBuf>>(module: &str, directory: impl Into<std::path::PathBuf>, required_files: &[&str]);
```

Source: `engine\pill_engine_core\src\asset_store.rs:327`

Declare `directory` as one of `module`'s read-only asset roots.

Loading code names a module resource by a path relative to one of these
roots, exactly as it names a project asset relative to `res`. A module
registers once per generation, so a reload declares the same root again;
that changes nothing.

## Panics

Panics when `directory` is not a directory, when one of `required_files`
is not a file below it, or when the same directory is declared twice with
a different file or hidden-extension list: each is a packaging mistake,
and each names the module and the path.
