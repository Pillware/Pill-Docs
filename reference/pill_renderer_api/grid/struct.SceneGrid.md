<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-855"></a>

# Struct `pill_renderer_api::grid::SceneGrid`

```rust
pub struct SceneGrid;
```

Source: `rendering\pill_renderer_api\src\grid.rs:54`

The scene grid's on/off switch and the distance between its lines.

A frontend writes it through [`SurfaceCameras`](../surface/struct.SurfaceCameras.md#rustdoc-item-800), beside the surface camera
bindings.

## Fields

<a id="rustdoc-item-853"></a>

### `enabled`

```rust
enabled: bool
```

Whether the surfaces bound to a view camera draw the grid.

<a id="rustdoc-item-854"></a>

### `cell_size`

```rust
cell_size: f32
```

How far apart the grid's minor lines sit, in world units.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Default`
