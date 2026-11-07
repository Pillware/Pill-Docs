<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-698"></a>

# Struct `pill_player::telemetry::LoggingSettings`

```rust
pub struct LoggingSettings;
```

Source: `hosting\pill_player\src\telemetry.rs:68`

A project's logging settings, read from the `logging:` section of its
`project_settings.yaml` and checked by [`Self::from_text`](#rustdoc-item-755).

```yaml
logging:
  level: info                 # every target, replacing the engine's defaults
  timestamp: date_time        # time (default) or date_time
  source_location: true       # end lines with file:line (default false)
  targets:                    # per target, applied last
    engine::rendering: info
    wgpu: error
```

Every key is optional, and an absent section leaves the engine's defaults
as they are.

## Fields

<a id="rustdoc-item-749"></a>

### `level`

```rust
level: Option<tracing::level_filters::LevelFilter>
```

One level for every target. The engine's per-target defaults are
replaced, except that the `wgpu` and `naga` dependency filters stay at
`warn` unless this level is quieter, or a target override names them.

<a id="rustdoc-item-751"></a>

### `timestamp`

```rust
timestamp: Option<pill_core::telemetry::TimestampFormat>
```

How each line writes its local time: `[hh:mm:ss:mmm]` by default, or
`[dd.mm.yyyy hh:mm:ss:mmm]`.

<a id="rustdoc-item-753"></a>

### `source_location`

```rust
source_location: Option<bool>
```

Whether each line ends with the `file:line` that emitted it, in dark
gray. Off unless the settings turn it on.

<a id="rustdoc-item-754"></a>

### `targets`

```rust
targets: Vec<(String, tracing::level_filters::LevelFilter)>
```

Per-target levels, applied after [`Self::level`](#rustdoc-item-749), in the order given.
Each target is a `tracing` target or the start of one, so `engine`
also matches `engine::rendering`.

## Associated functions and methods

<a id="rustdoc-item-756"></a>

### `parse_level`

```rust
pub(in telemetry) fn parse_level(text: &str) -> Result<LevelFilter, String>;
```

Reads one level by name: `off`, `error`, `warn`, `info`, `debug` or
`trace`, in any case.

#### Errors

Returns a message naming the accepted values for anything else.

Private: both host types build their settings through
[`Self::from_text`](#rustdoc-item-755), so the checks are written once here.

<a id="rustdoc-item-757"></a>

### `check_target`

```rust
pub(in telemetry) fn check_target(target: &str) -> Result<(), String>;
```

Checks that a target name contains only letters, digits and the `_`,
`-`, `.`, `:` characters a `tracing` target uses.

#### Errors

Returns a message naming the target when it holds anything else - a
`=`, a `,`, a space - which would otherwise change what the filter
directive means.

Private so the check is written once, like [`Self::parse_level`](#rustdoc-item-756).

<a id="rustdoc-item-755"></a>

### `from_text`

```rust
pub fn from_text(level: Option<&str>, timestamp: Option<&str>, source_location: Option<bool>, targets: &[(&str, &str)]) -> Result<Self, String>;
```

Builds the settings from the text a bundle or a project file carries.

Both host types use this one conversion: a shipping bundle passes the
strings compiled into it, and the development host passes the values it
read from YAML. A level or a target that cannot be read is refused with
the same message in both.

#### Errors

Returns the message of the first level, timestamp format or target that
cannot be read. A bad level inside a target override is prefixed with
that target, so the message says which entry to fix.

<a id="rustdoc-item-758"></a>

### `terminal_logging_config`

```rust
pub fn terminal_logging_config(self: &Self) -> LoggingConfig;
```

Returns the terminal filter these settings ask for, over the engine's
defaults.

<a id="rustdoc-item-760"></a>

### `file_logging_config`

```rust
pub fn file_logging_config(self: &Self) -> LoggingConfig;
```

Returns the file filter these settings ask for, over the file lane's
defaults.

<a id="rustdoc-item-761"></a>

### `apply_to`

```rust
pub(in telemetry) fn apply_to(self: &Self, defaults: LoggingConfig) -> LoggingConfig;
```

Layers these settings over `defaults`.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Clone`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
