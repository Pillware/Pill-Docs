<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1073"></a>

# Struct `pill_master_renderer::overlay::TriangleVertex`

```rust
pub(in overlay) struct TriangleVertex;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:124`

A gizmo-triangle vertex after projection: the corner pushed out by the
feather, its colour, and the barycentric coordinate of the corner it stands
for. The fragment shader turns that coordinate into edge coverage.

## Fields

<a id="rustdoc-item-1070"></a>

### `clip_position`

```rust
clip_position: [f32; 4]
```

_No documentation provided._

<a id="rustdoc-item-1071"></a>

### `color`

```rust
color: [f32; 4]
```

_No documentation provided._

<a id="rustdoc-item-1072"></a>

### `barycentric`

```rust
barycentric: [f32; 3]
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
