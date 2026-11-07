<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-142"></a>

# Struct `pill_master_renderer::profiler::Profiler`

```rust
pub struct Profiler;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\profiler.rs:84`

GPU profiling through wgpu query sets.

Holds one query set per category (timestamps, occlusion and pipeline
statistics), plus a ring of resolve buffers per category. That lets a
readback map one slot while a later frame still records into another.

## Fields

<a id="rustdoc-item-1482"></a>

### `timestamp_query_set`

```rust
timestamp_query_set: Option<wgpu::QuerySet>
```

_No documentation provided._

<a id="rustdoc-item-1484"></a>

### `timestamp_query_names`

```rust
timestamp_query_names: Vec<String>
```

_No documentation provided._

<a id="rustdoc-item-1485"></a>

### `pipeline_statistics_query_set`

```rust
pipeline_statistics_query_set: Option<wgpu::QuerySet>
```

_No documentation provided._

<a id="rustdoc-item-1486"></a>

### `pipeline_statistics_types`

```rust
pipeline_statistics_types: wgpu::PipelineStatisticsTypes
```

_No documentation provided._

<a id="rustdoc-item-1488"></a>

### `occlusion_query_set`

```rust
occlusion_query_set: Option<wgpu::QuerySet>
```

_No documentation provided._

<a id="rustdoc-item-1489"></a>

### `max_timestamp_queries`

```rust
max_timestamp_queries: u32
```

_No documentation provided._

<a id="rustdoc-item-1490"></a>

### `max_pipeline_statistics_queries`

```rust
max_pipeline_statistics_queries: u32
```

_No documentation provided._

<a id="rustdoc-item-1491"></a>

### `max_occlusion_queries`

```rust
max_occlusion_queries: u32
```

_No documentation provided._

<a id="rustdoc-item-1492"></a>

### `current_timestamp_query`

```rust
current_timestamp_query: std::cell::Cell<u32>
```

_No documentation provided._

<a id="rustdoc-item-1494"></a>

### `current_pipeline_statistics_query`

```rust
current_pipeline_statistics_query: std::cell::Cell<u32>
```

_No documentation provided._

<a id="rustdoc-item-1495"></a>

### `current_occlusion_query`

```rust
current_occlusion_query: std::cell::Cell<u32>
```

_No documentation provided._

<a id="rustdoc-item-1496"></a>

### `timestamp_buffers`

```rust
timestamp_buffers: Vec<Option<ResolveSlot>>
```

_No documentation provided._

<a id="rustdoc-item-1498"></a>

### `pipeline_statistics_buffers`

```rust
pipeline_statistics_buffers: Vec<Option<ResolveSlot>>
```

_No documentation provided._

<a id="rustdoc-item-1499"></a>

### `occlusion_buffers`

```rust
occlusion_buffers: Vec<Option<ResolveSlot>>
```

_No documentation provided._

<a id="rustdoc-item-1500"></a>

### `timestamp_query_result_bytes`

```rust
timestamp_query_result_bytes: u64
```

_No documentation provided._

<a id="rustdoc-item-1501"></a>

### `pipeline_statistics_query_result_bytes`

```rust
pipeline_statistics_query_result_bytes: u64
```

_No documentation provided._

<a id="rustdoc-item-1502"></a>

### `frame_index`

```rust
frame_index: usize
```

_No documentation provided._

<a id="rustdoc-item-1503"></a>

### `timestamp_period_nanoseconds`

```rust
timestamp_period_nanoseconds: f32
```

_No documentation provided._

<a id="rustdoc-item-1504"></a>

### `timeline`

```rust
timeline: Option<pill_core::profiling::GpuTimeline>
```

_No documentation provided._

<a id="rustdoc-item-1506"></a>

### `timeline_api`

```rust
timeline_api: Option<pill_core::profiling::GpuApi>
```

_No documentation provided._

<a id="rustdoc-item-1508"></a>

### `timeline_generation`

```rust
timeline_generation: u64
```

_No documentation provided._

<a id="rustdoc-item-1509"></a>

### `frames`

```rust
frames: Vec<FrameRecord>
```

_No documentation provided._

<a id="rustdoc-item-1511"></a>

### `skipping_frame`

```rust
skipping_frame: bool
```

_No documentation provided._

<a id="rustdoc-item-1512"></a>

### `latest_timings`

```rust
latest_timings: Vec<(String, f32)>
```

