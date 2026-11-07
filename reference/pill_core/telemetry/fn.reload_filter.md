<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2028"></a>

# Function `pill_core::telemetry::reload_filter`

```rust
pub(in telemetry) fn reload_filter<S>(handle: &reload::Handle<tracing_subscriber::EnvFilter, S>, filter: tracing_subscriber::EnvFilter) -> Result<(), TelemetryError>;
```

Visibility: `{'restricted': {'parent': 1726, 'path': '::telemetry'}}` · Source: `engine\pill_core\src\telemetry.rs:1117`

Replace one layer's live filter, reporting a refused reload.

Both layers reload the same way, so the error mapping is written once here
rather than once per layer.

## Errors

Returns [`TelemetryError::Reload`](enum.TelemetryError.md#rustdoc-item-1955) when the subscriber refuses the new
filter; the old filter stays active.
