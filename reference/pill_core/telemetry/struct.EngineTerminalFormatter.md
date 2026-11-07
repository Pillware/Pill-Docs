<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1817"></a>

# Struct `pill_core::telemetry::EngineTerminalFormatter`

```rust
pub struct EngineTerminalFormatter;
```

Source: `engine\pill_core\src\telemetry.rs:337`

Line formatting layer for `tracing` events, used by the terminal and file
layers.

Owns the line's appearance: severity colors, target styling, timestamps,
file/line, and the message plus its structured fields. It adds that styling
itself, so callsites write plain text. A message that carries its own colors
(see [`log_block_colored`](fn.log_block_colored.md#rustdoc-item-1717)) keeps them only on a color-capable layer.

## Fields

<a id="rustdoc-item-1816"></a>

### `timestamps_enabled`

```rust
timestamps_enabled: bool
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1818"></a>

### `new`

```rust
pub fn new() -> Self;
```

Create a formatter with the timestamp prefix enabled.

#### Examples

```
use pill_core::telemetry::EngineTerminalFormatter;

let formatter = EngineTerminalFormatter::new();
```

<a id="rustdoc-item-1819"></a>

### `without_timestamps`

```rust
pub fn without_timestamps(self: Self) -> Self;
```

Disable the timestamp prefix.

#### Examples

```
use pill_core::telemetry::EngineTerminalFormatter;

let formatter = EngineTerminalFormatter::new().without_timestamps();
```

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
- `Default`
- `FormatEvent<S, N>`
