<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-802"></a>

# Function `pill_player::telemetry::init_telemetry_with_capture`

```rust
pub fn init_telemetry_with_capture(file_log_directory: Option<std::path::PathBuf>, capture: Option<pill_core::telemetry::capture::LogBuffer>) -> Result<pill_core::telemetry::TelemetryHandles, pill_core::telemetry::TelemetryError>;
```

Source: `hosting\pill_player\src\telemetry.rs:255`

Installs the telemetry stack like [`init_telemetry`](fn.init_telemetry.md#rustdoc-item-744), plus an optional
in-process capture ring.

The editor's console panel reads the ring. Passing `None` installs the
stack without a capture lane.

## Errors

Same as [`init_telemetry`](fn.init_telemetry.md#rustdoc-item-744).
