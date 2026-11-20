<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1765"></a>

# Struct `pill_development_host::csharp::ManagedReloadSummary`

```rust
pub(crate) struct ManagedReloadSummary;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\csharp\mod.rs:294`

A finished managed reload, broken down by phase, in milliseconds.

## Fields

<a id="rustdoc-item-1842"></a>

### `detect_ms`

```rust
detect_ms: f64
```

Save to signal, the debounce wait included; `NaN` when the watcher
could not measure it.

<a id="rustdoc-item-1843"></a>

### `queue_ms`

```rust
queue_ms: f64
```

Signal to the frame loop consuming it.

<a id="rustdoc-item-1844"></a>

### `build_ms`

```rust
build_ms: f64
```

Consume to rebuilt assembly; `NaN` when no build was recorded.

<a id="rustdoc-item-1845"></a>

### `swap_ms`

```rust
swap_ms: f64
```

Rebuilt assembly to the loader's swap; measured from the signal when no
build was recorded.

## Associated functions and methods

<a id="rustdoc-item-1846"></a>

### `stage_ms`

```rust
pub(crate) fn stage_ms(self: &Self) -> f64;
```

The report's `stage` phase: the watcher's debounce plus the wait for the
frame loop, which is everything that precedes the build here.

The native report's `stage` is everything before its cargo build, so
adding the two waits is the honest mapping rather than two phases the
shared grammar has no name for. A `NaN` detect contributes nothing.

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
