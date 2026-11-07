<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1371"></a>

# Constant `pill_core::profiling::PROFILE_COARSE_TARGET`

```rust
pub const PROFILE_COARSE_TARGET: &str = crate::telemetry::telemetry_target::PROFILE_COARSE;
```

Source: `engine\pill_core\src\profiling.rs:40`

The `tracing` target that filters the coarse profiling lane
(`profile::coarse`).

With the `tracy` feature, [`TelemetryBuilder::with_tracy`] adds a layer
that turns this target on at `TRACE`, whatever the terminal's own
verbosity is. A zone checks that filter to learn whether the profiler
wants it.

[`TelemetryBuilder::with_tracy`]: ../telemetry/struct.TelemetryBuilder.md#rustdoc-item-1370
