<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1281"></a>

# Struct `pill_master_renderer::overlay::GridParameters`

```rust
pub(in overlay) struct GridParameters;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:175`

The grid uniform: the cell size in `cell_size[0]`, and the drawing region in
`viewport`, in pixels. The fragment shader turns each pixel back into a
clip-space ray through that region.

## Fields

<a id="rustdoc-item-1279"></a>

### `cell_size`

```rust
cell_size: [f32; 4]
```

_No documentation provided._

<a id="rustdoc-item-1280"></a>

### `viewport`

```rust
viewport: [f32; 4]
```

_No documentation provided._

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
