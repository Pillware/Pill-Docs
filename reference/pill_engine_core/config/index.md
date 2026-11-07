<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3590"></a>

# Module `pill_engine_core::config`

Source: `engine\pill_engine_core\src\config.rs:1`

The engine's tunable constants and the parallel-execution settings.
Configuration constants for the engine, and the startup report of the
parallel-iteration settings.

## Responsibilities

- Defines the tunable constants for parallel iteration, entity builders,
  queries and allocation profiling.
- Provides `default_entities_per_slice` to size parallel work slices.
- Reports the parallel-execution configuration when the engine starts.

## Design

Keeping the tuning numbers in one file means changing one does not require
hunting through the source. The [`ParallelProcessingConfig`] struct groups
the parallel settings; free functions compute the slice size and write the
startup report.

The startup report ([`print_parallel_config`]) goes through the tracing
stack under `telemetry_target::SYSTEM`, so it can be filtered, redirected
to the file lane or silenced like any other engine output. It is one
multi-line event (`log_block`), which the terminal formatter prints as a
block below its time, level and target. The hardware report lives in
`pill_player` (its `system_specs` module), which keeps `sysinfo` out of the
shared engine dylib.

## Module contents

### Structs
- [`EntityBuilderConfig`](struct.EntityBuilderConfig.md#rustdoc-item-3535) — Zero-sized struct grouping the entity-builder constants.
- [`ParallelProcessingConfig`](struct.ParallelProcessingConfig.md#rustdoc-item-3504) — Zero-sized struct grouping the parallel-iterator constants.
- [`QueryConfig`](struct.QueryConfig.md#rustdoc-item-3561) — Zero-sized struct grouping the query constants.

### Functions
- [`default_entities_per_slice`](fn.default_entities_per_slice.md#rustdoc-item-3508) — Returns the number of entities in one parallel work slice, scaled down for
- [`print_parallel_config`](fn.print_parallel_config.md#rustdoc-item-3589) — Reports the active parallel-iterator settings through the telemetry stack.

### Constants
- [`PROFILING_MEMORY_ALLOCATIONS_SAMPLING_FREQUENCY`](constant.PROFILING_MEMORY_ALLOCATIONS_SAMPLING_FREQUENCY.md#rustdoc-item-3503) — Callstack depth recorded for each allocation by
