<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1446"></a>

# Function `pill_core::profiling::emit_parallel_utilization_plots`

```rust
pub fn emit_parallel_utilization_plots(system_durations_ns: &[u64], frame_wall_time_ns: u64, thread_count: usize, execution_graph: &[Vec<usize>]);
```

Source: `engine\pill_core\src\profiling.rs:883`

Computes the frame's parallel-utilization and batch-packing percentages and
emits them as native Tracy plots.

Compiled only under `profiling`: `profiling-minimal` has no native plots.

## Examples

```
use pill_core::profiling::emit_parallel_utilization_plots;

emit_parallel_utilization_plots(
    &[10_000_000, 20_000_000],
    30_000_000,
    2,
    &[vec![0], vec![1]],
);
```
