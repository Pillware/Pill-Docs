<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-180"></a>

# Struct `pill_project_ui::textures::MirroredTexture`

```rust
pub(in textures) struct MirroredTexture;
```

Visibility: `{'restricted': {'parent': 10, 'path': '::textures'}}` · Source: `ui\pill_project_ui\src\textures.rs:48`

The whole image of one texture, as a painter that starts with no textures
needs it.

## Fields

<a id="rustdoc-item-174"></a>

### `width`

```rust
width: u32
```

_No documentation provided._

<a id="rustdoc-item-175"></a>

### `height`

```rust
height: u32
```

_No documentation provided._

<a id="rustdoc-item-176"></a>

### `filter`

```rust
filter: pill_ui_frame::UiTextureFilter
```

_No documentation provided._

<a id="rustdoc-item-178"></a>

### `revision`

```rust
revision: u64
```

_No documentation provided._

<a id="rustdoc-item-179"></a>

### `pixels`

```rust
pixels: Vec<u8>
```

Straight-alpha sRGB RGBA8, `width * height * 4` bytes.

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
- `SerializableAny`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
