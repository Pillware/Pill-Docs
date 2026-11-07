<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-907"></a>

# Function `pill_development_host::config::materialize_host_project_member`

```rust
pub(in config) fn materialize_host_project_member(workspace_root: &std::path::Path, project_path: &str, package_name: &str) -> Result<(), pill_core::error::ConfigError>;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1904`

Writes the temporary workspace member that builds the native project.

A type keeps one identity across DLLs only when the project compiles as a
member of the engine workspace: one Cargo.lock, one target directory, one
crate-metadata set. The project source lives outside the workspace, so
this writes a generated crate under `projects_generated/`, where the
workspace glob finds it without an entry in the workspace manifest.

The generated `Cargo.toml` carries the project's own manifest, with every
`path` dependency made absolute and the `[lib]` `path` pointed at the real
source, so edits keep triggering rebuilds through the normal watcher. The
member is rebuilt from the project manifest on every startup and written
only when its content changed, so manifest changes always apply.

## Errors

Returns a [`ConfigError`] when the project manifest cannot be read or the
generated member directory or manifest cannot be written.
