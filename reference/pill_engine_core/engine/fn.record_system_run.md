<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6082"></a>

# Function `pill_engine_core::engine::record_system_run`

```rust
pub(in engine) fn record_system_run(registered_system: &mut RegisteredSystem, started_at_tick: u32, elapsed_nanos: u64);
```

Visibility: `{'restricted': {'parent': 5715, 'path': '::engine'}}` · Source: `engine\pill_engine_core\src\engine.rs:2439`

Records what every dispatch path owes a system that just ran.

The sequential path, the single-system batch lane and the parallel batch
closure all use this one function. It moves the change-detection baseline
to the tick captured when the system started, so the next run sees the
changes made during this one. It feeds the observed duration into the
smoothed average, and it stores the duration for the utilization metric.
The batch-wide `last_run_tick` update after the closure stays where it is,
because it also covers disabled members, which never enter a worker task.
