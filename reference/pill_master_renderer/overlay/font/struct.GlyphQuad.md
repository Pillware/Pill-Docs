<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-897"></a>

# Struct `pill_master_renderer::overlay::font::GlyphQuad`

```rust
pub(in overlay) struct GlyphQuad;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\font.rs:140`

One glyph quad: where it goes on screen and which atlas cell it shows.

## Fields

<a id="rustdoc-item-894"></a>

### `origin`

```rust
origin: [f32; 2]
```

Left and top of the quad on screen, in pixels.

<a id="rustdoc-item-895"></a>

### `size`

```rust
size: [f32; 2]
```

Width and height of the quad on screen, in pixels.

<a id="rustdoc-item-896"></a>

### `atlas_origin`

```rust
atlas_origin: [u32; 2]
```

Left and top texel of the glyph's cell in the atlas.

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
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
