# Profiling inside the engine

## Summary

Pill's profiling is a thin layer in `pill_core` over the Tracy client. Call sites use macros such as `profile_scope!`, which turn into nothing unless a Cargo feature enables them, and record nothing unless a Tracy viewer is connected. Every module reports through the one Tracy client inside `pill_core.dll/.so`, so the host, the extensions, the project and every hot patch appear on the same timeline.

## At a glance

```text
 project / extension / hot patch DLL          pill_core.dll/.so (one copy per process)
 ┌───────────────────────────────┐            ┌──────────────────────────────────────┐
 │ let _zone = profile_scope!(…) │──calls───▶ │ TracyZone ─▶ DirectZone (#[inline(never)])
 │ profile_plot!(…)              │            │   └─▶ tracy-client ─▶ Tracy C client ─┼──TCP──▶ Tracy viewer
 └───────────────────────────────┘            │ TracyLayer (tracing)  metrics recorder│
                                              └──────────────────────────────────────┘
 pill_master_renderer DLL ── GPU timestamps ─▶ GpuTimeline (in pill_core) ───────────┘
```

| Source of data                         | Where it is produced                          | How it reaches Tracy                               |
| -------------------------------------- | --------------------------------------------- | -------------------------------------------------- |
| CPU zones                              | `profile_scope!`, `profile_scope_fine!`       | `TracyZone`, opened through the Tracy client       |
| Frames                                 | `Engine`'s update loop                        | `profile_frame_mark!` and the secondary frame marks |
| Plots of engine numbers                | `Engine::emit_frame_telemetry`                | `profile_plot!`                                    |
| `metrics` gauges and histograms        | `metrics::gauge!` and friends, any crate      | the `pill_core::metrics` recorder                  |
| GPU pass times                         | the renderer's `Profiler`                     | `GpuTimeline`                                      |
| Allocations (optional)                 | the global allocator                          | `tracy_client::ProfiledAllocator`                  |

## Why is profiling a compile-time feature?

Profiling is a compile-time feature so that a build without it carries no profiling code at all.

`pill_core/src/profiling.rs` contains two versions of the profiling module. With `profiling` or `profiling-minimal`, the `enabled` module calls into `tracy-client`. Without either feature, a second module provides the same names as empty stubs: `TracyZone` is an empty struct, `init()` does nothing, and every macro expands to nothing or to a stub call the compiler removes.

This matters for shipping mode. A shipped project has no Tracy code, no Tracy thread and no listening socket, and nobody has to remove profiling calls from the code before shipping.

`profiling` and `profiling-minimal` cannot be enabled together. `profiling.rs` stops the build with a `compile_error!` when both are on, because each one selects a different set of Tracy capabilities.

## Why does a zone cost almost nothing while Tracy is closed?

A zone checks first whether anyone will receive it, and does no other work when nobody will.

Pill builds the Tracy client in on-demand mode (`tracy-client/ondemand`). In that mode the client collects nothing until a viewer connects. On top of that, every zone asks `lane_wanted()` before it does anything else. `lane_wanted()` returns `false` unless the Tracy client is running, a viewer is connected, and the zone's lane is switched on (see the next section).

Dynamic zone names are built inside a closure that only runs after that check passes:

```rust
let _zone = profile_scope!("system: {}", registered_system.name);
// expands to TracyZone::new_dynamic_lazy(|| format!("system: {}", ...), ...)
```

> **Example:** the scheduler opens one `system: <name>` zone for every ECS system in every update. With Tracy closed, each of those zones is one call to `lane_wanted()`, which returns `false`. No string is formatted and nothing is allocated. Once Tracy connects, the same call sites start formatting names and sending zones.

## What are the coarse and fine lanes?

Every zone belongs to one of two lanes, and each lane can be switched on separately from the normal log level.

| Lane   | `tracing` target  | Opened by              | On when                           |
| ------ | ----------------- | ---------------------- | --------------------------------- |
| coarse | `profile::coarse` | `profile_scope!`       | any build with Tracy enabled      |
| fine   | `profile::fine`   | `profile_scope_fine!`  | only with `profiling-fine`        |

The lanes exist because fine-grained zones disturb what they measure. A zone around a tiny loop body can cost more than the loop body itself. The fine lane keeps that detail available for an investigation without slowing down ordinary profiling.

