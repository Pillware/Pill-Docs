<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4"></a>

# Struct `pill_ui_frame::draw::Color`

```rust
pub struct Color;
```

Source: `rendering\pill_ui_frame\src\draw.rs:39`

A colour in sRGB. Each channel is an `f32` in `0.0..=1.0`.

Alpha is straight, not premultiplied: it is stored on its own and is not
multiplied into the colour channels.

## Fields

<a id="rustdoc-item-0"></a>

### `r`

```rust
r: f32
```

Red channel.

<a id="rustdoc-item-1"></a>

### `g`

```rust
g: f32
```

Green channel.

<a id="rustdoc-item-2"></a>

### `b`

```rust
b: f32
```

Blue channel.

<a id="rustdoc-item-3"></a>

### `a`

```rust
a: f32
```

Alpha channel. `0.0` is fully transparent and `1.0` is opaque.

## Associated functions and methods

<a id="rustdoc-item-5"></a>

### `WHITE`

```rust
const WHITE: Color = _;
```

Opaque white.

<a id="rustdoc-item-6"></a>

### `rgba`

```rust
pub const fn rgba(r: f32, g: f32, b: f32, a: f32) -> Color;
```

A colour from straight alpha components in `0.0..=1.0`.

<a id="rustdoc-item-7"></a>

### `from_rgba8`

```rust
pub fn from_rgba8(rgba: [u8; 4]) -> Color;
```

A colour from 8-bit sRGB components.

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
- `Default`
