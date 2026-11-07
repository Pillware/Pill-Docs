<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-981"></a>

# Struct `pill_master_renderer::overlay::picking::PickReadback`

```rust
pub(in overlay) struct PickReadback;
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\picking.rs:62`

Every pick on its way back from the GPU, and the answers that have already
arrived.

## Fields

<a id="rustdoc-item-978"></a>

### `pending_readbacks`

```rust
pending_readbacks: Vec<PendingReadback>
```

Readbacks recorded, not answered yet.

<a id="rustdoc-item-979"></a>

### `finished_answers`

```rust
finished_answers: Vec<pill_renderer_api::PickResult>
```

Answers ready to hand out.

## Associated functions and methods

<a id="rustdoc-item-982"></a>

### `answer`

```rust
pub fn answer(self: &mut Self, request: PickRequest, hit: PickHit);
```

Answers `request` straight away, without reading the GPU.

<a id="rustdoc-item-985"></a>

### `copy_requested_pixels`

```rust
pub fn copy_requested_pixels(self: &mut Self, device: &wgpu::Device, encoder: &mut wgpu::CommandEncoder, pick_texture: &wgpu::Texture, requests: Vec<PickRequest>, queue_entities: Vec<Entity>);
```

Records a copy of each request's pixel out of `pick_texture`.

A request whose pixel lies outside the texture has nothing to copy, so
it is answered with [`PickHit::Nothing`] here.

<a id="rustdoc-item-986"></a>

### `start_mapping`

```rust
pub fn start_mapping(self: &mut Self);
```

Starts mapping every readback recorded since the last call.

Call it after the frame that recorded them is submitted: a buffer asked
to map before its copy is submitted makes the submission fail.

<a id="rustdoc-item-987"></a>

### `collect`

```rust
pub fn collect(self: &mut Self, device: &wgpu::Device) -> Vec<PickResult>;
```

Returns every answer that has arrived.

The device is polled without waiting, so a readback still in flight is
answered on a later call. A readback the GPU could not deliver answers
[`PickHit::Nothing`] once for each request it carried.

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
- `Default`
