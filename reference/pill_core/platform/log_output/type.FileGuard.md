<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1197"></a>

# Type alias `pill_core::platform::log_output::FileGuard`

```rust
pub type FileGuard = tracing_appender::non_blocking::WorkerGuard;
```

Source: `engine\pill_core\src\platform\log_output.rs:51`

Keeps the file writer's background thread alive. Dropping it writes out the
lines still waiting in the buffer.
