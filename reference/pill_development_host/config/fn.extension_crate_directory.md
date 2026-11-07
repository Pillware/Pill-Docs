<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1277"></a>

# Function `pill_development_host::config::extension_crate_directory`

```rust
pub(crate) fn extension_crate_directory(workspace_root: &std::path::Path, crate_name: &str) -> std::path::PathBuf;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:1846`

Returns the directory of the extension crate `crate_name`: either
`extensions/<folder>/<crate_name>` for the folder that holds it, or the
usual `extensions/<crate_name>/<crate_name>` when no folder holds it yet.
