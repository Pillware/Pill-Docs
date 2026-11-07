<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-165"></a>

# Struct `pill_development_host::analytics::CargoTiming`

```rust
pub(crate) struct CargoTiming;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:535`

Per-crate compile+link wall time from the newest cargo `--timings` report.

## Fields

<a id="rustdoc-item-162"></a>

### `crate_durations_ms`

```rust
crate_durations_ms: std::collections::HashMap<String, u64>
```

Crate name → wall time in milliseconds, for crates that actually ran.

<a id="rustdoc-item-164"></a>

### `total_seconds`

```rust
total_seconds: f64
```

The `DURATION = N;` constant: total wall time of that cargo invocation.

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
