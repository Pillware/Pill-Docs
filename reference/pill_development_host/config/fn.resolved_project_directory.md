<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1273"></a>

# Function `pill_development_host::config::resolved_project_directory`

```rust
pub(in config) fn resolved_project_directory(workspace_root: &std::path::Path, project_path: &str) -> std::path::PathBuf;
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1598`

The project directory a start reports: the path joined onto the workspace
root, canonicalized when it exists so `..` segments and symlinks do not
reach the log.

A directory that does not resolve keeps the joined path, which is still
absolute because the workspace root is.