The switch is a `tracing` filter. When the player sets up telemetry with the `profiling` feature, it calls `TelemetryBuilder::with_tracy(true)`, and with `profiling-fine` also `with_fine_profiling(true)`. The builder then adds a `tracing_tracy::TracyLayer` with its own filter. That filter turns on `profile::coarse` at `TRACE`, and `profile::fine` too when fine profiling was asked for. `lane_wanted()` asks `tracing::enabled!` about the lane's target, and the installed filters answer.

Two consequences follow from using a separate filter:

- The `logging:` level in `project_settings.yaml` does not affect profiling. A project that logs only warnings still gets every coarse zone.
- Ordinary log lines do not pass the Tracy layer's filter, so the log does not flood Tracy's message list.

## Why are zones not plain `tracing` spans?

A zone is opened through the Tracy client directly because a `tracing` span cannot change its name or text after it is created.

`tracing` fixes a span's name, and the fields Tracy shows, when the span is created. Pill's zones need more than that. `profile_scope!` accepts details that are attached after the zone opens, such as the entity count on the `frame` zone. These details reach Tracy as zone text, through `TracyZone::text`. The `TracyLayer` is still installed, but the engine does not open its zones as `tracing` spans. The layer's jobs are to start the Tracy client and to carry the lane filter.

## Why does every Tracy call go through `#[inline(never)]` functions?

The Tracy C functions exist only inside `pill_core.dll/.so`, and that DLL exports only Rust symbols. A call to Tracy's C API compiled into another DLL would fail to link.

In development mode, `pill_core` is a shared Rust `dylib`. It contains the Tracy C client, but its export table lists Rust functions only, not the C functions such as `___tracy_emit_zone_begin`. Most profiling calls are small and generic, so the compiler would happily inline them into whatever DLL uses them. If that happened in an extension or project DLL, the DLL would contain a direct call to a C symbol it cannot find, and linking would fail with `undefined symbol ___tracy_emit_zone_*`.

To prevent this, every call into Tracy's C API sits in a function in `pill_core` that is marked `#[inline(never)]`:

- `DirectZone::open` opens the zone.
- `DirectZone::text` adds zone text.
- `DirectZone::drop` closes the zone.
- `lane_wanted` checks the connection and the lane.

The `tracy_client::Span` inside `DirectZone` is wrapped in `ManuallyDrop` for the same reason. Without it, the span's drop code would be generated in whichever DLL ends the zone, and that drop code calls Tracy's C API. With `ManuallyDrop`, the span is only dropped inside `DirectZone::drop`, which lives in `pill_core`.

The macros themselves can be inlined anywhere. They only build arguments and call the `#[inline(never)]` functions.

## How do all modules share one Tracy connection?

The Tracy client handle lives in a `static` inside `pill_core.dll/.so`, and the engine core is loaded once per process.

The Tracy client starts when the player sets up telemetry: `TracyLayer::default()` calls `tracy_client::Client::start()`. Until then, `Client::running()` returns `None` and every zone stays empty. `pill_core::profiling::client()` keeps a second handle in a `OnceLock<Client>` for the plots, messages and secondary frame marks, and `Client::start()` returns the same running client again. Because every module links the same `pill_core.dll/.so`, there is only one client per process.

> **Example:** you hot reload the project while Tracy is connected. The host unloads the old project DLL and loads the new one. The new DLL's `profile_scope!` calls reach the same client in `pill_core.dll/.so`, so Tracy keeps one continuous capture across the hot reload. A hot patch behaves the same way: the patched function is compiled into a patch DLL, and its zones go through `pill_core` too.

## What does the engine record on its own?

The engine marks every update as a frame, opens zones for its own steps, and plots its internal counts.

**Frames.** Tracy groups data into frames. In `Engine`'s update loop:

- `profile_frame_mark!()` ends the main frame at the end of the update's work.
- `profile_secondary_frame_mark!("scripts")` and `profile_secondary_frame_mark!("commands")` mark the end of the script step and the deferred-command step. Tracy shows them as two extra frame sets.
- `profile_non_continuous_frame!("engine init")` covers engine start-up once.
- `profile_thread!("main")` names the main thread.

The `frame` zone wraps the update's work but not the wait for the frame budget. `Engine::wait_for_frame_budget` runs after the zone ends, so a capped frame rate does not look like slow work.

