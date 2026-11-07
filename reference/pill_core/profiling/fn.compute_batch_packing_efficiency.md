<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1445"></a>

# Function `pill_core::profiling::compute_batch_packing_efficiency`

```rust
pub fn compute_batch_packing_efficiency(system_durations_ns: &[u64], execution_graph: &[Vec<usize>]) -> f64;
```

Source: `engine\pill_core\src\profiling.rs:831`

Returns how evenly the systems of each parallel batch share their work,
as a percentage.

For one batch the score is its total duration divided by the product of its
longest system's duration and the batch size. The frame score averages
those batch scores, each weighted by the batch's ideal work (its longest
duration times its size). 100% means every system of every batch takes the
same time. Below that, the threads of the shorter systems sit idle while
the longest one runs, because Rayon steals work inside a system, not
between systems.

## Examples

```
use pill_core::profiling::compute_batch_packing_efficiency;

// Two systems batched together: one takes 10 ms, the other 20 ms.
let system_durations_ns = [10_000_000, 20_000_000];
let execution_graph = [vec![0, 1]];
let efficiency = compute_batch_packing_efficiency(&system_durations_ns, &execution_graph);
assert_eq!(efficiency, 75.0);
```
