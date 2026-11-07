<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1574"></a>

# Struct `pill_core::telemetry::capture::LogLine`

```rust
pub struct LogLine;
```

Source: `engine\pill_core\src\telemetry\capture.rs:46`

One captured log line, with its own copy of every string.

## Fields

<a id="rustdoc-item-1570"></a>

### `seq`

```rust
seq: u64
```

Sequence number that only goes up: it starts at 1 and no two lines
share one.

<a id="rustdoc-item-1571"></a>

### `level`

```rust
level: u8
```

How serious the line is, low to high: 1 trace, 2 debug, 3 info,
4 warn, 5 error.

<a id="rustdoc-item-1572"></a>

### `target`

```rust
target: String
```

The tracing target the line came from (the crate or module path).

<a id="rustdoc-item-1573"></a>

### `message`

```rust
message: String
```

The message text, with the event's structured fields appended after
the engine's ` | ` separator as `name=value`.

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
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
