<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1092"></a>

# Struct `pill_core::metrics::TracyPlotHistogram`

```rust
pub(in metrics) struct TracyPlotHistogram;
```

Visibility: `{'restricted': {'parent': 955, 'path': '::metrics'}}` · Source: `engine\pill_core\src\metrics.rs:211`

The histogram handle that sends every recorded sample to a Tracy plot.

## Fields

<a id="rustdoc-item-1090"></a>

### `metric_name`

```rust
metric_name: String
```

_No documentation provided._

<a id="rustdoc-item-1091"></a>

### `tracy_forwarding_state`

```rust
tracy_forwarding_state: std::sync::Weak<TracyForwardingState>
```

_No documentation provided._

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
- `HistogramFn`
