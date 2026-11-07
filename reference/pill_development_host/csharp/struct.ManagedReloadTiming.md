<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1668"></a>

# Struct `pill_development_host::csharp::ManagedReloadTiming`

```rust
pub(in csharp) struct ManagedReloadTiming;
```

Visibility: `{'restricted': {'parent': 1331, 'path': '::csharp'}}` · Source: `hosting\pill_development_host\src\csharp\mod.rs:295`

One managed reload's armed timing, filled in as its phases complete.

## Fields

<a id="rustdoc-item-1715"></a>

### `detected_at`

```rust
detected_at: pill_core::platform::Instant
```

Instant the project watcher fired the signal this reload came from.

<a id="rustdoc-item-1716"></a>

### `detection_delay_ms`

```rust
detection_delay_ms: f64
```

How long the save waited before the watcher fired the signal, the
debounce wait included; `NaN` when there is no trigger to measure from.
A trigger also carries `NaN` when no file timestamp could be read.

<a id="rustdoc-item-1717"></a>

### `triggered_at`

```rust
triggered_at: pill_core::platform::Instant
```

Instant the frame loop consumed the signal and armed this timing.

<a id="rustdoc-item-1718"></a>

### `rebuilt_assembly`

```rust
rebuilt_assembly: Option<RebuiltAssembly>
```

The rebuilt assembly, once a build recorded it.

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
