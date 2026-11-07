<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1202"></a>

# Struct `pill_core::telemetry::TelemetryBuilder`

```rust
pub struct TelemetryBuilder;
```

Source: `engine\pill_core\src\telemetry.rs:619`

Configures and installs the engine's telemetry subscriber stack.

Set up the layers with the `with_*` methods, then call
[`TelemetryBuilder::init`](#rustdoc-item-1911) once per process. The terminal and file layers
are filtered independently and both are live-reloadable through
[`TelemetryHandles::reload_logging_config`](struct.TelemetryHandles.md#rustdoc-item-1912) and
[`TelemetryHandles::reload_file_config`](struct.TelemetryHandles.md#rustdoc-item-1913). The Tracy layer only ever sees
`profile::*` targets.

## Fields

<a id="rustdoc-item-1905"></a>

### `logging`

```rust
logging: LoggingConfig
```

_No documentation provided._

<a id="rustdoc-item-1906"></a>

### `file_logging`

```rust
file_logging: Option<(LoggingConfig, std::path::PathBuf)>
```

_No documentation provided._

<a id="rustdoc-item-1908"></a>

### `capture`

```rust
capture: Option<capture::LogBuffer>
```

_No documentation provided._

<a id="rustdoc-item-1909"></a>

### `tracy_enabled`

```rust
tracy_enabled: bool
```

_No documentation provided._

<a id="rustdoc-item-1910"></a>

### `fine_profiling_enabled`

```rust
fine_profiling_enabled: bool
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1914"></a>

### `new`

```rust
pub fn new() -> Self;
```

Create a builder with the default engine logging configuration.

#### Examples

```
use pill_core::telemetry::TelemetryBuilder;

let builder = TelemetryBuilder::new();
```

<a id="rustdoc-item-1915"></a>

### `with_capture`

```rust
pub fn with_capture(self: Self, buffer: capture::LogBuffer) -> Self;
```

Capture `info` and above into a bounded in-process ring.

The editor's console panel reads the ring; the terminal and file layers
are unaffected. Every line in the ring is an owned copy, so the ring
never holds a pointer into the module that logged it.

<a id="rustdoc-item-1916"></a>

### `with_logging_config`

```rust
pub fn with_logging_config(self: Self, logging_config: LoggingConfig) -> Self;
```

Replace the terminal logging configuration.

<a id="rustdoc-item-1917"></a>

### `with_file_output`

```rust
pub fn with_file_output<impl Into<PathBuf>: Into<PathBuf>>(self: Self, file_logging_config: LoggingConfig, directory: impl Into<PathBuf>) -> Self;
```

Add a file logging layer with its own filter. The file rotates daily.

#### Examples

```
use pill_core::telemetry::{LoggingConfig, TelemetryBuilder};

let builder = TelemetryBuilder::new().with_file_output(
    LoggingConfig::new(),
    std::env::temp_dir(),
);
```

<a id="rustdoc-item-1370"></a>

### `with_tracy`

```rust
pub fn with_tracy(self: Self, enabled: bool) -> Self;
```

Turn the Tracy layer on or off. It carries only the `profile::*`
targets, and a `TracyZone` asks this filter whether the profiler wants
its zone.

<a id="rustdoc-item-1918"></a>

### `with_fine_profiling`

```rust
pub fn with_fine_profiling(self: Self, enabled: bool) -> Self;
```

Also send `profile::fine` spans to the Tracy layer, for temporary deep
investigation.

<a id="rustdoc-item-1911"></a>

### `init`

```rust
pub fn init(self: Self) -> Result<TelemetryHandles, TelemetryError>;
```

Build, install, and return the reload handles.

Installs the subscriber stack once per process; a later call returns the
handles of that first install without reinstalling. Concurrent callers
are serialized so only one ever touches the global subscriber.

#### Errors

Returns [`TelemetryError::InvalidFilter`](enum.TelemetryError.md#rustdoc-item-1735) or
[`TelemetryError::InvalidDirective`](enum.TelemetryError.md#rustdoc-item-1736) when a configured filter cannot be
parsed, and [`TelemetryError::FileOutput`](enum.TelemetryError.md#rustdoc-item-1919) when the log file cannot be
opened. A call made after a failed install returns
[`TelemetryError::InstallFailed`](enum.TelemetryError.md#rustdoc-item-1920), which repeats the first failure.

#### Examples

```
use pill_core::telemetry::TelemetryBuilder;

let handles = TelemetryBuilder::new()
    .init()
    .expect("default configuration installs cleanly");
```

<a id="rustdoc-item-1922"></a>

### `install`

```rust
pub(in telemetry) fn install(self: Self) -> Result<TelemetryHandles, TelemetryError>;
```

Build the full subscriber stack (terminal, optional file, optional
capture ring, optional Tracy) and install it as the process-wide default
subscriber.

Invoked exactly once per process by [`Self::init`](#rustdoc-item-1911), through its
`OnceLock`.

#### Errors

Returns what [`LoggingConfig::build_env_filter`](struct.LoggingConfig.md#rustdoc-item-1728) reports for an invalid
filter, and [`TelemetryError::FileOutput`](enum.TelemetryError.md#rustdoc-item-1919) when the log file cannot be
opened.

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
