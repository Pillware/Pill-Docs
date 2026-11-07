<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-768"></a>

# Struct `pill_master_renderer::readback::MappedReadback`

```rust
pub(crate) struct MappedReadback;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\readback.rs:161`

A readback buffer that remembers its own mapping.

## Fields

<a id="rustdoc-item-1756"></a>

### `buffer`

```rust
buffer: wgpu::Buffer
```

_No documentation provided._

<a id="rustdoc-item-1757"></a>

### `map_state`

```rust
map_state: Option<MapState>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1758"></a>

### `new`

```rust
pub(crate) fn new(buffer: Buffer) -> Self;
```

Wraps a buffer created with `MAP_READ`, with nothing mapped yet.

<a id="rustdoc-item-1759"></a>

### `buffer`

```rust
pub(crate) fn buffer(self: &Self) -> &Buffer;
```

The buffer, for the copies a frame records into it.

<a id="rustdoc-item-1760"></a>

### `start`

```rust
pub(crate) fn start(self: &mut Self);
```

Asks for the map, unless one is already under way.

<a id="rustdoc-item-1761"></a>

### `poll`

```rust
pub(crate) fn poll<T, impl FnOnce(&[u8]) -> T: FnOnce(&[u8]) -> T>(self: &mut Self, read: impl FnOnce(&[u8]) -> T) -> Readback<T>;
```

Polls the map without waiting, decoding through `read` once.

While no map is under way this answers [`Readback::Pending`](enum.Readback.md#rustdoc-item-1641), and keeps
answering it until [`Self::start`](#rustdoc-item-1760) asks for the next map.

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
