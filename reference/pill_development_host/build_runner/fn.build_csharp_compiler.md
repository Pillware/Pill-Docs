<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-766"></a>

# Function `pill_development_host::build_runner::build_csharp_compiler`

```rust
pub(crate) fn build_csharp_compiler(workspace_root: &std::path::Path) -> Result<std::path::PathBuf, pill_core::error::BuildError>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:1427`

Builds the managed assembly that compiles C# projects in-process.

It is built separately from every managed project because nothing references
it. Roslyn is large and does not suit NativeAOT, so keeping it out of each
project's reference graph is what keeps it out of a shipping bundle.
MSBuild's own incremental check makes an unchanged compiler project cheap to
"build", and the host does not second-guess it.

## Errors

Returns [`BuildError::OutputMissing`] when the compiler project or its output
assembly is absent, or whatever [`run_build_command`](fn.run_build_command.md#rustdoc-item-761) reports.
