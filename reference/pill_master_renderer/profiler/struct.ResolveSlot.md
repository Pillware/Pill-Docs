<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1497"></a>

# Struct `pill_master_renderer::profiler::ResolveSlot`

```rust
pub(in profiler) struct ResolveSlot;
```

Visibility: `{'restricted': {'parent': 1480, 'path': '::profiler'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\profiler.rs:844`

One ring slot's buffers. Queries resolve into `resolve`, which is then
copied into `readback` for the CPU to map. wgpu only allows a mappable
buffer as a copy destination, so a query cannot resolve into one directly.

## Fields

<a id="rustdoc-item-1603"></a>

### `resolve`

```rust
resolve: wgpu::Buffer
```

_No documentation provided._

<a id="rustdoc-item-1604"></a>

### `readback`

```rust
readback: wgpu::Buffer
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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
