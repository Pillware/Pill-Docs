<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-804"></a>

# Function `pill_player::telemetry::apply_logging_settings`

```rust
pub fn apply_logging_settings(settings: &LoggingSettings) -> Result<(), pill_core::telemetry::TelemetryError>;
```

Source: `hosting\pill_player\src\telemetry.rs:306`

Applies a project's logging settings to the installed stack, both lanes.

Called once the project is known, after [`init_telemetry`](fn.init_telemetry.md#rustdoc-item-744). Settings that
name no level and no target leave the filters as they are. Without an
installed stack there is nothing to reload, which is not an error.

## Errors

Returns [`TelemetryError`] when a filter does not build or does not reload;
the previous filter stays active.
