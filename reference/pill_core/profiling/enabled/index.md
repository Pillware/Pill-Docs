<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1227"></a>

# Module `pill_core::profiling::enabled`

Visibility: `{'restricted': {'parent': 1371, 'path': '::profiling'}}` · Source: `engine\pill_core\src\profiling.rs:110`

_No documentation provided._

## Module contents

### Structs
- [`DirectZone`](struct.DirectZone.md#rustdoc-item-1229) — A Tracy zone opened through the client itself.
- [`GpuTimeline`](struct.GpuTimeline.md#rustdoc-item-1287) — Shows GPU work as zones on a track of its own in Tracy, beside the CPU
- [`GpuTimelineSpan`](struct.GpuTimelineSpan.md#rustdoc-item-1291) — One GPU zone of a [`GpuTimeline`].
- [`NonContinuousFrame`](struct.NonContinuousFrame.md#rustdoc-item-1349) — RAII guard for a non-continuous frame. The frame ends on drop.
- [`TracyZone`](struct.TracyZone.md#rustdoc-item-1257) — Keeps a CPU zone open until it is dropped.

### Functions
- [`client`](fn.client.md#rustdoc-item-1221) — The shared Tracy client handle, created the first time it is asked for.
- [`frame_mark`](fn.frame_mark.md#rustdoc-item-1344) — Marks the end of a frame for Tracy's frame-time graphs.
- [`init`](fn.init.md#rustdoc-item-1223) — Creates the shared Tracy client handle.
- [`lane_wanted`](fn.lane_wanted.md#rustdoc-item-1255) — Whether a zone on the fine (`profile::fine`) or coarse
- [`non_continuous_frame_begin`](fn.non_continuous_frame_begin.md#rustdoc-item-1370) — Begins a non-continuous frame (a one-shot operation, not in a loop).
- [`plot_gpu_statistics`](fn.plot_gpu_statistics.md#rustdoc-item-1343) — Adds one frame's pipeline statistics to Tracy's plots.
- [`profiler_connected`](fn.profiler_connected.md#rustdoc-item-1342) — Whether a Tracy profiler is connected right now.
- [`secondary_frame_mark`](fn.secondary_frame_mark.md#rustdoc-item-1345) — Marks the end of a secondary (named) continuous frame.

## Re-exports

- [`pub use super::GpuApi;`](../enum.GpuApi.md#rustdoc-item-1218)
- [`pub use super::GpuStatistics;`](../struct.GpuStatistics.md#rustdoc-item-1220)
