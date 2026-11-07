<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-838"></a>

# Enum `pill_master_renderer_data::assets::texture::TextureType`

```rust
pub enum TextureType { ... }
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\texture.rs:73`

How a texture's texels are meant to be read.

The type travels with the texels because the bytes alone do not say how to
interpret them. It decides the texel layout and the GPU format the texture
is uploaded as. It also decides the binding a shader receives for a texture
slot, which keeps colour, normal and environment data from being read the
wrong way.

Serialized by variant name (`"Color"`, `"Normal"`, `"Equirect"`,
`"Cubemap"`) in a texture's metadata file, so renaming a variant changes the
on-disk format.

## Variants

<a id="rustdoc-item-1112"></a>

### `Color`

```rust
Color
```

A colour image: albedo, UI, or any texture sampled for its values. It is
uploaded as sRGB, so the hardware converts it to linear light before a
shader reads it.

<a id="rustdoc-item-1113"></a>

### `Normal`

```rust
Normal
```

A normal map: its bytes are directions, not colours. It is uploaded as
linear data, so a shader reads them exactly as stored.

<a id="rustdoc-item-1115"></a>

### `Equirect`

```rust
Equirect
```

An equirectangular panorama: the whole sphere of directions around a
point, laid out in one 2:1 image, longitude across and latitude down.

It is high dynamic range, so it is stored and uploaded as linear half
floats. A Radiance `.hdr` sky then keeps the values above 1.0 where its
sun is. A shader samples the panorama by turning a direction into a uv
([`equirect_uv`](fn.equirect_uv.md#rustdoc-item-1114)).

<a id="rustdoc-item-1117"></a>

### `Cubemap`

```rust
Cubemap
```

A cubemap: six square faces around a point, in the order `+X`, `-X`,
`+Y`, `-Y`, `+Z`, `-Z`, sampled by direction.

It is made from an equirectangular panorama, which is projected onto the
faces at import ([`project_equirect_to_cubemap`](fn.project_equirect_to_cubemap.md#rustdoc-item-1116)). Like
[`Self::Equirect`](#rustdoc-item-1115), it holds high dynamic range values. Near the poles a
panorama packs many directions into few texels; a cubemap uses the same
number of texels for every direction.

## Associated functions and methods

<a id="rustdoc-item-1118"></a>

### `bytes_per_texel`

```rust
pub fn bytes_per_texel(self: Self) -> usize;
```

How many bytes one texel takes: four 8-bit channels, or four half-float
channels for an environment texture.

<a id="rustdoc-item-1119"></a>

### `layer_count`

```rust
pub fn layer_count(self: Self) -> u32;
```

How many images the texture holds: six faces for a cubemap, one
otherwise.

<a id="rustdoc-item-1120"></a>

### `is_high_dynamic_range`

```rust
pub fn is_high_dynamic_range(self: Self) -> bool;
```

Whether the texels are linear half floats rather than 8-bit channels.

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
- `From<TextureType>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Serialize`
- `Deserialize<'de>`
- `MirrorValue`
- `MirrorReturn`
