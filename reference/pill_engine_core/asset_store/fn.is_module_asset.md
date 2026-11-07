<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2409"></a>

# Function `pill_engine_core::asset_store::is_module_asset`

```rust
pub fn is_module_asset(path: &std::path::Path) -> bool;
```

Source: `engine\pill_engine_core\src\asset_store.rs:498`

Whether `path` is one of a module's resources.

An absolute path counts when it lies inside a declared root. A relative
path counts when a root holds it and the project's asset directory does
not. The project's directory is checked first, exactly as [`resolve_file`](fn.resolve_file.md#rustdoc-item-2408)
orders them, so a project file that shares a module resource's path is the
project's and stays writable. The editor asks this before it writes
anything, which keeps module resources out of the authoring tools.