**Zones.** The main ones are the `frame` zone, `update scripts`, `execute commands`, the scheduler's batch zones, and one `system: <name>` zone per ECS system. That last zone carries the ECS system's last run tick and its average duration as zone text.

**Zone colors.** Tracy colors a zone by its thread unless the zone sets its own color, so all work on one thread looks the same. The `system: <name>` zone of an ECS system the project registered (`SystemOwner::PROJECT`) is drawn in `PROJECT_SYSTEM_ZONE_COLOR`, a blue, so the project's code stands out from the engine's and the extensions' work. Any call site can choose a color with `profile_scope!(color = 0xRRGGBB, "name {}", value)`. `DirectZone::open` sets it with `Span::emit_color` right after opening the zone, inside `pill_core`, and color `0` (`DEFAULT_ZONE_COLOR`) is never sent, so the viewer keeps its own choice. Query iteration (`query/iter.rs`), archetype changes and command application add their own zones.

**Plots.** `Engine::emit_frame_telemetry` sends one value per update to Tracy plots, including `entity_count`, `archetype_count`, `frame_time_us`, `memory_estimate_kb`, `component_types`, `resource_count`, `registered_systems`, `execution_batches` and `commands_executed`.

**Parallel use.** After the ECS systems run, `emit_parallel_utilization_plots` turns the systems' durations, the update's wall time and the Rayon thread count into two plots:

- `parallel_utilization_pct` - how much of the available thread time the ECS systems used.
- `batch_packing_pct` - how evenly the ECS systems of each parallel batch share their work.

Plots, zone text, messages and thread names need full `profiling`. `profiling-minimal` records zones and frame marks only.

## How do `metrics` values reach Tracy?

The `metrics` feature installs one recorder that forwards gauges and histograms to Tracy plots.

`pill_core::metrics::install_metrics` installs a process-wide `metrics::Recorder`. After that, `metrics::gauge!`, `metrics::counter!` and `metrics::histogram!` from any crate record into it. The player records `engine.frame_time_ms` and `engine.fps`, and the engine records `ecs.entities`, `ecs.archetypes`, `ecs.systems` and `ecs.components`.

The recorder keeps no copy of the values. A value reaches a Tracy plot when a viewer is connected and is dropped otherwise.

Tracy needs a plot name with a `'static` lifetime, but metric names are built at runtime. The recorder therefore leaks one `PlotName` per metric name and caches it, so each name is leaked once, not once per value.

## How does GPU time reach Tracy?

The renderer measures its passes with GPU timestamp queries and sends the results to a `GPU` timeline in Tracy.

GPU profiling only runs when `PILL_GPU_PROFILE` is set, because the queries cost GPU time in every update. When it is set and the device supports `TIMESTAMP_QUERY` and `TIMESTAMP_QUERY_INSIDE_ENCODERS`, the renderer creates a `Profiler` (`pill_master_renderer/src/profiler.rs`).

The profiler records each update's queries into one slot of an eight-slot ring, and reads a slot back only after the GPU has finished with it. No update waits for a readback. If a slot is still waiting when its turn comes again, that update records no queries rather than overwrite results that have not been read.

The Tracy side follows the viewer's connection:

1. When a viewer connects, the profiler reads a starting GPU timestamp and creates a `GpuTimeline` named `GPU`. Reading that timestamp submits work and waits for it, so it stalls once per connection.
2. Each pass becomes a `GpuTimelineSpan`. When its timestamps arrive, the span uploads them to the timeline.
3. When the viewer disconnects, the profiler drops the timeline and discards the spans still waiting. Those spans belong to a timeline the viewer no longer knows.

Independently of Tracy, the renderer also logs pass times and shader invocation counts every 120 updates while `PILL_GPU_PROFILE` is set.

## Exceptions and limitations

**`profiling-memory` works only when everything is linked into one executable.** It installs `tracy_client::ProfiledAllocator` as the `#[global_allocator]` in `pill_engine_core`, so Tracy's memory view sees every allocation. A global allocator is generic code that calls Tracy's C API directly, so each DLL that links it gets its own copy. In development mode, the extension and project DLLs cannot link those C calls, for the same reason described above. The feature therefore only links into a build where everything is one image, which in practice means shipping mode. Every allocation is recorded; `PROFILING_MEMORY_ALLOCATIONS_SAMPLING_FREQUENCY` (10) only sets how deep a callstack is kept for each one.

