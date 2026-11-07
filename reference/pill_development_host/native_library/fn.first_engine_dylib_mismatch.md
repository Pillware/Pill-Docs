<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3094"></a>

# Function `pill_development_host::native_library::first_engine_dylib_mismatch`

```rust
pub(in native_library) fn first_engine_dylib_mismatch(workspace_root: &std::path::Path) -> Option<(std::path::PathBuf, std::path::PathBuf)>;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:188`

The first engine dylib whose module-world copy differs from the host's, as
`(host copy, module copy)`; `None` when every module-world copy matches the
host's or no module build has produced one.
