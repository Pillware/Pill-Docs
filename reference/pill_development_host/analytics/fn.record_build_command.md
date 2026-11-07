<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-423"></a>

# Function `pill_development_host::analytics::record_build_command`

```rust
pub(crate) fn record_build_command(name: &str, elapsed_ms: u64, cargo_peak_bytes: u64);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:961`

Record the wall time and peak memory of one cargo invocation.

`run_build_command` calls it after a successful build. The build watchdog
samples the cargo child process's peak working set, and the host's own
memory is read at the same time, so the report shows what a heavy compile
did to the host.
