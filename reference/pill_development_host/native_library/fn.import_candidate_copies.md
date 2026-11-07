<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3170"></a>

# Function `pill_development_host::native_library::import_candidate_copies`

```rust
pub(in native_library) fn import_candidate_copies(dll: &str, artifact: &std::path::Path, workspace_root: &std::path::Path) -> Vec<std::path::PathBuf>;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:329`

The copies of an imported DLL the loader would consider, in its own
order: a copy the process already maps (the host's engines), one beside
the loaded module, one in the staged hot directory.
