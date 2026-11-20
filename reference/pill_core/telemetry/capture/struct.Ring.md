<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1619"></a>

# Struct `pill_core::telemetry::capture::Ring`

```rust
pub(in telemetry::capture) struct Ring;
```

Visibility: `{'restricted': {'parent': 1615, 'path': '::telemetry::capture'}}` · Source: `engine\pill_core\src\telemetry\capture.rs:61`

The ring's contents, guarded by the mutex inside the shared handle.

## Fields

<a id="rustdoc-item-1614"></a>

### `capacity`

```rust
capacity: usize
```

_No documentation provided._

<a id="rustdoc-item-1616"></a>

### `next_sequence_number`

```rust
next_sequence_number: u64
```

_No documentation provided._

<a id="rustdoc-item-1617"></a>

### `lines`

```rust
lines: std::collections::VecDeque<LogLine>
```

_No documentation provided._

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
