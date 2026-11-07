<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1264"></a>

# Function `pill_development_host::config::find_csproj_manifest`

```rust
pub(in config) fn find_csproj_manifest(project_root: &std::path::Path) -> Result<std::path::PathBuf, pill_core::error::ConfigError>;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1618`

Finds a `.csproj` manifest inside a project directory.

Returns the first `.csproj` the directory lists.

## Errors

Returns [`ConfigError::ProjectDirectoryMissing`] when the directory cannot
be listed and [`ConfigError::ProjectManifestMissing`] when no `.csproj`
file is found.
