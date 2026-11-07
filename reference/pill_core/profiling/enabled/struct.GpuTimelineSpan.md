<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1281"></a>

# Struct `pill_core::profiling::enabled::GpuTimelineSpan`

```rust
pub struct GpuTimelineSpan;
```

Source: `engine\pill_core\src\profiling.rs:414`

One GPU zone of a [`GpuTimeline`](struct.GpuTimeline.md#rustdoc-item-1277).

It is begun and ended as its commands are recorded, and it is timed
once the GPU's timestamps are read back. A span dropped before its
timestamps are uploaded is placed at the start of the timeline, so it
does not overlap the real zones.

## Fields

<a id="rustdoc-item-1305"></a>

### `span`

```rust
span: std::mem::ManuallyDrop<tracy_client::GpuSpan>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1307"></a>

### `end`

```rust
pub fn end(self: &mut Self);
```

Marks the end of the zone's commands, recorded now.

<a id="rustdoc-item-1279"></a>

### `upload`

```rust
pub fn upload(self: &Self, start_timestamp: i64, end_timestamp: i64);
```

Gives the zone the GPU timestamps, in ticks, of its start and end.

<a id="rustdoc-item-1308"></a>

### `discard`

```rust
pub fn discard(self: Self);
```

Drops the zone without reporting anything to Tracy.

It is for a zone whose timeline the profiler no longer knows: a
normal drop would send its end there.

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
