<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1702"></a>

# Function `pill_core::telemetry::capture::level_value`

```rust
pub fn level_value(level: tracing::Level) -> u8;
```

Source: `engine\pill_core\src\telemetry\capture.rs:201`

Returns the number [`LogLine::level`](struct.LogLine.md#rustdoc-item-1571) stores for a logging level: 1 trace
through 5 error.
