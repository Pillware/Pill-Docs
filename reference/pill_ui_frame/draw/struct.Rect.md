<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-106"></a>

# Struct `pill_ui_frame::draw::Rect`

```rust
pub struct Rect;
```

Source: `rendering\pill_ui_frame\src\draw.rs:82`

An axis-aligned rectangle in logical pixels.

## Fields

<a id="rustdoc-item-103"></a>

### `min`

```rust
min: pill_core::math::Vector2f
```

The corner with the smaller x and y.

<a id="rustdoc-item-105"></a>

### `max`

```rust
max: pill_core::math::Vector2f
```

The corner with the larger x and y.

## Associated functions and methods

<a id="rustdoc-item-107"></a>

### `new`

```rust
pub fn new(min: Vector2f, max: Vector2f) -> Rect;
```

A rectangle from its two corners, whatever their order.

<a id="rustdoc-item-108"></a>

### `from_min_size`

```rust
pub fn from_min_size(min: Vector2f, size: Vector2f) -> Rect;
```

A rectangle from its top-left corner and its size.

<a id="rustdoc-item-109"></a>

### `width`

```rust
pub fn width(self: &Self) -> f32;
```

The width, along x.

<a id="rustdoc-item-110"></a>

### `height`

```rust
pub fn height(self: &Self) -> f32;
```

The height, along y.

<a id="rustdoc-item-111"></a>

### `intersection`

```rust
pub fn intersection(self: &Self, other: &Rect) -> Option<Rect>;
```

The overlap of two rectangles, or `None` when they do not overlap.

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
