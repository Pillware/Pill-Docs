<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-350"></a>

# Struct `pill_ui_frame::frame::UiFrame`

```rust
pub struct UiFrame;
```

Source: `rendering\pill_ui_frame\src\frame.rs:49`

The UI output for one frame. It holds the lists to draw on the surfaces
and the textures those lists sample.

## Fields

<a id="rustdoc-item-346"></a>

### `draws`

```rust
draws: Vec<UiDraw>
```

The lists to draw, in draw order (later entries draw over earlier).

<a id="rustdoc-item-348"></a>

### `textures`

```rust
textures: crate::texture::UiTextureSet
```

The textures the lists sample, and the ids of the ones to free.
The set holds a texture only when its content changed since the last
time the producer sent it, so an empty set means there is nothing to
upload or free. A renderer that was just rebuilt holds no textures
and asks for them again (see [`crate::texture`](../texture/index.md#rustdoc-item-347)).

## Associated functions and methods

<a id="rustdoc-item-351"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Returns `true` when there is nothing to draw, upload or free.

<a id="rustdoc-item-352"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Forget the previous frame's work, keeping the allocations.

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
