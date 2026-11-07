<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1361"></a>

# Module `pill_core::profiling`

Source: `engine\pill_core\src\profiling.rs:1`

Tracy profiling API with feature gating and no-op fallbacks.
Tracy profiling: zones, plots and messages behind compile-time feature
gating.

## Responsibilities

- Provide the macros call sites use: `profile_scope!`,
  `profile_frame_mark!`, `profile_plot!` and the rest.
- Compute the parallel-utilization metrics of a frame.
- Compile every entry point away to a no-op when no profiling feature is
  enabled.

## Design

| Capability                                   | `profiling` | `profiling-minimal` |
|----------------------------------------------|-------------|---------------------|
| CPU zones, frame marks, secondary frames     | +           | +                   |
| Call stack sampling, on-demand collection    | +           | +                   |
| Zone text, native plots, messages, threads   | +           | -                   |
| Context switches, system info, code transfer | +           | -                   |

A zone is recorded only when the telemetry builder installed its Tracy
lane (`TelemetryBuilder::with_tracy`) and a profiler is connected; until
then every call returns without recording anything. `profile_init!()`
creates the shared client handle. With no profiling feature at all, every
entry point is a no-op stub the compiler drops.

## Module contents

### Modules
- [`enabled`](enabled/index.md#rustdoc-item-1217)
- [`profiling_extras`](profiling_extras/index.md#rustdoc-item-1369) — Helpers that need the full `profiling` feature: plots, messages and thread

### Structs
- [`GpuStatistics`](struct.GpuStatistics.md#rustdoc-item-1210) — The pipeline statistics of one geometry pass.

### Enums
- [`GpuApi`](enum.GpuApi.md#rustdoc-item-1208) — The graphics API a GPU timeline's timestamps come from, so Tracy can label

### Functions
- [`compute_batch_packing_efficiency`](fn.compute_batch_packing_efficiency.md#rustdoc-item-1445) — Returns how evenly the systems of each parallel batch share their work,
- [`compute_parallel_utilization`](fn.compute_parallel_utilization.md#rustdoc-item-1444) — Returns how much of a frame's thread capacity was busy, as a percentage.
- [`emit_parallel_utilization_plots`](fn.emit_parallel_utilization_plots.md#rustdoc-item-1446) — Computes the frame's parallel-utilization and batch-packing percentages and

### Constants
- [`DEFAULT_ZONE_COLOR`](constant.DEFAULT_ZONE_COLOR.md#rustdoc-item-1373) — The zone color that leaves the choice to the Tracy viewer, which by default
- [`PROFILE_COARSE_TARGET`](constant.PROFILE_COARSE_TARGET.md#rustdoc-item-1371) — The `tracing` target that filters the coarse profiling lane
- [`PROFILE_FINE_TARGET`](constant.PROFILE_FINE_TARGET.md#rustdoc-item-1372) — The `tracing` target that filters the fine investigative lane
- [`PROJECT_SYSTEM_ZONE_COLOR`](constant.PROJECT_SYSTEM_ZONE_COLOR.md#rustdoc-item-1374) — The zone color of an ECS system the project registered, `0xRRGGBB`.

## Re-exports

- [`pub use profiling_extras;`](profiling_extras/index.md#rustdoc-item-1369)
- [`pub use enabled;`](enabled/index.md#rustdoc-item-1217)
