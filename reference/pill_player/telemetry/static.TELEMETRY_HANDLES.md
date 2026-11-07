<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-745"></a>

# Static `pill_player::telemetry::TELEMETRY_HANDLES`

```rust
pub(in telemetry) static TELEMETRY_HANDLES: std::sync::OnceLock<pill_core::telemetry::TelemetryHandles> = _;
```

Visibility: `{'restricted': {'parent': 748, 'path': '::telemetry'}}` · Source: `hosting\pill_player\src\telemetry.rs:46`

The handles of the installed stack, kept so the project's settings can
reload its filters after [`init_telemetry`](fn.init_telemetry.md#rustdoc-item-744) returned.