_No documentation provided._

<a id="rustdoc-item-1513"></a>

### `latest_statistics`

```rust
latest_statistics: Vec<pill_core::profiling::GpuStatistics>
```

_No documentation provided._

<a id="rustdoc-item-1515"></a>

### `latest_occlusion`

```rust
latest_occlusion: Vec<u64>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1516"></a>

### `new`

```rust
pub fn new(device: &Device, queue: &Queue, max_timestamp_queries: u32, max_pipeline_statistics_queries: u32, pipeline_statistics_types: PipelineStatisticsTypes, max_occlusion_queries: u32) -> Self;
```

Creates a profiler for `device` and `queue`.

Each `max_*` argument is a per-frame cap. Recording past a cap is
refused with a warning in the log instead of overwriting an earlier
query of the same kind.

A query set for a feature-gated category is created only when the
device was created with that feature. An adapter that offers a feature
is not enough, because the device has to request it (see
[`GPU_PROFILE_FEATURES`](constant.GPU_PROFILE_FEATURES.md#rustdoc-item-1477)). On a device without the timestamp or
pipeline statistics features, the matching readers always answer
`None`. Occlusion queries need no feature in wgpu, so only the cap
decides whether that set exists.

<a id="rustdoc-item-1518"></a>

### `attach_timeline`

```rust
pub fn attach_timeline(self: &mut Self, api: GpuApi);
```

Sets the API that Tracy labels the GPU timeline with.

The timeline is created later, when a profiler connects. Tracy drops
every event until one connects, so a timeline created earlier would
never be announced, and Tracy would receive zones for a timeline it
does not know. [`Self::follow_profiler_connection`](#rustdoc-item-1517) creates it.

Does nothing when the device has no timestamp queries.

<a id="rustdoc-item-1517"></a>

### `follow_profiler_connection`

```rust
pub(in profiler) fn follow_profiler_connection(self: &mut Self, device: &Device, queue: &Queue);
```

Creates the GPU timeline when a profiler connects, and drops it when
the profiler disconnects, so every connection gets its own timeline.

Tracy aligns GPU time with CPU time using one timestamp taken when the
timeline is created. Creating it therefore records one timestamp,
submits it and waits for it, which stalls once per connection.

<a id="rustdoc-item-1519"></a>

### `forget_pending_spans`

```rust
pub(in profiler) fn forget_pending_spans(self: &mut Self);
```

Releases every zone that is still waiting for its timestamps, without
telling Tracy. These zones belong to a timeline the profiler no longer
knows, so sending their end there would point at nothing.

<a id="rustdoc-item-1520"></a>

### `begin_frame`

```rust
pub fn begin_frame(self: &mut Self, device: &Device, queue: &Queue);
```

Starts a frame: collects the results of earlier frames that are ready,
then resets this frame's query counters.

When this frame's ring slot is still waiting for its readback, the GPU
is further behind than the ring is deep. The frame then records no
queries, rather than overwrite results nobody has read yet.

<a id="rustdoc-item-1521"></a>

### `end_frame`

```rust
pub fn end_frame(self: &mut Self);
```

Ends the frame once it was submitted, and moves the ring on.

When the frame recorded queries, this starts their readbacks without
waiting for them. A later [`Self::begin_frame`](#rustdoc-item-1520) collects the results
once the GPU is done. The ring then advances, so the next frame
resolves into another slot.

<a id="rustdoc-item-1523"></a>

### `collect_finished_frames`

```rust
pub(in profiler) fn collect_finished_frames(self: &mut Self);
```

Collects every ring slot whose readbacks are done. It uploads the
slot's timestamps to their Tracy zones, plots its statistics, and keeps
the timings, statistics and occlusion counts for [`Self::log_latest`](#rustdoc-item-1522).

<a id="rustdoc-item-1522"></a>

### `log_latest`

```rust
pub fn log_latest(self: &Self, viewport_pixels: u64);
```

Logs the latest timings, occlusion samples and pipeline statistics that
were read back, without waiting for the GPU.

`viewport_pixels` is the drawable area of the frame in pixels. The
occlusion block reports its total visible samples as a share of it.
Pass `0` to report raw counts without a percentage.

<a id="rustdoc-item-1525"></a>

### `get_timestamp_query_set`

```rust
pub fn get_timestamp_query_set(self: &Self) -> Option<&QuerySet>;
```

Returns the timestamp query set, or `None` when the device was created
without the timestamp features or the cap was zero.

For a caller that writes timestamps itself. Prefer
[`Self::write_timestamp`](#rustdoc-item-1524), which also keeps the query indices and names
that the summaries use.

<a id="rustdoc-item-1524"></a>

### `write_timestamp`

```rust
pub fn write_timestamp(self: &mut Self, encoder: &mut CommandEncoder, name: &str) -> Option<u32>;
```

Writes a timestamp for the region called `name` and returns its query
index.

Call it twice around the region to time. The pair's ticks are the
region's GPU time, and the pair is reported under the name given to the
first call.

<a id="rustdoc-item-1526"></a>

### `resolve_timestamp_queries`

```rust
pub fn resolve_timestamp_queries(self: &mut Self, device: &wgpu::Device, encoder: &mut wgpu::CommandEncoder);
```

Resolves the timestamps recorded this frame into the current ring slot.

<a id="rustdoc-item-1527"></a>

### `timestamp_ticks_to_ms`

```rust
pub fn timestamp_ticks_to_ms(self: &Self, delta_ticks: u64) -> f32;
```

Converts a delta of timestamp ticks to milliseconds.

<a id="rustdoc-item-1528"></a>

### `pipeline_statistics_query_set`

```rust
pub fn pipeline_statistics_query_set(self: &Self) -> Option<(&QuerySet, PipelineStatisticsTypes)>;
```

Returns the pipeline statistics query set together with the statistics
types it was created for, for a caller that begins and ends the queries
itself.

<a id="rustdoc-item-1529"></a>

### `begin_pipeline_statistics_query`

```rust
pub fn begin_pipeline_statistics_query(self: &Self, render_pass: &mut wgpu::RenderPass<'_>) -> Option<u32>;
```

Begins a pipeline statistics query in `render_pass` and returns its
index.

<a id="rustdoc-item-1530"></a>

### `end_pipeline_statistics_query`

```rust
pub fn end_pipeline_statistics_query(self: &Self, render_pass: &mut wgpu::RenderPass<'_>);
```

Ends the pipeline statistics query most recently begun in
`render_pass`.

Pairs with [`Self::begin_pipeline_statistics_query`](#rustdoc-item-1529). The counters can
be read once the frame's queries are resolved.

<a id="rustdoc-item-1531"></a>

### `resolve_pipeline_statistics_queries`

```rust
pub fn resolve_pipeline_statistics_queries(self: &mut Self, device: &Device, encoder: &mut CommandEncoder);
```

Resolves this frame's pipeline statistics queries into the current ring
slot.

Does nothing when the feature is unsupported or no query was begun this
frame. In that case the slot keeps whatever the previous resolve put
there.

<a id="rustdoc-item-1533"></a>

### `get_occlusion_query_set`

```rust
pub fn get_occlusion_query_set(self: &Self) -> Option<&QuerySet>;
```

Exposes the occlusion query set for a geometry pass's
`RenderPassDescriptor.occlusion_query_set`.

`None` when the cap was zero. A pass begins its queries through
[`Self::begin_occlusion_query`](#rustdoc-item-1532), which also refuses during a skipped
frame.

<a id="rustdoc-item-1532"></a>

### `begin_occlusion_query`

```rust
pub fn begin_occlusion_query(self: &Self, render_pass: &mut wgpu::RenderPass<'_>) -> Option<u32>;
```

Begins the next occlusion query in `render_pass` and returns its index.

One query per geometry pass counts the samples that passed the depth
and stencil tests while it was open, so the pass's visible coverage is
read back as one number.

<a id="rustdoc-item-1534"></a>

### `end_occlusion_query`

```rust
pub fn end_occlusion_query(self: &Self, render_pass: &mut wgpu::RenderPass<'_>);
```

Ends the occlusion query most recently begun in `render_pass`.

Pairs with [`Self::begin_occlusion_query`](#rustdoc-item-1532). The sample counts can be
read once the frame's queries are resolved.

<a id="rustdoc-item-1535"></a>

### `resolve_occlusion_queries`

```rust
pub fn resolve_occlusion_queries(self: &mut Self, device: &Device, encoder: &mut CommandEncoder);
```

Resolves this frame's occlusion queries into the current ring slot.

Does nothing when no query set exists or no query was begun this frame,
like [`Self::resolve_pipeline_statistics_queries`](#rustdoc-item-1531).

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSend`