**`profiling-verify` is for checking the instrumentation.** It adds `tracy-client/verify`, which checks that zones open and close correctly. It costs about 50% overhead, so its timings are not useful.

**The editor cannot be profiled with these features.** `pill_editor` has no `profiling` feature, so its build never enables Tracy.

**The web build has no Tracy.** The web build does not enable a profiling feature, so every profiling call in a page compiles to the no-op stubs.

**System-wide data needs administrator rights.** `profiling` enables Tracy's sampling, context switch and system tracing. Windows only allows Tracy to collect context switches and system-wide samples when the process runs as administrator. On Linux Tracy reads them through the kernel's perf events, which need root or a relaxed `kernel.perf_event_paranoid` setting (for example `sudo sysctl kernel.perf_event_paranoid=-1`). Without that, zones, frames and plots still work.

**The viewer must match the client.** `tracy-client` 0.18.4 bundles the Tracy 0.13.1 client (`tracy-client-sys` 0.28.0). Only a 0.13.x viewer can connect.

## Configuration

**Features**, from the frontend down to the engine core:

| Crate                   | Feature            | Turns on                                                                       |
| ----------------------- | ------------------ | ------------------------------------------------------------------------------ |
| `pill_standalone`       | `profiling`        | `pill_player/profiling`, `pill_development_host?/profiling`                    |
| `pill_standalone`       | `profiling-fine`   | the same with `profiling-fine`                                                 |
| `pill_standalone`       | `metrics`          | `pill_player/metrics`, `pill_development_host?/metrics`                        |
| `pill_player`           | `profiling`        | `pill_engine/profiling`, `pill_core/tracy`                                     |
| `pill_development_host` | `profiling`        | `pill_engine/profiling`, `pill_core/tracy`, `pill_player/profiling`            |
| `pill_engine`           | `profiling`, `profiling-fine`, `profiling-minimal`, `profiling-memory`, `profiling-verify`, `metrics` | the matching `pill_engine_core` features |
| `pill_engine_core`      | `profiling`        | `tracy-client` with sampling, context switches, system tracing, on-demand, code transfer, callstack inlines and the crash handler; `pill_core/profiling`, `pill_core/tracy` |
| `pill_core`             | `profiling`        | the zones, plots, messages and threads in `profiling.rs`                       |
| `pill_core`             | `tracy`            | the `tracing_tracy::TracyLayer` in the telemetry stack                         |

The `?` in `pill_development_host?/profiling` means the feature applies to the host only when the host is part of the build, so `profiling` also works in shipping mode, where `pill_standalone` does not compile the host.

**Feature agreement across DLLs.** In development mode, a `profiling` host and its modules must use the same engine features, because the engine core's exported symbol names include a hash of the resolved features. The host passes its own engine features to every module and project build it starts (`apply_cargo_host_overrides`), so this happens automatically. Building modules by hand with different features fails at load time with "procedure could not be found" on Windows, or `undefined symbol: …` on Linux.

**Files:**

- `modules/engine/pill_core/src/profiling.rs` - the macros, `TracyZone`, `DirectZone`, the lane check, frame marks, `GpuTimeline` and the parallel-utilization plots.
- `modules/engine/pill_core/src/telemetry.rs` - `TelemetryBuilder::with_tracy`, `with_fine_profiling` and the Tracy layer's filter.
- `modules/engine/pill_core/src/metrics.rs` - the `metrics` recorder and its forwarding to Tracy plots.
- `modules/engine/pill_engine_core/src/engine.rs` - the update loop's frames, zones and plots.
- `modules/engine/pill_engine_core/src/lib.rs` - the `profiling-memory` global allocator.
- `modules/engine/pill_engine_core/src/config.rs` - `PROFILING_MEMORY_ALLOCATIONS_SAMPLING_FREQUENCY`.
- `modules/hosting/pill_player/src/telemetry.rs` - where the player turns on the Tracy lanes and installs the `metrics` recorder.
- `modules/extensions/pill_master_renderer/pill_master_renderer/src/profiler.rs` - GPU queries, the readback ring and the `GPU` timeline.
- [Profiling (user guide)](../../user_guide/advanced/profiling.md) - how to profile a project.
