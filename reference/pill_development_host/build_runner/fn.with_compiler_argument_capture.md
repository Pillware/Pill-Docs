<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-763"></a>

# Function `pill_development_host::build_runner::with_compiler_argument_capture`

```rust
pub(in build_runner) fn with_compiler_argument_capture(workspace_root: &std::path::Path, project_config: &crate::ProjectModuleConfig) -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:1395`

Adds the compiler-command-line capture to a managed project's build.

A native build comes back unchanged. For a C# build this appends the two
MSBuild properties that make the build report its own `csc` invocation:
`ProvideCommandLineArgs` fills the item group, and the injected targets file
writes it out. Neither property changes what is compiled; they only make the
build leave a record of how it compiled.

When the targets file is missing, the command is returned unchanged. The
fast reload path then costs more, and nothing else changes.
