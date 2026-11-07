<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1420"></a>

# Function `pill_development_host::csharp::fast_compile::compiler_arguments_file`

```rust
pub(in csharp::fast_compile) fn compiler_arguments_file(config: &crate::CSharpModuleConfig) -> Option<std::path::PathBuf>;
```

Visibility: `{'restricted': {'parent': 1342, 'path': '::csharp::fast_compile'}}` · Source: `hosting\pill_development_host\src\csharp\fast_compile.rs:367`

Workspace-relative path of the captured compiler command line for `config`.

The project's build writes the capture into the project's `obj` directory,
so the path is worked out from the output directory instead of stored. The
reloading host sets that directory to
`<project>/bin/<configuration>/<framework>`, so the project root is the
directory three levels above it.

Returns `None` when the output directory has no such shape. That is the
shipping layout, where the assembly sits beside the executable. It never
hot reloads, so it never needs a capture.
