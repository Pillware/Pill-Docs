<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1108"></a>

# Function `pill_core::metrics::install_metrics_with`

```rust
pub fn install_metrics_with(recorder: EngineMetricsRecorder) -> bool;
```

Source: `engine\pill_core\src\metrics.rs:268`

Installs a specific engine metrics recorder process-wide.

[`install_metrics`](fn.install_metrics.md#rustdoc-item-1107) is this function with a new [`EngineMetricsRecorder`](struct.EngineMetricsRecorder.md#rustdoc-item-973).
Returns `true` when the recorder was installed and `false` when another
recorder was already installed.
