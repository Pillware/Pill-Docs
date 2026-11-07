<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-311"></a>

# Struct `pill_player::runtime::FrameStatistics`

```rust
pub(in runtime) struct FrameStatistics;
```

Visibility: `{'restricted': {'parent': 284, 'path': '::runtime'}}` · Source: `hosting\pill_player\src\runtime.rs:508`

The frame rate, measured over the window the frame loop reports at.

The live rate a frontend displays and the line the loop logs are both
computed from these counters, so they measure the same thing.

## Fields

<a id="rustdoc-item-465"></a>

### `frame_count`

```rust
frame_count: u64
```

Frames counted since the window opened.

<a id="rustdoc-item-466"></a>

### `window_started`

```rust
window_started: pill_core::platform::Instant
```

When the window opened.

<a id="rustdoc-item-467"></a>

### `last_fps`

```rust
last_fps: f64
```

The rate the last completed window measured.

## Associated functions and methods

<a id="rustdoc-item-468"></a>

### `new`

```rust
pub(in runtime) fn new() -> Self;
```

Statistics whose first window opens now.

<a id="rustdoc-item-469"></a>

### `count_frame`

```rust
pub(in runtime) fn count_frame(self: &mut Self, now: Instant) -> Option<f64>;
```

Count one frame; returns the finished window's rate, and opens the next
window, once [`FRAME_REPORT_INTERVAL_SECONDS`](constant.FRAME_REPORT_INTERVAL_SECONDS.md#rustdoc-item-285) have passed.

<a id="rustdoc-item-470"></a>

### `frames_per_second`

```rust
pub(in runtime) fn frames_per_second(self: &Self, now: Instant) -> f64;
```

The rate the current window measures so far, or the last completed rate
while it has counted no frame yet.

<a id="rustdoc-item-471"></a>

### `last_measured_fps`

```rust
pub(in runtime) fn last_measured_fps(self: &Self) -> f64;
```

The rate the last completed window measured.

Only the metrics recorder asks for it: the console line reports the rate
of the window that just finished, which the caller already holds.

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
