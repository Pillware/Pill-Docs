<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-77"></a>

# Function `pill_assets::rules::hlsl_to_wgsl::check_compiler_candidate`

```rust
pub(in rules::hlsl_to_wgsl) fn check_compiler_candidate(candidate: &std::path::Path, working_directory: &std::path::Path) -> Result<(), String>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::rules::hlsl_to_wgsl'}}` · Source: `assets\pill_assets\src\rules\hlsl_to_wgsl.rs:332`

Returns `Ok` when a cook may run `candidate`, and `Err` with the reason it
may not.

## Errors

Returns the reason `candidate` is unusable: it is not an absolute path, it
is not a file, or it resolves inside `working_directory`.
