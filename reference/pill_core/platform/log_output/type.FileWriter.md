<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1195"></a>

# Type alias `pill_core::platform::log_output::FileWriter`

```rust
pub type FileWriter = tracing_appender::non_blocking::NonBlocking;
```

Source: `engine\pill_core\src\platform\log_output.rs:41`

The file writer on native: a non-blocking writer over a log that is split
into one file per day.
