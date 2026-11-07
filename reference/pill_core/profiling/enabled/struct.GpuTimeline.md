<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1277"></a>

# Struct `pill_core::profiling::enabled::GpuTimeline`

```rust
pub struct GpuTimeline;
```

Source: `engine\pill_core\src\profiling.rs:355`

Shows GPU work as zones on a track of its own in Tracy, beside the CPU
threads.

Every call into Tracy's C API happens in a function of this crate that
is never inlined, for the reason given on `DirectZone`: those functions
exist only inside `pill_core.dll`.

## Fields

<a id="rustdoc-item-1275"></a>

### `context`

```rust
context: std::mem::ManuallyDrop<tracy_client::GpuContext>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1278"></a>

### `new`

```rust
pub fn new(name: &str, api: GpuApi, gpu_timestamp: i64, period_nanoseconds: f32) -> Option<Self>;
```

Creates a timeline whose clock reads `gpu_timestamp` now.

One tick of that clock lasts `period_nanoseconds`. Returns `None`
when Tracy is not running, or when the process has already created
Tracy's 255 GPU contexts.

<a id="rustdoc-item-1280"></a>

### `begin_span`

```rust
pub fn begin_span(self: &Self, name: &str, file: &str, line: u32) -> Option<GpuTimelineSpan>;
```

Opens a GPU zone called `name`, recorded now on the calling thread.
Its GPU start and end arrive later through
[`GpuTimelineSpan::upload`](struct.GpuTimelineSpan.md#rustdoc-item-1279). `None` when Tracy has too many spans
waiting for their timestamps.

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
- `Drop`
