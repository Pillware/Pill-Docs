<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-659"></a>

# Struct `pill_player::static_project::StaticLogging`

```rust
pub struct StaticLogging;
```

Source: `hosting\pill_player\src\static_project.rs:290`

A project's logging settings, compiled into the binary as text.

Text rather than levels, so the generated bundle names no engine type.
[`Self::settings`](#rustdoc-item-697) reads it into [`LoggingSettings`](../telemetry/struct.LoggingSettings.md#rustdoc-item-698).

## Fields

<a id="rustdoc-item-693"></a>

### `level`

```rust
level: Option<&'static str>
```

The `level:` key, when the settings set one.

<a id="rustdoc-item-694"></a>

### `timestamp`

```rust
timestamp: Option<&'static str>
```

The `timestamp:` key (`date_time` or `time`), when the settings set one.

<a id="rustdoc-item-695"></a>

### `source_location`

```rust
source_location: Option<bool>
```

The `source_location:` key, when the settings set one.

<a id="rustdoc-item-696"></a>

### `targets`

```rust
targets: &'static [(&'static str, &'static str)]
```

The `targets:` map, as `(target, level)` pairs sorted by target. The
bundle generator writes them in that order.

## Associated functions and methods

<a id="rustdoc-item-657"></a>

### `NONE`

```rust
const NONE: Self = _;
```

No logging settings: the engine's defaults apply.

<a id="rustdoc-item-697"></a>

### `settings`

```rust
pub fn settings(self: &Self) -> Result<LoggingSettings, String>;
```

The settings this text describes.

#### Errors

Returns the message of the first level, timestamp format or target that
does not read. Only a hand-edited bundle can hold one, because the
generator refuses all three.

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
- `Clone`
- `Copy`
- `Debug`
- `Default`
