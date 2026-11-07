<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1921"></a>

# Struct `pill_core::telemetry::TelemetryHandles`

```rust
pub struct TelemetryHandles;
```

Source: `engine\pill_core\src\telemetry.rs:852`

Handles returned by [`TelemetryBuilder::init`](struct.TelemetryBuilder.md#rustdoc-item-1911) for live configuration.

Holds the reload handles for the terminal and file layers plus the guard
that keeps the non-blocking file writer alive for the process lifetime.

## Fields

<a id="rustdoc-item-1952"></a>

### `logging_filter`

```rust
logging_filter: reload::Handle<tracing_subscriber::EnvFilter, tracing_subscriber::Registry>
```

Reload handle for the terminal logging filter.

<a id="rustdoc-item-1953"></a>

### `file_filter`

```rust
file_filter: Option<reload::Handle<tracing_subscriber::EnvFilter, tracing_subscriber::layer::Layered<tracing_subscriber::filter::Filtered<tracing_subscriber::fmt::Layer<tracing_subscriber::Registry, tracing_subscriber::fmt::format::DefaultFields, EngineTerminalFormatter, crate::platform::log_output::TerminalWriter>, reload::Layer<tracing_subscriber::EnvFilter, tracing_subscriber::Registry>, tracing_subscriber::Registry>, tracing_subscriber::Registry>>>
```

Reload handle for the file logging filter, when a file layer exists.

<a id="rustdoc-item-1954"></a>

### `_file_guard`

```rust
_file_guard: Option<std::sync::Arc<crate::platform::log_output::FileGuard>>
```

Keeps the file writer alive for the app lifetime.

## Associated functions and methods

<a id="rustdoc-item-1912"></a>

### `reload_logging_config`

```rust
pub fn reload_logging_config(self: &Self, logging_config: &LoggingConfig) -> Result<(), TelemetryError>;
```

Reload the terminal logging filter from a [`LoggingConfig`](struct.LoggingConfig.md#rustdoc-item-1729).

#### Errors

Returns [`TelemetryError::InvalidFilter`](enum.TelemetryError.md#rustdoc-item-1735) when the baseline level cannot
form a filter, [`TelemetryError::InvalidDirective`](enum.TelemetryError.md#rustdoc-item-1736) when a directive of
the configuration cannot be parsed, or [`TelemetryError::Reload`](enum.TelemetryError.md#rustdoc-item-1955) when
the reload itself fails. The previous filter stays active either way.

<a id="rustdoc-item-1913"></a>

### `reload_file_config`

```rust
pub fn reload_file_config(self: &Self, file_logging_config: &LoggingConfig) -> Result<(), TelemetryError>;
```

Reload the file logging filter from a [`LoggingConfig`](struct.LoggingConfig.md#rustdoc-item-1729). Does nothing
when no file layer is installed.

#### Errors

As [`Self::reload_logging_config`](#rustdoc-item-1912).

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
