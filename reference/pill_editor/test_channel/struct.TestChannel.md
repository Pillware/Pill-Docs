<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-602"></a>

# Struct `pill_editor::test_channel::TestChannel`

```rust
pub struct TestChannel;
```

Source: `editor\pill_editor\src\test_channel.rs:31`

Reads the command lines a test suite appends to a file.

## Fields

<a id="rustdoc-item-1559"></a>

### `file_path`

```rust
file_path: std::path::PathBuf
```

Path of the file the test suites append to.

<a id="rustdoc-item-1561"></a>

### `consumed_byte_count`

```rust
consumed_byte_count: usize
```

Number of bytes of the file whose lines have already been handed over.

## Associated functions and methods

<a id="rustdoc-item-1562"></a>

### `from_environment`

```rust
pub fn from_environment() -> Option<TestChannel>;
```

Opens the channel when `PILL_EDITOR_TEST_COMMANDS` is set, and returns
`None` when it is not.

<a id="rustdoc-item-1563"></a>

### `poll`

```rust
pub fn poll(self: &mut Self) -> Vec<String>;
```

Returns the command lines appended since the last poll.

Only complete lines come back. A trailing piece without its newline
waits until the writer finishes it, so a command written in two pieces
never runs its first piece alone. A file that got shorter (the suite
rewrote it) is read again from the first byte, so nothing in the new
contents is skipped. Blank lines and `#` comments are not commands and
never reach the runner.

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
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
