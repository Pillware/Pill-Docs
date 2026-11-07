<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-947"></a>

# Struct `pill_core::metrics::TracyForwardingState`

```rust
pub(in metrics) struct TracyForwardingState;
```

Visibility: `{'restricted': {'parent': 945, 'path': '::metrics'}}` · Source: `engine\pill_core\src\metrics.rs:39`

The state shared by the recorder and the handles it hands out: the cache
of plot names, and the flag that says whether forwarding to Tracy is on.

## Fields

<a id="rustdoc-item-941"></a>

### `plot_names_by_metric_name`

```rust
plot_names_by_metric_name: std::sync::Mutex<std::collections::HashMap<String, tracy_client::PlotName>>
```

_No documentation provided._

<a id="rustdoc-item-946"></a>

### `tracy_forwarding_enabled`

```rust
tracy_forwarding_enabled: bool
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-948"></a>

### `emit_tracy_plot`

```rust
pub(in metrics) fn emit_tracy_plot(self: &Self, metric_name: &str, sample_value: f64);
```

Pushes one point into a native Tracy plot when a profiler is connected.

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
