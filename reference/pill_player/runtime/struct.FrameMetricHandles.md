<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-313"></a>

# Struct `pill_player::runtime::FrameMetricHandles`

```rust
pub(in runtime) struct FrameMetricHandles;
```

Visibility: `{'restricted': {'parent': 284, 'path': '::runtime'}}` · Source: `hosting\pill_player\src\runtime.rs:343`

The two `metrics` handles a frame records through, resolved once.

A `metrics::histogram!(..)` or `metrics::gauge!(..)` call looks its name up
in the global registry, which builds and hashes a key every time it runs.
That is wasted work per frame for a handle that never changes, so both names
are resolved on the first frame the `Runtime` runs - by then a frontend has
installed its recorder - and the handles are kept for the rest of its life.

## Fields

<a id="rustdoc-item-352"></a>

### `frame_time`

```rust
frame_time: metrics::Histogram
```

The caller's frame time, from the start it passed in to the end of the
systems.

<a id="rustdoc-item-354"></a>

### `frames_per_second`

```rust
frames_per_second: metrics::Gauge
```

The rate the reporting window measured.

## Associated functions and methods

<a id="rustdoc-item-356"></a>

### `resolve`

```rust
pub(in runtime) fn resolve() -> Self;
```

Resolve both handles against the recorder installed right now.

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
