<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1672"></a>

# Struct `pill_core::telemetry::capture::CaptureLayer`

```rust
pub struct CaptureLayer;
```

Source: `engine\pill_core\src\telemetry\capture.rs:165`

A tracing layer that copies events at or above a level into a
[`LogBuffer`](struct.LogBuffer.md#rustdoc-item-1631).

## Fields

<a id="rustdoc-item-1670"></a>

### `buffer`

```rust
buffer: LogBuffer
```

_No documentation provided._

<a id="rustdoc-item-1671"></a>

### `minimum_level`

```rust
minimum_level: u8
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1673"></a>

### `new`

```rust
pub fn new(buffer: LogBuffer, minimum_level: Level) -> Self;
```

Creates a layer that copies events at or above `minimum_level` into
`buffer`.

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
- `Layer<S>`
