<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1729"></a>

# Struct `pill_core::telemetry::LoggingConfig`

```rust
pub struct LoggingConfig;
```

Source: `engine\pill_core\src\telemetry.rs:124`

Per-target logging levels expressed as strict `EnvFilter` directives.

A configuration holds one baseline level and a list of per-target
overrides. [`LoggingConfig::build_env_filter`](#rustdoc-item-1728) parses both strictly: an
invalid directive is a configuration error, never a silent fallback to
`INFO`.

## Fields

<a id="rustdoc-item-1724"></a>

### `baseline`

```rust
baseline: tracing::level_filters::LevelFilter
```

Baseline level applied before any target-specific directive.

<a id="rustdoc-item-1727"></a>

### `directives`

```rust
directives: Vec<(String, tracing::level_filters::LevelFilter)>
```

Ordered `(target, level)` overrides.

## Associated functions and methods

<a id="rustdoc-item-1730"></a>

### `new`

```rust
pub fn new() -> Self;
```

Create an empty logging configuration (baseline `INFO`, no overrides).

<a id="rustdoc-item-1731"></a>

### `with_baseline`

```rust
pub fn with_baseline(self: Self, baseline: tracing::level_filters::LevelFilter) -> Self;
```

Set the baseline level applied to every target without an override.

<a id="rustdoc-item-1732"></a>

### `with_directive`

```rust
pub fn with_directive<impl Into<String>: Into<String>>(self: Self, target: impl Into<String>, level: tracing::level_filters::LevelFilter) -> Self;
```

Override the level of one static target (for example
`telemetry_target::RENDERING`). Use `LevelFilter::OFF` to silence a
target entirely.

<a id="rustdoc-item-1733"></a>

### `default_engine`

```rust
pub fn default_engine() -> Self;
```

The default configuration for a game host.

Engine logs are `INFO`, except resource loading, which is off. The
renderer's per-shader and per-material detail stays at `DEBUG`.
Developer scratch logs are enabled when the `dev-logs` feature is on,
and `wgpu` and `naga` are reduced to warnings.

<a id="rustdoc-item-1728"></a>

### `build_env_filter`

```rust
pub fn build_env_filter(self: &Self) -> Result<EnvFilter, TelemetryError>;
```

Build a strict [`EnvFilter`] from this configuration.

#### Errors

Returns [`TelemetryError::InvalidFilter`](enum.TelemetryError.md#rustdoc-item-1735) when the baseline level
cannot form a filter, and [`TelemetryError::InvalidDirective`](enum.TelemetryError.md#rustdoc-item-1736) when any
configured directive fails to parse.

#### Examples

```
use pill_core::telemetry::LoggingConfig;
use pill_core::tracing::level_filters::LevelFilter;

let logging_config = LoggingConfig::new()
    .with_directive("engine::ecs", LevelFilter::DEBUG);
let filter = logging_config.build_env_filter().expect("directive must parse");
```

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
- `Debug`
- `Clone`
- `Default`
