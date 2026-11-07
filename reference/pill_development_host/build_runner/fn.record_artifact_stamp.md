<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-576"></a>

# Function `pill_development_host::build_runner::record_artifact_stamp`

```rust
pub(in build_runner) fn record_artifact_stamp(workspace_root: &std::path::Path, module_name: &str, source_identity: &str, build_command: &[String], artifacts: &[std::path::PathBuf]);
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:345`

Records that the host itself produced these artifacts with this command.

The write is best-effort: if it fails, the stamp is missing, and the next
run rebuilds instead of trusting an artifact it cannot identify.
