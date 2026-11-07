<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-69"></a>

# Function `pill_assets::rules::hlsl_to_wgsl::run_bounded_command`

```rust
pub(in rules::hlsl_to_wgsl) fn run_bounded_command(command: std::process::Command, compiler_path: &std::path::Path, timeout: std::time::Duration) -> Result<std::process::Output, String>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::rules::hlsl_to_wgsl'}}` · Source: `assets\pill_assets\src\rules\hlsl_to_wgsl.rs:205`

Runs `command` to completion, killing it once `timeout` has passed.

Both output streams are captured, as [`Command::output`] would capture them,
so a failed compile still reports the compiler's own diagnostics. A run that
outlives the bound is killed and reported. Even a compiler that ignores the
kill is still waited for, so no child outlives the cook.

## Errors

Returns a message naming `compiler_path` when the process cannot be started
or waited for, or when it is still running after `timeout` and is killed.
