<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-761"></a>

# Function `pill_development_host::build_runner::run_build_command`

```rust
pub(crate) fn run_build_command(workspace_root: &std::path::Path, name: &str, build_command: &[String], build_environment: &[(String, String)], capture_entries: Option<&[(&str, &[String])]>, cancel_flag: Option<(&std::sync::atomic::AtomicU64, u64)>, timeout: std::time::Duration) -> Result<(), pill_core::error::BuildError>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:1233`

Runs one module's build command to completion.

Every host-spawned build - the project module, the extensions, the startup
batch and the C# compiler - goes through here, so they share the process
handling, the watchdog, cancellation and failure reporting. Finding the
produced artifact is left to the caller. `timeout` is the caller's limit:
[`BUILD_TIMEOUT`](constant.BUILD_TIMEOUT.md#rustdoc-item-561) for one module, [`STARTUP_BATCH_TIMEOUT`](constant.STARTUP_BATCH_TIMEOUT.md#rustdoc-item-563) for the batch.

With the `development` feature this also takes the compiler flags the fast
patch pipeline needs out of the build it runs anyway (see
[`VerboseCapture`](struct.VerboseCapture.md#rustdoc-item-594)); `capture_entries` names the crates to harvest.

## Errors

Returns an error if the command is empty, if it fails to spawn, exits with a
non-zero status, times out, or is cancelled by a newer source change.
