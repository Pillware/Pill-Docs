<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1534"></a>

# Enum `pill_renderer_api::preview::PreviewAsset`

```rust
pub enum PreviewAsset { ... }
```

Source: `rendering\pill_renderer_api\src\preview.rs:28`

The asset one preview draws.

## Variants

<a id="rustdoc-item-1529"></a>

### `Texture`

```rust
Texture
```

A 2D texture file, drawn as a quad that keeps its aspect.

The file is named instead of looked up as an asset. A project imports
its textures under names of its own and may not have loaded one at
all, so a guid cannot lead to the pixels of a tile. Decoding the file
also means a texture that was imported again shows its new pixels.

<a id="rustdoc-item-1531"></a>

### `Material`

```rust
Material
```

A material, drawn on a preview sphere.

<a id="rustdoc-item-1533"></a>

### `Mesh`

```rust
Mesh
```

A mesh, drawn with the renderer's own default shading.

Named by its file for the same reason a texture is: the project may
have loaded it under a name of its own, or not at all.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
