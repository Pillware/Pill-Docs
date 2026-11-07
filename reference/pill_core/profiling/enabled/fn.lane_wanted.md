<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1245"></a>

# Function `pill_core::profiling::enabled::lane_wanted`

```rust
pub(in profiling::enabled) fn lane_wanted(fine_lane: bool) -> bool;
```

Visibility: `{'restricted': {'parent': 1217, 'path': '::profiling::enabled'}}` · Source: `engine\pill_core\src\profiling.rs:197`

Whether a zone on the fine (`profile::fine`) or coarse
(`profile::coarse`) lane would reach a connected profiler.

The lanes are switched by the telemetry stack's `tracing` filter. The
builder's Tracy layer turns `profile::coarse` on at `TRACE`, and fine
profiling does the same for `profile::fine`. Both happen whatever the
terminal's own verbosity is. The answer is checked before a dynamic
name is formatted, so a run with no profiler connected allocates
nothing.
