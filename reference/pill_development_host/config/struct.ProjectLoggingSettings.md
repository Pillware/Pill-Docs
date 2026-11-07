<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1094"></a>

# Struct `pill_development_host::config::ProjectLoggingSettings`

```rust
pub struct ProjectLoggingSettings;
```

Source: `hosting\pill_development_host\src\config.rs:527`

The `logging:` section of `project_settings.yaml`, as written.

```yaml
logging:
  level: info                 # every target, replacing the engine's defaults
  targets:                    # per target, applied last
    engine::rendering: info
```

Read as text and checked by [`Self::validate`](#rustdoc-item-1093), so a misspelled level is
an error naming it rather than a serde message about an enum.

## Fields

<a id="rustdoc-item-1088"></a>

### `level`

```rust
level: Option<String>
```

One level for every target: `off`, `error`, `warn`, `info`, `debug` or
`trace`.

<a id="rustdoc-item-1089"></a>

### `timestamp`

```rust
timestamp: Option<String>
```

How each line writes its local time: `date_time` or `time`.

<a id="rustdoc-item-1090"></a>

### `source_location`

```rust
source_location: Option<bool>
```

Whether each line ends with its source `file:line` (default false).

<a id="rustdoc-item-1091"></a>

### `targets`

```rust
targets: std::collections::BTreeMap<String, String>
```

Per-target levels, by `tracing` target or target prefix.

## Associated functions and methods

<a id="rustdoc-item-1093"></a>

### `validate`

```rust
pub fn validate(self: &Self, path: &Path) -> Result<pill_player::LoggingSettings, ConfigError>;
```

Check every level and target, and turn them into the runtime's form.

#### Errors

Returns [`ConfigError::InvalidLoggingSettings`] naming the first level
or target that does not read.

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
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Deserialize<'de>`
