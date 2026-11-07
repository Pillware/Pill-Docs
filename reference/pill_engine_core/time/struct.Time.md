<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6083"></a>

# Struct `pill_engine_core::time::Time`

```rust
pub struct Time;
```

Source: `engine\pill_engine_core\src\time.rs:66`

Frame timing for the running project: how long the frame took, how much
time has passed and how far to advance the simulation.

The engine creates the clock and inserts it into the world. Read it from any
system:

```no_run
# use pill_engine::*;
fn movement(time: Res<Time>) {
    let Some(time) = time.get() else { return };
    let _step = 100.0 * time.delta_seconds();
}
```

Every value describes the frame being processed and does not change while
that frame runs, so two systems in one frame always agree.

## Fields

<a id="rustdoc-item-8579"></a>

### `started_at`

```rust
started_at: pill_core::platform::Instant
```

The instant the clock started, which is when the engine was created.

<a id="rustdoc-item-8580"></a>

### `frame_start`

```rust
frame_start: pill_core::platform::Instant
```

When the current frame began.

<a id="rustdoc-item-8581"></a>

### `elapsed`

```rust
elapsed: std::time::Duration
```

Wall-clock time from `started_at` to the current frame's start.

<a id="rustdoc-item-8582"></a>

### `last_frame`

```rust
last_frame: std::time::Duration
```

Unclamped duration of the frame before this one.

<a id="rustdoc-item-8583"></a>

### `delta`

```rust
delta: std::time::Duration
```

`last_frame` capped at [`MAXIMUM_DELTA_SECONDS`](constant.MAXIMUM_DELTA_SECONDS.md#rustdoc-item-8577); gameplay advances by
this value.

<a id="rustdoc-item-8584"></a>

### `frame_count`

```rust
frame_count: u64
```

Frames started since the clock was created, counting the current one.

This is not the world's change tick. That counter orders change
detection and also increases at other times, such as when a mutable
query starts iterating. This counter only counts frames, so a periodic
task can use it.

## Associated functions and methods

<a id="rustdoc-item-8585"></a>

### `new`

```rust
pub fn new() -> Self;
```

Starts a clock with its origin at the current instant.

The first frame reports a delta of zero. No frame has ended yet, so there
is no real duration to report, and an invented one would show up as a
visible jump on the first frame.

<a id="rustdoc-item-8586"></a>

### `advance`

```rust
pub(crate) fn advance(self: &mut Self);
```

Moves the clock to the next frame and measures the frame that just
ended.

[`Engine::process_frame`](../engine/struct.Engine.md#rustdoc-item-4330) calls it
at the top of each frame, before systems run.

<a id="rustdoc-item-8587"></a>

### `frame_count`

```rust
pub fn frame_count(self: &Self) -> u64;
```

Returns the number of the frame being processed.

The value is `1` during the first frame. Use it to run something every
so many frames: `time.frame_count() % 100 == 0`.

<a id="rustdoc-item-8589"></a>

### `elapsed_milliseconds`

```rust
pub fn elapsed_milliseconds(self: &Self) -> u128;
```

Returns the milliseconds elapsed since the project started.

The value is a `u128`, the type [`Duration::as_millis`] returns.
Narrowing it here would cut large values off without any warning.

<a id="rustdoc-item-8590"></a>

### `elapsed_seconds`

```rust
pub fn elapsed_seconds(self: &Self) -> f32;
```

Returns the seconds elapsed since the project started.

<a id="rustdoc-item-8576"></a>

### `elapsed`

```rust
pub fn elapsed(self: &Self) -> Duration;
```

Returns the time elapsed since the project started.

<a id="rustdoc-item-8592"></a>

### `last_frame_milliseconds`

```rust
pub fn last_frame_milliseconds(self: &Self) -> f32;
```

Returns how long the previous frame took, in milliseconds.

Unlike [`Self::delta_seconds`](#rustdoc-item-8591), this value is not capped: it is a
measurement, so a frame that really took 400 ms reports 400 ms. Use it
for diagnostics and frame-time displays, never to advance motion.

<a id="rustdoc-item-8593"></a>

### `last_frame`

```rust
pub fn last_frame(self: &Self) -> Duration;
```

Returns how long the previous frame took.

<a id="rustdoc-item-8591"></a>

### `delta_seconds`

```rust
pub fn delta_seconds(self: &Self) -> f32;
```

Returns the seconds to advance the simulation by during this frame.

This is the previous frame's duration, capped at
[`MAXIMUM_DELTA_SECONDS`](constant.MAXIMUM_DELTA_SECONDS.md#rustdoc-item-8577) so a stalled frame cannot move a physics step
through geometry. Gameplay multiplies motion by this value.

<a id="rustdoc-item-8594"></a>

### `delta_milliseconds`

```rust
pub fn delta_milliseconds(self: &Self) -> f32;
```

Returns the milliseconds to advance the simulation by during this frame.

<a id="rustdoc-item-8595"></a>

### `delta`

```rust
pub fn delta(self: &Self) -> Duration;
```

Returns the duration to advance the simulation by during this frame.

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
- `Resource`
- `Default`
- `Debug`
