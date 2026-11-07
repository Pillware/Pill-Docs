<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1894"></a>

# Type alias `pill_core::telemetry::TerminalLayer`

```rust
pub(in telemetry) type TerminalLayer = tracing_subscriber::filter::Filtered<tracing_subscriber::fmt::Layer<tracing_subscriber::Registry, tracing_subscriber::fmt::format::DefaultFields, EngineTerminalFormatter, crate::platform::log_output::TerminalWriter>, reload::Layer<tracing_subscriber::EnvFilter, tracing_subscriber::Registry>, tracing_subscriber::Registry>;
```

Visibility: `{'restricted': {'parent': 1726, 'path': '::telemetry'}}` · Source: `engine\pill_core\src\telemetry.rs:576`

Concrete terminal layer type: the custom formatter over `Stdout`.
