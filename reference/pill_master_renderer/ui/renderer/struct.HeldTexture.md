<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3014"></a>

# Struct `pill_master_renderer::ui::renderer::HeldTexture`

```rust
pub(in ui::renderer) struct HeldTexture;
```

Visibility: `{'restricted': {'parent': 2958, 'path': '::ui::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\ui\renderer.rs:530`

One texture this renderer holds on the GPU: the image, the bind group that
binds it together with its sampler, its texel size and the revision it was
uploaded at.

## Fields

<a id="rustdoc-item-3051"></a>

### `texture`

```rust
texture: wgpu::Texture
```

_No documentation provided._

<a id="rustdoc-item-3052"></a>

### `bind_group`

```rust
bind_group: wgpu::BindGroup
```

_No documentation provided._

<a id="rustdoc-item-3053"></a>

### `texture_size`

```rust
texture_size: (u32, u32)
```

_No documentation provided._

<a id="rustdoc-item-3054"></a>

### `revision`

```rust
revision: u64
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
