<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3424"></a>

# Function `pill_development_host::project_module::loaded::run_full_project_build`

```rust
pub(in project_module::loaded) fn run_full_project_build(workspace_root: &std::path::Path, config: &crate::ProjectModuleConfig, cancel_flag: Option<(std::sync::Arc<std::sync::atomic::AtomicU64>, u64)>) -> Result<(), String>;
```

Visibility: `{'restricted': {'parent': 3421, 'path': '::project_module::loaded'}}` · Source: `hosting\pill_development_host\src\project_module.rs:577`

Runs the full `dotnet build` for a reload the captured command line
could not answer, reporting its error as text for the reload log.

## Errors

Returns the build's error rendered as text when the build fails or its
output artifact is missing; the caller logs it and keeps the running
assembly.
