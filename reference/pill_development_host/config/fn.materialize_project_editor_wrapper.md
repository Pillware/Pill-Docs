<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1357"></a>

# Function `pill_development_host::config::materialize_project_editor_wrapper`

```rust
pub(in config) fn materialize_project_editor_wrapper(workspace_root: &std::path::Path, project_path: &str, package_name: &str) -> Result<(), pill_core::error::ConfigError>;
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:2751`

Writes the wrapper member that builds a project's editor crate.

The wrapper is the `host_module_<package>_editor` member under
`projects_generated/`, found by the same workspace glob as the generated
project members, and its `cdylib` is the artifact the host loads. The
editor crate stays a plain library inside it.

## Errors

Returns a [`ConfigError`] when the member directory or either generated
file cannot be written.
