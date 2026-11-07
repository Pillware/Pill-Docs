<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1448"></a>

# Enum `pill_renderer_api::preview::PreviewAsset`

```rust
pub enum PreviewAsset { ... }
```

Source: `rendering\pill_renderer_api\src\preview.rs:28`

The asset one preview draws.

## Variants

<a id="rustdoc-item-1443"></a>

### `Texture`

```rust
Texture
```

A 2D texture file, drawn as a quad that keeps its aspect.

The file is named instead of looked up as an asset. A project imports
its textures under names of its own and may not have loaded one at
all, so a guid cannot lead to the pixels of a tile. Decoding the file
also means a texture that was imported again shows its new pixels.

<a id="rustdoc-item-1445"></a>

### `Material`

```rust
Material
```

A material, drawn on a preview sphere.

<a id="rustdoc-item-1447"></a>

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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
