<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1480"></a>

# Module `pill_master_renderer::profiler`

Source: `extensions\pill_master_renderer\pill_master_renderer\src\profiler.rs:1`

The query sets and readbacks behind GPU profiling measurements.
GPU-side profiling: timestamps, occlusion queries and pipeline statistics.

## Responsibilities

- Own the query sets, the resolve buffers and the readbacks that turn them
  into numbers, for a renderer built on wgpu.

## Design

Each query set is created once with a per-frame cap. A frame records its
queries into one slot of an eight-slot ring (`FRAMES_IN_FLIGHT`), and a
later frame reads that slot back once the GPU has finished with it, so no
frame waits for a readback. A slot that is still waiting makes its frame
record no queries, rather than overwrite results nobody has read yet.

Every capability is optional. A device without the timestamp or pipeline
statistics features gets `None` where a query set would be, and occlusion
queries need no feature at all.

## Module contents

### Structs
- [`FrameRecord`](struct.FrameRecord.md#rustdoc-item-1510) — What one ring slot's frame recorded. It is kept until its results are
- [`Profiler`](struct.Profiler.md#rustdoc-item-142) — GPU profiling through wgpu query sets.
- [`ResolveSlot`](struct.ResolveSlot.md#rustdoc-item-1497) — One ring slot's buffers. Queries resolve into `resolve`, which is then

### Functions
- [`ensure_buffer_slot`](fn.ensure_buffer_slot.md#rustdoc-item-1634) — Returns the slot's buffers, creating them when they cannot hold `size`
- [`first_u64_values`](fn.first_u64_values.md#rustdoc-item-1632) — The first `count` 64-bit values of a mapped readback's bytes.
- [`gpu_profiling_requested`](fn.gpu_profiling_requested.md#rustdoc-item-1631) — Whether `PILL_GPU_PROFILE` asks for GPU profiling. Off by default: the
- [`read_current_timestamp`](fn.read_current_timestamp.md#rustdoc-item-1636) — Reads the GPU's clock now, in timestamp ticks.
- [`statistics_of`](fn.statistics_of.md#rustdoc-item-1635) — Reads one query's pipeline statistics in the order wgpu writes them: one
- [`warn_readback`](fn.warn_readback.md#rustdoc-item-1633) — Reports that one kind of measurement never arrived, so a profiling run

### Constants
- [`FRAMES_IN_FLIGHT`](constant.FRAMES_IN_FLIGHT.md#rustdoc-item-1481) — How many frames can be waiting for their results at once.
- [`GPU_PROFILE_ENVIRONMENT_VARIABLE`](constant.GPU_PROFILE_ENVIRONMENT_VARIABLE.md#rustdoc-item-1479) — Environment variable that turns GPU profiling on (`PILL_GPU_PROFILE=1`).
- [`GPU_PROFILE_FEATURES`](constant.GPU_PROFILE_FEATURES.md#rustdoc-item-1477) — The device features GPU profiling needs: timestamps written between
