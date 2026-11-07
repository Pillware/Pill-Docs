<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1903"></a>

# Type alias `pill_core::telemetry::FileLayerArtifacts`

```rust
pub(in telemetry) type FileLayerArtifacts = (Option<tracing_subscriber::filter::Filtered<tracing_subscriber::fmt::Layer<tracing_subscriber::layer::Layered<tracing_subscriber::filter::Filtered<tracing_subscriber::fmt::Layer<tracing_subscriber::Registry, tracing_subscriber::fmt::format::DefaultFields, EngineTerminalFormatter, crate::platform::log_output::TerminalWriter>, reload::Layer<tracing_subscriber::EnvFilter, tracing_subscriber::Registry>, tracing_subscriber::Registry>, tracing_subscriber::Registry>, tracing_subscriber::fmt::format::DefaultFields, EngineTerminalFormatter, crate::platform::log_output::FileWriter>, reload::Layer<tracing_subscriber::EnvFilter, tracing_subscriber::layer::Layered<tracing_subscriber::filter::Filtered<tracing_subscriber::fmt::Layer<tracing_subscriber::Registry, tracing_subscriber::fmt::format::DefaultFields, EngineTerminalFormatter, crate::platform::log_output::TerminalWriter>, reload::Layer<tracing_subscriber::EnvFilter, tracing_subscriber::Registry>, tracing_subscriber::Registry>, tracing_subscriber::Registry>>, tracing_subscriber::layer::Layered<tracing_subscriber::filter::Filtered<tracing_subscriber::fmt::Layer<tracing_subscriber::Registry, tracing_subscriber::fmt::format::DefaultFields, EngineTerminalFormatter, crate::platform::log_output::TerminalWriter>, reload::Layer<tracing_subscriber::EnvFilter, tracing_subscriber::Registry>, tracing_subscriber::Registry>, tracing_subscriber::Registry>>>, Option<std::sync::Arc<crate::platform::log_output::FileGuard>>, Option<reload::Handle<tracing_subscriber::EnvFilter, tracing_subscriber::layer::Layered<tracing_subscriber::filter::Filtered<tracing_subscriber::fmt::Layer<tracing_subscriber::Registry, tracing_subscriber::fmt::format::DefaultFields, EngineTerminalFormatter, crate::platform::log_output::TerminalWriter>, reload::Layer<tracing_subscriber::EnvFilter, tracing_subscriber::Registry>, tracing_subscriber::Registry>, tracing_subscriber::Registry>>>);
```

Visibility: `{'restricted': {'parent': 1726, 'path': '::telemetry'}}` · Source: `engine\pill_core\src\telemetry.rs:604`

The three values the optional file layer produces: its layer, the file
writer's guard, and the reload handle.
