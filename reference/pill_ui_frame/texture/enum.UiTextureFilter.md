<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-430"></a>

# Enum `pill_ui_frame::texture::UiTextureFilter`

```rust
pub enum UiTextureFilter { ... }
```

Source: `rendering\pill_ui_frame\src\texture.rs:53`

How a backend samples a UI texture.

## Variants

<a id="rustdoc-item-428"></a>

### `Nearest`

```rust
Nearest
```

One texel per pixel, keeping edges sharp. Used for glyph atlases and
pixel art.

<a id="rustdoc-item-429"></a>

### `Linear`

```rust
Linear
```

Blends between neighbouring texels, keeping gradients smooth. Used for
photo-like textures and scaled drawings.

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
- `Copy`
- `Clone`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
