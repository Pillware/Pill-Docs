<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-474"></a>

# Struct `pill_ui_frame::texture::UiTexture`

```rust
pub struct UiTexture;
```

Source: `rendering\pill_ui_frame\src\texture.rs:69`

One texture sampled by a frame's draw lists, at one revision.

## Fields

<a id="rustdoc-item-467"></a>

### `id`

```rust
id: crate::draw::TextureId
```

The id the draw lists use to sample this texture.

<a id="rustdoc-item-468"></a>

### `width`

```rust
width: u32
```

The image's width in texels.

<a id="rustdoc-item-469"></a>

### `height`

```rust
height: u32
```

The image's height in texels.

<a id="rustdoc-item-470"></a>

### `revision`

```rust
revision: u64
```

The revision of the content this entry carries. It goes up every time
the texture's content changes.

<a id="rustdoc-item-471"></a>

### `pixels`

```rust
pixels: std::sync::Arc<[u8]>
```

The whole image as tightly packed straight-alpha sRGB RGBA8 rows,
`width * height * 4` bytes.

<a id="rustdoc-item-473"></a>

### `filter`

```rust
filter: UiTextureFilter
```

How the texture is sampled.

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
