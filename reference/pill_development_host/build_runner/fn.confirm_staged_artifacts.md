<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-579"></a>

# Function `pill_development_host::build_runner::confirm_staged_artifacts`

```rust
pub(in build_runner) fn confirm_staged_artifacts(workspace_root: &std::path::Path, module_name: &str, watch_directory: &str, build_command: &[String], produced: &[std::path::PathBuf]) -> Result<(), pill_core::error::BuildError>;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:409`

Confirms that a staged artifact set still matches the stamp just written for
it.

The build that produced these files has exited, but the staging paths are
shared with anything else that stages the same crate's artifacts, so a file
can be replaced between the copy and the load. When the stamp no longer
matches, the copy about to be loaded is not the one this host built, and the
build fails here instead of loading a mismatched artifact as if nothing had
changed.

## Errors

Returns [`BuildError::StagedArtifactChanged`] when the stamp no longer
matches the files on disk.
