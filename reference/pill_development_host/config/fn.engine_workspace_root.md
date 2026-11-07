<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1262"></a>

# Function `pill_development_host::config::engine_workspace_root`

```rust
pub(crate) fn engine_workspace_root() -> Result<std::path::PathBuf, pill_core::error::ConfigError>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:1599`

Directory holding the engine workspace: the base every stored relative path
is resolved against.

The value is taken from this crate's own build location, a compile-time
fact, rather than from the process's working directory. The dioxus CLI runs
the editor with `pill_editor/` as its working directory, which would
otherwise resolve `extensions/` under the editor crate and fail with
[`ConfigError::ExtensionDirectoryMissing`].

## Errors

Returns [`ConfigError::EngineWorkspaceRootUndetermined`] when the manifest
directory has no parent.
