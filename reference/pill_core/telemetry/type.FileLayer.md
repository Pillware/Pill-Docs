<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1902"></a>

# Type alias `pill_core::telemetry::FileLayer`

```rust
pub(in telemetry) type FileLayer = tracing_subscriber::filter::Filtered<tracing_subscriber::fmt::Layer<tracing_subscriber::layer::Layered<tracing_subscriber::filter::Filtered<tracing_subscriber::fmt::Layer<tracing_subscriber::Registry, tracing_subscriber::fmt::format::DefaultFields, EngineTerminalFormatter, crate::platform::log_output::TerminalWriter>, reload::Layer<tracing_subscriber::EnvFilter, tracing_subscriber::Registry>, tracing_subscriber::Registry>, tracing_subscriber::Registry>, tracing_subscriber::fmt::format::DefaultFields, EngineTerminalFormatter, crate::platform::log_output::FileWriter>, reload::Layer<tracing_subscriber::EnvFilter, tracing_subscriber::layer::Layered<tracing_subscriber::filter::Filtered<tracing_subscriber::fmt::Layer<tracing_subscriber::Registry, tracing_subscriber::fmt::format::DefaultFields, EngineTerminalFormatter, crate::platform::log_output::TerminalWriter>, reload::Layer<tracing_subscriber::EnvFilter, tracing_subscriber::Registry>, tracing_subscriber::Registry>, tracing_subscriber::Registry>>, tracing_subscriber::layer::Layered<tracing_subscriber::filter::Filtered<tracing_subscriber::fmt::Layer<tracing_subscriber::Registry, tracing_subscriber::fmt::format::DefaultFields, EngineTerminalFormatter, crate::platform::log_output::TerminalWriter>, reload::Layer<tracing_subscriber::EnvFilter, tracing_subscriber::Registry>, tracing_subscriber::Registry>, tracing_subscriber::Registry>>;
```

Visibility: `{'restricted': {'parent': 1726, 'path': '::telemetry'}}` · Source: `engine\pill_core\src\telemetry.rs:591`

Concrete file layer type: the custom formatter over the platform's file writer.
