<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1770"></a>

# Enum `pill_core::telemetry::TimestampFormat`

```rust
pub enum TimestampFormat { ... }
```

Source: `engine\pill_core\src\telemetry.rs:236`

How the local time at the start of every log line is written.

Chosen by the project's `logging: timestamp:` setting and applied with
[`set_timestamp_format`](fn.set_timestamp_format.md#rustdoc-item-1769). It is one process-wide value, held in
`pill_core` so every DLL's log lines agree.

## Variants

<a id="rustdoc-item-1767"></a>

### `DateTime`

```rust
DateTime
```

`[dd.mm.yyyy hh:mm:ss:mmm]`, written `date_time` in settings.

<a id="rustdoc-item-1768"></a>

### `Time`

```rust
Time
```

`[hh:mm:ss:mmm]`, written `time` in settings. The default.

## Associated functions and methods

<a id="rustdoc-item-1771"></a>

### `parse`

```rust
pub fn parse(text: &str) -> Result<Self, String>;
```

Read the settings name: `date_time` or `time`, in any case.

#### Errors

Returns a message naming the accepted values for anything else.

#### Examples

```
use pill_core::telemetry::TimestampFormat;

assert_eq!(TimestampFormat::parse("time"), Ok(TimestampFormat::Time));
```

<a id="rustdoc-item-1772"></a>

### `as_str`

```rust
pub fn as_str(self: Self) -> &'static str;
```

The settings name of this format, as [`Self::parse`](#rustdoc-item-1771) reads it.

<a id="rustdoc-item-1773"></a>

### `pattern`

```rust
pub(in telemetry) fn pattern(self: Self) -> &'static str;
```

The `chrono` pattern that writes this format (`%3f` is milliseconds).

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
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Default`
