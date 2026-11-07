<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-385"></a>

# Struct `pill_player::runtime::FrameErrorLine`

```rust
pub(in runtime) struct FrameErrorLine;
```

Visibility: `{'restricted': {'parent': 284, 'path': '::runtime'}}` · Source: `hosting\pill_player\src\runtime.rs:463`

One `frame error:` line the reporter decided to log.

## Fields

<a id="rustdoc-item-437"></a>

### `message`

```rust
message: String
```

The message, as the engine wrote it.

<a id="rustdoc-item-438"></a>

### `suppressed_repeat_count`

```rust
suppressed_repeat_count: u64
```

Repeats counted but not printed since it last printed; `0` for a first
sighting.

## Associated functions and methods

<a id="rustdoc-item-439"></a>

### `new`

```rust
pub(in runtime) fn new(message: &str, suppressed_repeat_count: u64) -> Self;
```

Builds a line for `message` with the number of repeats it did not print.

<a id="rustdoc-item-440"></a>

### `log`

```rust
pub(in runtime) fn log(self: &Self);
```

Write the line: the text keeps the `frame error: <message>` shape, with
the repeat count as a field only when there is one.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
