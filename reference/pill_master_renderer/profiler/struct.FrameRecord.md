<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1556"></a>

# Struct `pill_master_renderer::profiler::FrameRecord`

```rust
pub(in profiler) struct FrameRecord;
```

Visibility: `{'restricted': {'parent': 1526, 'path': '::profiler'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\profiler.rs:802`

What one ring slot's frame recorded. It is kept until its results are
collected without blocking the frame.

## Fields

<a id="rustdoc-item-1607"></a>

### `spans`

```rust
spans: Vec<Option<pill_core::profiling::GpuTimelineSpan>>
```

The Tracy zone for each timestamp pair, or `None` when no timeline was
attached when the pair began.

<a id="rustdoc-item-1609"></a>

### `timeline_generation`

```rust
timeline_generation: u64
```

The timeline generation the zones began on.

<a id="rustdoc-item-1610"></a>

### `timestamp_names`

```rust
timestamp_names: Vec<String>
```

_No documentation provided._

<a id="rustdoc-item-1611"></a>

### `timestamp_count`

```rust
timestamp_count: u32
```

_No documentation provided._

<a id="rustdoc-item-1612"></a>

### `statistics_count`

```rust
statistics_count: u32
```

_No documentation provided._

<a id="rustdoc-item-1613"></a>

### `occlusion_count`

```rust
occlusion_count: u32
```

_No documentation provided._

<a id="rustdoc-item-1614"></a>

### `timestamp_map`

```rust
timestamp_map: Option<crate::readback::MapState>
```

The timestamp, statistics and occlusion readbacks in flight.

<a id="rustdoc-item-1616"></a>

### `statistics_map`

```rust
statistics_map: Option<crate::readback::MapState>
```

_No documentation provided._

<a id="rustdoc-item-1617"></a>

### `occlusion_map`

```rust
occlusion_map: Option<crate::readback::MapState>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1618"></a>

### `is_ready`

```rust
pub(in profiler) fn is_ready(self: &Self) -> bool;
```

Whether at least one readback was asked for, and all of them finished.

<a id="rustdoc-item-1619"></a>

### `is_waiting`

```rust
pub(in profiler) fn is_waiting(self: &Self) -> bool;
```

Whether this slot still waits for a readback.

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
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Default`
