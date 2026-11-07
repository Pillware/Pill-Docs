<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-407"></a>

# Enum `pill_renderer_api::frame::PassKind`

```rust
pub enum PassKind { ... }
```

Source: `rendering\pill_renderer_api\src\frame.rs:44`

What a pass draws.

## Variants

<a id="rustdoc-item-404"></a>

### `Geometry`

```rust
Geometry
```

Draws the scene's meshes, one instanced batch for each shader, material
and mesh.

<a id="rustdoc-item-405"></a>

### `Fullscreen`

```rust
Fullscreen
```

Draws one fullscreen triangle, which is the shape a post-processing pass
takes.

<a id="rustdoc-item-406"></a>

### `Skybox`

```rust
Skybox
```

Draws one fullscreen triangle at the far plane, depth-tested against
what the geometry passes left, so it shows only where no mesh was drawn.
Its shader - usually the one its material names - turns each pixel into
a view direction and samples a sky by it.

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
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Default`
- `Serialize`
- `Deserialize<'de>`
