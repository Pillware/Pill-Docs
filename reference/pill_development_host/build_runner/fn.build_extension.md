<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-818"></a>

# Function `pill_development_host::build_runner::build_extension`

```rust
pub(crate) fn build_extension(workspace_root: &std::path::Path, extension_config: &crate::ExtensionConfig, cancel_flag: Option<(&std::sync::atomic::AtomicU64, u64)>) -> Result<std::path::PathBuf, pill_core::error::BuildError>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:2210`

Builds one extension and returns the artifact the host loads.

Extensions are workspace members, so their output always follows the
platform's native-library naming inside the configured output directory.

## Errors

Returns an error when the build fails, during the staging step, or when the
built library is missing afterwards. [`run_build_command`](fn.run_build_command.md#rustdoc-item-761) describes the build
failures; [`stage_build_outputs`](fn.stage_build_outputs.md#rustdoc-item-767) and [`confirm_staged_artifacts`](fn.confirm_staged_artifacts.md#rustdoc-item-579) describe the
staging ones.
