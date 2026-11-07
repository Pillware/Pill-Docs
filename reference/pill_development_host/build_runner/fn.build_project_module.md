<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-768"></a>

# Function `pill_development_host::build_runner::build_project_module`

```rust
pub(crate) fn build_project_module(workspace_root: &std::path::Path, project_config: &crate::ProjectModuleConfig, cancel_flag: Option<(&std::sync::atomic::AtomicU64, u64)>) -> Result<std::path::PathBuf, pill_core::error::BuildError>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:1477`

Builds the selected project module and returns the artifact the host loads.

## Errors

Returns an error when the build fails, during the staging step, or when the
expected artifact does not exist at the configured path. [`run_build_command`](fn.run_build_command.md#rustdoc-item-761)
describes the build failures; [`stage_build_outputs`](fn.stage_build_outputs.md#rustdoc-item-767) and
[`confirm_staged_artifacts`](fn.confirm_staged_artifacts.md#rustdoc-item-579) describe the staging ones.
