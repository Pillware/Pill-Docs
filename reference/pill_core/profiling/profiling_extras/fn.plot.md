<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1362"></a>

# Function `pill_core::profiling::profiling_extras::plot`

```rust
pub fn plot(name: tracy_client::PlotName, value: f64);
```

Source: `engine\pill_core\src\profiling.rs:543`

Adds one value to a named time-series plot.

The plots are Tracy's own, so the profiler draws them as a graph. The
call does nothing while no profiler is connected.
