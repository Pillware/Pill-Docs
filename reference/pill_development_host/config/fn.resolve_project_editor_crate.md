<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1356"></a>

# Function `pill_development_host::config::resolve_project_editor_crate`

```rust
pub(in config) fn resolve_project_editor_crate(workspace_root: &std::path::Path, project_path: &str, package_name: &str, editor_frontend: &str) -> Result<Option<ExtensionConfig>, pill_core::error::ConfigError>;
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:2714`

Resolves the project's own editor crate, when it has one.

The crate is discovered by convention: `<project_path>/<package>_editor/`,
beside the project's `Cargo.toml`, the project-directory analogue of an
extension's `modules/editor` folder. A project without one has no editor
part and no error, and a crate tagged for another editor frontend is left
out the same way an extension's is.

The crate's generated wrapper is written here, because nothing else would
write it: it lives under `projects_generated/`, which the workspace glob
already finds.

## Errors

Returns [`ConfigError::RetiredEditorFrontend`] when the crate is tagged for
the retired `pill_ui` frontend, and
[`ConfigError::HostModuleMemberCreationFailed`] when the wrapper cannot be
written.
