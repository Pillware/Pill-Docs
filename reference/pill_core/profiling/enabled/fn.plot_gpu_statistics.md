<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1333"></a>

# Function `pill_core::profiling::enabled::plot_gpu_statistics`

```rust
pub fn plot_gpu_statistics(statistics: GpuStatistics);
```

Source: `engine\pill_core\src\profiling.rs:468`

Adds one frame's pipeline statistics to Tracy's plots.

The plot names are this crate's statics. Tracy reads a plot's name
through the pointer it is given, long after the call. A name in a DLL
the host reloads would therefore leave Tracy reading unmapped memory.
