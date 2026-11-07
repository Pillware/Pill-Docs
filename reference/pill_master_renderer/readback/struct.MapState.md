<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1569"></a>

# Struct `pill_master_renderer::readback::MapState`

```rust
pub(crate) struct MapState;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\readback.rs:84`

One buffer's mapping, shared with the callback that reports it.

The callback stores its outcome with `Release` and the frame path reads it
with `Acquire`, so a thread that reads the new outcome also sees everything
the callback wrote before it stored that outcome.

## Fields

<a id="rustdoc-item-1724"></a>

### `outcome_code`

```rust
outcome_code: std::sync::Arc<std::sync::atomic::AtomicU8>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1726"></a>

### `start`

```rust
pub(crate) fn start(buffer: &Buffer) -> Self;
```

Asks for `buffer` to be mapped for reading.

Only call this after the submission that wrote the buffer. A map asked
for earlier makes that submission fail.

<a id="rustdoc-item-1727"></a>

### `finished`

```rust
pub(crate) fn finished(self: &Self) -> bool;
```

Whether the map has finished, whether it succeeded or failed.

The frame profiler tests this for each slot of its ring before it reads
the slot: a slot is read once every map it asked for has finished.

<a id="rustdoc-item-1728"></a>

### `outcome`

```rust
pub(crate) fn outcome(self: &Self) -> MapOutcome;
```

What the device's callback last reported.

<a id="rustdoc-item-1645"></a>

### `poll`

```rust
pub(crate) fn poll<T, impl FnOnce(&[u8]) -> T: FnOnce(&[u8]) -> T>(self: &Self, buffer: &Buffer, read: impl FnOnce(&[u8]) -> T) -> Readback<T>;
```

Polls the mapping without waiting.

When the map is done, the bytes are handed to `read` once and the buffer
is unmapped. A map the device refused answers [`Readback::Failed`](enum.Readback.md#rustdoc-item-1644) and
the buffer is never read.

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
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
