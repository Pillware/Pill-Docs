<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-191"></a>

# Struct `pill_ui_frame::draw::UiVertex`

```rust
pub struct UiVertex;
```

Source: `rendering\pill_ui_frame\src\draw.rs:140`

One vertex of a UI triangle.

`position` is in logical pixels, `uv` is a texture coordinate in
`0.0..=1.0`, and `color` is multiplied into the sampled texel.

## Fields

<a id="rustdoc-item-188"></a>

### `position`

```rust
position: pill_core::math::Vector2f
```

Position in logical pixels, y down.

<a id="rustdoc-item-189"></a>

### `uv`

```rust
uv: pill_core::math::Vector2f
```

Texture coordinate. `(0.0, 0.0)` is the texture's top-left corner.

<a id="rustdoc-item-190"></a>

### `color`

```rust
color: Color
```

The vertex colour.

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
- `StructuralPartialEq`
- `PartialEq`
