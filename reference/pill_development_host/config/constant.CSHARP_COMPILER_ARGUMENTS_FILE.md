<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-832"></a>

# Constant `pill_development_host::config::CSHARP_COMPILER_ARGUMENTS_FILE`

```rust
pub(crate) const CSHARP_COMPILER_ARGUMENTS_FILE: &str = "pill_compiler_args.rsp";
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:106`

File the capture target writes inside a managed project's `obj` directory.

This name is the whole contract between the host and the targets file.
MSBuild derives the directory from the project it builds, and the host
derives the same path from the project's output directory.
