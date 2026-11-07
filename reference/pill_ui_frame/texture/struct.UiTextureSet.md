<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-349"></a>

# Struct `pill_ui_frame::texture::UiTextureSet`

```rust
pub struct UiTextureSet;
```

Source: `rendering\pill_ui_frame\src\texture.rs:92`

The textures a frame carries to the backend, and the ones it frees.

## Fields

<a id="rustdoc-item-508"></a>

### `textures`

```rust
textures: Vec<UiTexture>
```

The textures whose content changed since the producer last carried
them, one entry per texture. Empty when nothing changed.

<a id="rustdoc-item-509"></a>

### `frees`

```rust
frees: Vec<crate::draw::TextureId>
```

Textures the producer no longer uses. A backend drops them.

## Associated functions and methods

<a id="rustdoc-item-510"></a>

### `new`

```rust
pub fn new() -> UiTextureSet;
```

An empty set.

<a id="rustdoc-item-511"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether there is nothing to upload and nothing to free.

<a id="rustdoc-item-512"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Forget the previous frame's set, keeping the allocations.

<a id="rustdoc-item-513"></a>

### `push_full`

```rust
pub fn push_full(self: &mut Self, id: TextureId, width: u32, height: u32, revision: u64, filter: UiTextureFilter, pixels: Arc<[u8]>);
```

Adds the whole image of `id` at `revision`.

`pixels` is straight-alpha sRGB RGBA8 and exactly `width * height * 4`
bytes. Any other length is a producer bug that the backend would read
past, so it is refused here rather than at the upload.

#### Panics

Panics when `pixels` is not exactly `width * height * 4` bytes.

<a id="rustdoc-item-514"></a>

### `push_free`

```rust
pub fn push_free(self: &mut Self, id: TextureId);
```

Marks `id` to be freed in every backend that applied the set.

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
