<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3171"></a>

# Function `pill_development_host::native_library::unresolved_engine_mismatch`

```rust
pub(in native_library) fn unresolved_engine_mismatch(unresolved: &UnresolvedImport, workspace_root: &std::path::Path) -> Option<(std::path::PathBuf, std::path::PathBuf)>;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:349`

The mismatch pair for `unresolved`'s engine dylib, when the import names
one and its module-world copy differs from the host's.
