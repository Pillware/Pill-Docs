<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3288"></a>

# Function `pill_development_host::native_library::process_temporary_directory`

```rust
pub(crate) fn process_temporary_directory(workspace_root: &std::path::Path) -> std::path::PathBuf;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\native_library.rs:1615`

Directory used by this host process for temporary native-library copies.

Scoping the directory per process id means one host instance can never
delete or overwrite the copies of another instance running against the
same workspace.
