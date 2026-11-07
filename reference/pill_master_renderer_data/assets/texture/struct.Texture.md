<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2"></a>

# Struct `pill_master_renderer_data::assets::texture::Texture`

```rust
pub struct Texture;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\texture.rs:138`

Decoded texels under a name, ready for the renderer to upload.

This is plain data, not a GPU resource. The renderer keeps the matching
texture, view and sampler, and rebuilds them when the asset's version
changes. A game therefore edits the texture it holds and never touches GPU
state.

## Fields

<a id="rustdoc-item-1169"></a>

### `name`

```rust
name: String
```

Label for the GPU resource. The logs and error messages use it too.

<a id="rustdoc-item-1171"></a>

### `rgba`

```rust
rgba: Vec<u8>
```

The texels in RGBA order, laid out as [`Self::texture_type`](#rustdoc-item-1170) says.
Colour and normal maps use four bytes per texel, an environment uses
four little-endian half floats, and a cubemap holds its six faces one
after another. The constructors check the length against the dimensions
before a texture exists.

<a id="rustdoc-item-1172"></a>

### `width`

```rust
width: u32
```

Width in texels; for a cubemap, of each face.

<a id="rustdoc-item-1173"></a>

### `height`

```rust
height: u32
```

Height in texels; for a cubemap, of each face.

<a id="rustdoc-item-1170"></a>

### `texture_type`

```rust
texture_type: TextureType
```

How a shader should read the texels.

## Associated functions and methods

<a id="rustdoc-item-1174"></a>

### `new`

```rust
pub fn new<impl Into<String>: Into<String>>(name: impl Into<String>, texture_type: TextureType, loader: AssetLoader) -> AssetLoadResult<Self>;
```

Builds a texture by decoding an image file.

The loader supplies the bytes, and the texture keeps the name it is
given, so a decode failure names the asset being loaded instead of an
anonymous buffer. A colour or normal map becomes RGBA8. An environment
becomes linear half floats, and a cubemap is first projected from the
image as a panorama.

#### Errors

Returns whatever the loader reports when the file is missing or
unreadable, and [`AssetLoadError::Decode`] when the bytes are not an
image this crate can decode.

<a id="rustdoc-item-1175"></a>

### `decode`

```rust
pub(in assets::texture) fn decode(name: String, texture_type: TextureType, bytes: &[u8]) -> AssetLoadResult<Self>;
```

Decodes an encoded image (PNG, JPEG or Radiance HDR) into a texture of
`texture_type`.

This is the one decode path, shared by [`Self::new`](#rustdoc-item-1174) and the metadata
import.

#### Errors

Returns [`AssetLoadError::Decode`] when the bytes are not an image this
crate can decode.

<a id="rustdoc-item-1177"></a>

### `from_rgba`

```rust
pub fn from_rgba<impl Into<String>: Into<String>>(name: impl Into<String>, texture_type: TextureType, rgba: Vec<u8>, width: u32, height: u32) -> AssetLoadResult<Self>;
```

Wraps a texel buffer as a texture and checks it against the declared
dimensions.

Use this for texels that were made rather than loaded, such as a
procedural image or a single-colour stand-in, where no file exists to
decode. The buffer is laid out as [`Self::rgba`](#rustdoc-item-1171) describes for
`texture_type`.

#### Errors

Returns [`AssetLoadError::Decode`] when the buffer's length is not what
the dimensions and the type call for, or when a cubemap's faces are not
square. The GPU upload checks the length again, but it can only report a
mismatch as an upload failure. Checking here names the texture while its
own numbers are still at hand.

<a id="rustdoc-item-1178"></a>

### `from_rgba_f32`

```rust
pub fn from_rgba_f32<impl Into<String>: Into<String>>(name: impl Into<String>, texture_type: TextureType, rgba: &[f32], width: u32, height: u32) -> AssetLoadResult<Self>;
```

Builds an environment texture from linear RGBA float texels of an
equirectangular panorama.

A [`TextureType::Equirect`](enum.TextureType.md#rustdoc-item-1115) texture keeps the panorama as it is. A
[`TextureType::Cubemap`](enum.TextureType.md#rustdoc-item-1117) is projected from it, with faces a quarter of
the panorama's width.

#### Errors

Returns [`AssetLoadError::Decode`] when `texture_type` is not an
environment, or when `rgba` does not hold `width * height` texels of
four channels each.

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
- `MirrorObject`
- `Asset`
- `MirrorValue`
- `MirrorReturn`
- `Clone`
- `Debug`
- `ImportedAsset`
- `TraitAccessible<dyn Asset>`
