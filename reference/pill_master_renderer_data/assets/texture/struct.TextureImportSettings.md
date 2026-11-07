<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1220"></a>

# Struct `pill_master_renderer_data::assets::texture::TextureImportSettings`

```rust
pub struct TextureImportSettings;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\texture.rs:355`

How to read an image file as a texture: what the `.meta` file beside it
holds.

Every field is part of the metadata file format, so renaming one breaks
existing files. `#[serde(default)]` lets a file that leaves a field out
still load.

## Fields

<a id="rustdoc-item-1226"></a>

### `texture_type`

```rust
texture_type: TextureType
```

How the texels are read ([`TextureType`](enum.TextureType.md#rustdoc-item-838)). A file that names `Depth` is
refused: depth is a slot's binding kind, and no image file holds depth.
`Equirect` and `Cubemap` read the image as a panorama, usually a
Radiance `.hdr` sky.

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
- `Equivalent<K>`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Serialize`
- `Deserialize<'de>`
- `Default`
