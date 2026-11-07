<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1690"></a>

# Struct `pill_development_host::csharp::ManagedReloadSummary`

```rust
pub(crate) struct ManagedReloadSummary;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\csharp\mod.rs:318`

A finished managed reload, broken down by phase, in milliseconds.

## Fields

<a id="rustdoc-item-1768"></a>

### `total_ms`

```rust
total_ms: f64
```

Save to swap: the whole operation. Measured from the edited file's own
timestamp when the watcher could read one, and from the signal
otherwise; `detect_ms` is `NaN` in the second case.

<a id="rustdoc-item-1769"></a>

### `detect_ms`

```rust
detect_ms: f64
```

Save to signal, the debounce wait included; `NaN` when the watcher
could not measure it.

<a id="rustdoc-item-1770"></a>

### `queue_ms`

```rust
queue_ms: f64
```

Signal to the frame loop consuming it.

<a id="rustdoc-item-1771"></a>

### `build_ms`

```rust
build_ms: f64
```

Consume to rebuilt assembly; `NaN` when no build was recorded.

<a id="rustdoc-item-1772"></a>

### `swap_ms`

```rust
swap_ms: f64
```

Rebuilt assembly to the loader's swap; measured from the signal when no
build was recorded.

<a id="rustdoc-item-1773"></a>

### `build_kind`

```rust
build_kind: &'static str
```

What produced the assembly: `"roslyn"`, `"msbuild"`, or `"unknown"`
when no build was recorded.

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
