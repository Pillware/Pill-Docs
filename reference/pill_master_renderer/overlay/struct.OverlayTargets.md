<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1286"></a>

# Struct `pill_master_renderer::overlay::OverlayTargets`

```rust
pub(crate) struct OverlayTargets;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:181`

The targets one surface's overlay draws into.

Owned by the surface they are sized to, beside its depth buffer and
offscreen targets, and rebuilt with them on a resize. An outline mask is a
surface-sized GPU object like any other; a cache keyed by size would make
two surfaces share one and evict each other's.

The pick buffer and its depth are the exception: a surface that never picks
never allocates them.

## Fields

<a id="rustdoc-item-1280"></a>

### `width`

```rust
width: u32
```

_No documentation provided._

<a id="rustdoc-item-1281"></a>

### `height`

```rust
height: u32
```

_No documentation provided._

<a id="rustdoc-item-1282"></a>

### `mask_view`

```rust
mask_view: wgpu::TextureView
```

The silhouettes of the outlined meshes, drawn here and read by the edge
pass.

<a id="rustdoc-item-1283"></a>

### `outline_bind_group`

```rust
outline_bind_group: wgpu::BindGroup
```

_No documentation provided._

<a id="rustdoc-item-1285"></a>

### `pick_targets`

```rust
pick_targets: Option<(wgpu::Texture, wgpu::TextureView, wgpu::TextureView)>
```

The pick buffer and its depth, made the first time a pick asks.

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
