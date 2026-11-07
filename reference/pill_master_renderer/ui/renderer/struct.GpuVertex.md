<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2962"></a>

# Struct `pill_master_renderer::ui::renderer::GpuVertex`

```rust
pub(in ui::renderer) struct GpuVertex;
```

Visibility: `{'restricted': {'parent': 2958, 'path': '::ui::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\ui\renderer.rs:111`

One vertex as the GPU sees it: a position in physical pixels, a texture
coordinate and a colour, each `f32` in the fixed layout the pipeline
declares.

## Fields

<a id="rustdoc-item-2959"></a>

### `position`

```rust
position: [f32; 2]
```

_No documentation provided._

<a id="rustdoc-item-2960"></a>

### `uv`

```rust
uv: [f32; 2]
```

_No documentation provided._

<a id="rustdoc-item-2961"></a>

### `color`

```rust
color: [f32; 4]
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-2963"></a>

### `scaled`

```rust
pub(in ui::renderer) fn scaled(vertex: &UiVertex, scale_factor: f32) -> GpuVertex;
```

Returns `vertex` with its logical position multiplied by `scale_factor`
to give physical pixels. Lists drawn at different scale factors can then
share one buffer and one pass.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `AnyBitPattern`
- `CheckedBitPattern`
- `NoUninit`
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
- `Clone`
- `Copy`
- `Debug`
- `Pod`
- `Zeroable`
