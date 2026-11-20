<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-589"></a>

# Function `pill_development_host::config::extension_crate_directory`

```rust
pub(crate) fn extension_crate_directory(workspace_root: &std::path::Path, package_name: &str) -> std::path::PathBuf;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:2238`

Returns the absolute directory of the extension crate named
`package_name`, or the conventional `extensions/<package>/modules/runtime`
when no folder holds it yet.
