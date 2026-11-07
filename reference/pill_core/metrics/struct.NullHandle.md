<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1018"></a>

# Struct `pill_core::metrics::NullHandle`

```rust
pub(in metrics) struct NullHandle;
```

Visibility: `{'restricted': {'parent': 945, 'path': '::metrics'}}` · Source: `engine\pill_core\src\metrics.rs:173`

A handle that drops every update.

Counters get this handle in every build, and gauges and histograms get it
when the `tracy` feature is off. The recorder keeps no copy of the values,
so an update here is a call that does nothing. The handle exists because
`metrics` asks for one every time a metric is registered.

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
- `CounterFn`
- `GaugeFn`
- `HistogramFn`
