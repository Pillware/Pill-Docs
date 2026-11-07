<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2122"></a>

# Macro `pill_core::profile_plot`

```rust
macro_rules! profile_plot {
    ($name:ident, $value:expr) => { ... };
}
```

Source: `engine\pill_core\src\profiling.rs:1168`

Emits a data point on a named time-series plot.
Only active under `profiling` (not `profiling-minimal`).

The plot name is a Rust identifier (not a string literal). Tracy draws each
plot as a graph in its UI.

```ignore
profile_plot!(entity_count, world.entity_count() as f64);
profile_plot!(frame_time_us, elapsed.as_micros() as f64);
```
