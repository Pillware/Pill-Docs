<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1106"></a>

# Function `pill_core::metrics::sanitize_plot_name`

```rust
pub(in metrics) fn sanitize_plot_name(metric_name: &str) -> String;
```

Visibility: `{'restricted': {'parent': 945, 'path': '::metrics'}}` · Source: `engine\pill_core\src\metrics.rs:242`

Turns a metric name into the name of its Tracy plot.

Every character that is not an ASCII letter, a digit or an underscore
becomes an underscore, so `engine.frame_time_ms` becomes
`engine_frame_time_ms`.
