<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1594"></a>

# Function `pill_editor::init_telemetry`

```rust
pub(crate) fn init_telemetry() -> pill_core::telemetry::capture::LogBuffer;
```

Visibility: `crate` · Source: `editor\pill_editor\src\main.rs:60`

Installs the shared telemetry stack before the run loop starts.

Logging to the terminal is always on, and so is the console panel's
capture ring (the in-memory ring of log lines it reads). The return value
carries that ring. A file lane (a rolling log file) is added when
`ECS_LOG_DIR` is set.

Setup is best-effort: a failure only degrades telemetry and is reported
to stderr without aborting the run.
