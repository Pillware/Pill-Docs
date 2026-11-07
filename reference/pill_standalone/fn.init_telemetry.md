<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-306"></a>

# Function `pill_standalone::init_telemetry`

```rust
pub(crate) fn init_telemetry();
```

Visibility: `crate` · Source: `frontends\pill_standalone\src\main.rs:79`

Installs the shared telemetry stack that the rest of the run logs through.

Terminal logging is always on. When `ECS_LOG_DIR` is set, the log is also
written to a rolling file in that directory. With the `profiling` feature,
`profile::*` spans go to Tracy through their own filter; `profiling-fine`
also sends the fine-grained zones.

Setup is best-effort: a failure only costs telemetry. It is printed to
stderr and does not stop the run.
