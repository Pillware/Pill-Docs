<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1861"></a>

# Struct `pill_core::telemetry::StyledFieldVisitor`

```rust
pub(crate) struct StyledFieldVisitor;
```

Visibility: `crate` · Source: `engine\pill_core\src\telemetry.rs:476`

`tracing` visitor that collects the message and the structured fields
separately, so every layer can put the message first and the fields after
it, whatever order the callsite declared them in.

The terminal and file layers write the two parts into their line, and the
capture layer joins them for the editor console. Sharing the visitor is what
keeps the console from showing a different line than the log file for the
same event: the same fields appear, and a value reads the same way.

## Fields

<a id="rustdoc-item-1857"></a>

### `accepts_ansi`

```rust
accepts_ansi: bool
```

_No documentation provided._

<a id="rustdoc-item-1858"></a>

### `skip_log_fields`

```rust
skip_log_fields: bool
```

Drop the `log.*` fields of a bridged `log` record; the normalized
metadata already carries what they hold.

<a id="rustdoc-item-1859"></a>

### `message`

```rust
message: String
```

_No documentation provided._

<a id="rustdoc-item-1860"></a>

### `fields`

```rust
fields: String
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1862"></a>

### `plain`

```rust
pub(crate) fn plain(skip_log_fields: bool) -> Self;
```

A visitor for one event that styles nothing and drops the bridged
`log.*` fields when the record came through `log`.

<a id="rustdoc-item-1863"></a>

### `into_line`

```rust
pub(crate) fn into_line(self: Self) -> String;
```

The line a reader sees: the message, then its fields after
[`FIELD_SEPARATOR`](constant.FIELD_SEPARATOR.md#rustdoc-item-1723), with a block's fields on its heading line the way
the terminal formatter puts them.

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
- `Visit`
