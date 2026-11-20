<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3428"></a>

# Function `pill_development_host::native_library::stage_module_engine_dylib`

```rust
pub(in native_library) fn stage_module_engine_dylib(workspace_root: &std::path::Path, generation_directory: &std::path::Path);
```

Visibility: `{'restricted': {'parent': 3326, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:553`

Copies the module-world engine dylibs into `generation_directory`, so a
module loaded from there finds them next to itself instead of using the
host's copies.

Only called where [`engine_dylib_staging_steers_the_loader`](fn.engine_dylib_staging_steers_the_loader.md#rustdoc-item-3330) says a copy
beside the module can win; elsewhere the copies would never be consulted.
