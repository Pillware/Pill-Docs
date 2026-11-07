<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-839"></a>

# Enum `pill_master_renderer_data::assets::shader::ShaderTextureKind`

```rust
pub enum ShaderTextureKind { ... }
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\shader.rs:111`

What a shader texture slot reads: a texture asset's texels, or a depth
buffer.

A depth buffer is not an asset - no file decodes to one - so it is not a
[`TextureType`](../texture/enum.TextureType.md#rustdoc-item-838), which is the texel layout a texture asset carries. A slot
names both kinds because a shader can bind either, and the kind decides the
binding wgpu accepts: a depth texture cannot be bound where a filterable
colour texture is expected.

Serialized by variant name, so a `.hlsl.meta` writes `"type": "Color"` or
`"type": "Depth"`, and renaming a variant changes that file format.

## Variants

<a id="rustdoc-item-833"></a>

### `Color`

```rust
Color
```

A colour image, uploaded as sRGB, so a sample arrives as linear light.

<a id="rustdoc-item-834"></a>

### `Normal`

```rust
Normal
```

A normal map, whose bytes are directions.

<a id="rustdoc-item-835"></a>

### `Equirect`

```rust
Equirect
```

A high-dynamic-range equirectangular panorama.

<a id="rustdoc-item-836"></a>

### `Cubemap`

```rust
Cubemap
```

A cubemap projected from a panorama.

<a id="rustdoc-item-837"></a>

### `Depth`

```rust
Depth
```

A depth buffer, which only a pass's own input can supply.

## Associated functions and methods

<a id="rustdoc-item-840"></a>

### `texture_type`

```rust
pub fn texture_type(self: Self) -> Option<TextureType>;
```

The asset texel layout this slot reads, or `None` for a depth buffer,
which no asset carries.

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
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Serialize`
- `Deserialize<'de>`
- `MirrorValue`
- `MirrorReturn`
- `From<TextureType>`
