<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3169"></a>

# Function `pill_development_host::native_library::first_unresolved_import`

```rust
pub(in native_library) fn first_unresolved_import(artifact: &std::path::Path, workspace_root: &std::path::Path) -> Option<UnresolvedImport>;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:296`

The first named import of `artifact` that a candidate copy of its DLL does
not export.

The candidates are the copies the loader would consider: the host's own
directory (a DLL the process already mapped wins by file name), the
directory holding the loaded module, and the staged hot directory that the
module builds write. A DLL whose copies are all missing from disk is
skipped, because then only the loader's own message can explain the
failure.
