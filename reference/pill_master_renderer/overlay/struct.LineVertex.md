<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1034"></a>

# Struct `pill_master_renderer::overlay::LineVertex`

```rust
pub(in overlay) struct LineVertex;
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:111`

A line vertex after projection: the corner of the line's quad, its colour,
and how far in pixels it sits from the line's centre (negative on the other
side). The fragment shader turns that distance into coverage.

## Fields

<a id="rustdoc-item-1031"></a>

### `clip_position`

```rust
clip_position: [f32; 4]
```

_No documentation provided._

<a id="rustdoc-item-1032"></a>

### `color`

```rust
color: [f32; 4]
```

_No documentation provided._

<a id="rustdoc-item-1033"></a>

### `across_pixels`

```rust
across_pixels: f32
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
