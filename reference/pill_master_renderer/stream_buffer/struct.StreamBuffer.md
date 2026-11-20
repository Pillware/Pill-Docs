<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1405"></a>

# Struct `pill_master_renderer::stream_buffer::StreamBuffer`

```rust
pub(crate) struct StreamBuffer;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\stream_buffer.rs:26`

A buffer that is rewritten for each surface and replaced by a larger one
when the bytes do not fit.

## Fields

<a id="rustdoc-item-2901"></a>

### `debug_label`

```rust
debug_label: &'static str
```

_No documentation provided._

<a id="rustdoc-item-2903"></a>

### `usage`

```rust
usage: wgpu::BufferUsages
```

_No documentation provided._

<a id="rustdoc-item-2905"></a>

### `allocated_buffer`

```rust
allocated_buffer: Option<wgpu::Buffer>
```

_No documentation provided._

<a id="rustdoc-item-2906"></a>

### `capacity_bytes`

```rust
capacity_bytes: u64
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-2907"></a>

### `new`

```rust
pub(crate) fn new(debug_label: &'static str, usage: wgpu::BufferUsages) -> Self;
```

Creates an empty stream for buffers of `usage` (`VERTEX`, `INDEX`, ...).
The first write allocates the GPU buffer, and adds `COPY_DST` to `usage`
because every write copies bytes into it.

<a id="rustdoc-item-2908"></a>

### `write`

```rust
pub(crate) fn write(self: &mut Self, device: &wgpu::Device, queue: &wgpu::Queue, bytes: &[u8]) -> Option<&wgpu::Buffer>;
```

Uploads `bytes` into the buffer and returns it, or returns `None` when
`bytes` is empty.

Empty input allocates nothing and writes nothing, so the caller can skip
its draw for that surface.

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
