<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-770"></a>

# Function `pill_development_host::build_runner::stage_artifact`

```rust
pub(in build_runner) fn stage_artifact(build_output: &std::path::Path, hot_output: &std::path::Path) -> Result<(), pill_core::error::BuildError>;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:1646`

Copies one freshly built artifact into its private hot-load location.

## Errors

Returns [`BuildError::OutputMissing`] when the build did not produce the
source artifact, or when the destination has no parent directory. Returns
[`BuildError::HotArtifactCopyFailed`] when the copy itself fails.
