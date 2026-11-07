<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-744"></a>

# Function `pill_player::telemetry::init_telemetry`

```rust
pub fn init_telemetry(file_log_directory: Option<std::path::PathBuf>) -> Result<pill_core::telemetry::TelemetryHandles, pill_core::telemetry::TelemetryError>;
```

Source: `hosting\pill_player\src\telemetry.rs:240`

Installs the engine telemetry stack and returns its reload handles.

The terminal lane uses the default engine filter. When
`file_log_directory` is supplied, a rolling file lane is added with the
engine's filter minus the developer scratch logs (`engine::dev`) and with
the rendering target at `debug`. Both lanes can be reloaded while the
process runs, through the returned handles. When the `profiling` feature
is active, `profile::*` spans are routed to Tracy through an independent
filter; `profiling-fine` also routes the fine-grained zones.

The stack installs once per process: a later call returns the first
install's handles rather than installing a second subscriber.

## Errors

Returns [`TelemetryError`] when a configured filter directive is invalid
or the file appender cannot be created.
