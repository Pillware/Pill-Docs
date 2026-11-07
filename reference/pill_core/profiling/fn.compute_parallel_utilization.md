<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1444"></a>

# Function `pill_core::profiling::compute_parallel_utilization`

```rust
pub fn compute_parallel_utilization(system_durations_ns: &[u64], frame_wall_time_ns: u64, thread_count: usize) -> f64;
```

Source: `engine\pill_core\src\profiling.rs:790`

Returns how much of a frame's thread capacity was busy, as a percentage.

The total of `system_durations_ns` is divided by the frame's full thread
capacity (`frame_wall_time_ns` times `thread_count`). 100% means every
thread was busy for the whole frame; anything below that left some
capacity idle.

This is a lower-bound estimate because each system's wall-clock
duration already includes internal Rayon parallelism - a system that
takes 10 ms on 12 threads may represent up to 120 ms of CPU work.
The metric treats each system as using one thread, so actual thread
saturation is always at least this number.

## Examples

```
use pill_core::profiling::compute_parallel_utilization;

let system_durations_ns = [10_000_000, 20_000_000];
let utilization = compute_parallel_utilization(&system_durations_ns, 20_000_000, 2);
assert_eq!(utilization, 75.0);
```
