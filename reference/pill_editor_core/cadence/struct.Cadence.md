<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-670"></a>

# Struct `pill_editor_core::cadence::Cadence`

```rust
pub struct Cadence;
```

Source: `editor\pill_editor_core\src\cadence.rs:107`

The editor's redraw counters, and the mode that sets when it draws next.

## Fields

<a id="rustdoc-item-665"></a>

### `continuous`

```rust
continuous: bool
```

_No documentation provided._

<a id="rustdoc-item-667"></a>

### `frames`

```rust
frames: u64
```

Frames drawn since startup.

<a id="rustdoc-item-668"></a>

### `demanded`

```rust
demanded: u64
```

Frames drawn because something asked for one; the continuous mode
counts every frame.

<a id="rustdoc-item-669"></a>

### `waits`

```rust
waits: u64
```

Times the loop went to sleep instead of drawing.

## Associated functions and methods

<a id="rustdoc-item-671"></a>

### `new`

```rust
pub fn new(continuous: bool) -> Self;
```

A cadence with an explicit mode: `continuous` draws every frame,
whatever the demand is.

<a id="rustdoc-item-672"></a>

### `from_environment`

```rust
pub fn from_environment() -> Self;
```

A cadence chosen from the environment: continuous when
[`CONTINUOUS_REDRAW_ENV`](constant.CONTINUOUS_REDRAW_ENV.md#rustdoc-item-570) is set to anything except an empty string or
`0`.

<a id="rustdoc-item-673"></a>

### `continuous`

```rust
pub fn continuous(self: &Self) -> bool;
```

Whether every frame is drawn regardless of demand.

<a id="rustdoc-item-674"></a>

### `frames`

```rust
pub fn frames(self: &Self) -> u64;
```

Frames drawn since startup.

<a id="rustdoc-item-675"></a>

### `demanded`

```rust
pub fn demanded(self: &Self) -> u64;
```

Frames drawn because something asked for one; the continuous mode
counts every frame.

<a id="rustdoc-item-676"></a>

### `waits`

```rust
pub fn waits(self: &Self) -> u64;
```

How many times the loop slept between frames.

<a id="rustdoc-item-677"></a>

### `record_frame`

```rust
pub fn record_frame(self: &mut Self, demand: FrameDemand);
```

Count the frame the loop just drew.

<a id="rustdoc-item-678"></a>

### `record_wait`

```rust
pub fn record_wait(self: &mut Self);
```

Count a sleep the loop took.

<a id="rustdoc-item-580"></a>

### `decide`

```rust
pub fn decide(self: &Self, demand: FrameDemand) -> FrameWake;
```

Decide when to draw next.

The loop draws at once when the cadence is continuous, when
[`FrameDemand::urgent`](struct.FrameDemand.md#rustdoc-item-581) is set, while something is moving, or when egui
asked for a repaint. Otherwise the frame sleeps for [`IDLE_POLL`](constant.IDLE_POLL.md#rustdoc-item-571).

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `SerializableAny`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
- `Default`
