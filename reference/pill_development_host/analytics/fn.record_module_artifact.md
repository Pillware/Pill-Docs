<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-421"></a>

# Function `pill_development_host::analytics::record_module_artifact`

```rust
pub(crate) fn record_module_artifact(name: &str, kind: ModuleKind, stage_ms: f64, workspace_root: &std::path::Path, artifact_path: &std::path::Path);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:912`

Record the outcome of one module's build and stage step.

`build_extension` and `build_project_module` call it after the real build
branch, with the path of the DLL the host actually loads (the hot copy for
extensions). It also inspects the DLL's PE image size and imports, reads the
crate's direct cargo dependencies, and, when timing reports are enabled,
takes the per-crate compile and link time from the newest cargo `--timings`
report.
