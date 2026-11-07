<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1278"></a>

# Function `pill_development_host::config::read_project_settings_file`

```rust
pub(in config) fn read_project_settings_file(project_root: &std::path::Path) -> Result<Option<ProjectSettingsFile>, pill_core::error::ConfigError>;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1865`

Reads the project's own settings file from the project root.

Returns `Ok(None)` when no file exists. The caller decides whether that is
a missing-file error (as [`HostConfig::from_environment`](struct.HostConfig.md#rustdoc-item-903) treats it,
because `name` and `build_binary_name` are required) or simply no
settings. A file that exists but cannot be read or parsed is always an
error, so a typo cannot silently select a different module set.

## Errors

Returns a [`ConfigError`] when the file exists but cannot be read or is
not valid YAML.
