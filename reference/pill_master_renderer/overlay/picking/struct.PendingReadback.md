<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-951"></a>

# Struct `pill_master_renderer::overlay::picking::PendingReadback`

```rust
pub(in overlay::picking) struct PendingReadback;
```

Visibility: `{'restricted': {'parent': 946, 'path': '::overlay::picking'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\picking.rs:46`

The copies one frame recorded for one surface, kept until their pixels can
be read.

## Fields

<a id="rustdoc-item-947"></a>

### `readback`

```rust
readback: crate::readback::MappedReadback
```

One slot of [`BYTES_PER_SLOT`](constant.BYTES_PER_SLOT.md#rustdoc-item-945) bytes per request, in request order.

<a id="rustdoc-item-948"></a>

### `requests`

```rust
requests: Vec<pill_renderer_api::PickRequest>
```

The requests, one per slot.

<a id="rustdoc-item-950"></a>

### `queue_entities`

```rust
queue_entities: Vec<pill_engine::Entity>
```

The entity at each queue position of the frame that was drawn.

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
