<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1117"></a>

# Struct `pill_master_renderer::overlay::PointVertex`

```rust
pub(in overlay) struct PointVertex;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:136`

A gizmo-point vertex after projection: the corner of the screen-aligned
quad, its colour, the corner's offset from the point's centre in pixels,
the point's half size in pixels, and the silhouette it draws as. The
fragment shader tests each pixel sample against the shape.

## Fields

<a id="rustdoc-item-1112"></a>

### `clip_position`

```rust
clip_position: [f32; 4]
```

_No documentation provided._

<a id="rustdoc-item-1113"></a>

### `color`

```rust
color: [f32; 4]
```

_No documentation provided._

<a id="rustdoc-item-1114"></a>

### `offset_pixels`

```rust
offset_pixels: [f32; 2]
```

_No documentation provided._

<a id="rustdoc-item-1115"></a>

### `half_size_pixels`

```rust
half_size_pixels: f32
```

_No documentation provided._

<a id="rustdoc-item-1116"></a>

### `shape`

```rust
shape: u32
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
