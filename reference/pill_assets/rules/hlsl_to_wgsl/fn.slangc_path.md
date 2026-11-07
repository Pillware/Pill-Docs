<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-73"></a>

# Function `pill_assets::rules::hlsl_to_wgsl::slangc_path`

```rust
pub(in rules::hlsl_to_wgsl) fn slangc_path() -> Result<std::path::PathBuf, String>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::rules::hlsl_to_wgsl'}}` · Source: `assets\pill_assets\src\rules\hlsl_to_wgsl.rs:257`

The `slangc` a cook may run.

A bare name is never handed to the OS. On Windows, `CreateProcess` looks in
the working directory before it searches `PATH`, and on any platform a
`PATH` entry can point at that directory. A project could therefore have its
own `slangc.exe` run by a cook that was only asked to compile a shader.
`PILL_SLANGC` names the compiler outright. Without it, the search walks
`PATH` in order and refuses any candidate that resolves inside the working
directory.

## Errors

Returns a message when the working directory cannot be read, when
`PILL_SLANGC` names a path the check refuses, or when no `slangc` is found.
The last message says how to set `PILL_SLANGC` or where to install Slang.
