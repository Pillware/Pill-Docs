<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-973"></a>

# Struct `pill_core::metrics::EngineMetricsRecorder`

```rust
pub struct EngineMetricsRecorder;
```

Source: `engine\pill_core\src\metrics.rs:88`

The process-wide recorder: accepts every `metrics` update and forwards the
ones Tracy can plot.

A gauge `set` and a histogram sample reach a Tracy plot when the `tracy`
feature is on and a profiler is connected. Gauge increments, gauge
decrements and every counter update are dropped.

It implements the full [`Recorder`] surface because the `metrics` crate
requires one. It keeps no store: the only state it holds is the plot-name
cache Tracy needs.

## Fields

<a id="rustdoc-item-970"></a>

### `tracy_forwarding_state`

```rust
tracy_forwarding_state: std::sync::Arc<TracyForwardingState>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-974"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates a recorder with an empty plot-name cache.

Without the `tracy` feature there is no cache, because nothing is
forwarded.

<a id="rustdoc-item-975"></a>

### `try_install`

```rust
pub fn try_install(self: Self) -> Result<(), EngineMetricsRecorder>;
```

Installs this recorder as the process-wide metrics recorder.

#### Errors

Returns the recorder back when another recorder was already installed.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Default`
- `Recorder`
