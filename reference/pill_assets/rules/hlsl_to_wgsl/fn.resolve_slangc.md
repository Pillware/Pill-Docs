<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-74"></a>

# Function `pill_assets::rules::hlsl_to_wgsl::resolve_slangc`

```rust
pub(in rules::hlsl_to_wgsl) fn resolve_slangc(pinned_compiler: Option<std::ffi::OsString>, path_variable: Option<std::ffi::OsString>, working_directory: &std::path::Path) -> Result<std::path::PathBuf, String>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::rules::hlsl_to_wgsl'}}` · Source: `assets\pill_assets\src\rules\hlsl_to_wgsl.rs:277`

The same resolution as [`slangc_path`](fn.slangc_path.md#rustdoc-item-73), over values the caller supplies.

A test can pin the `PATH` and working directory it resolves against instead
of using the process's.

## Errors

Returns a message when the working directory cannot be resolved, when the
pinned compiler fails the candidate check, or when no acceptable compiler is
found on `PATH`.
