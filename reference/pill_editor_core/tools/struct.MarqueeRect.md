<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11280"></a>

# Struct `pill_editor_core::tools::MarqueeRect`

```rust
pub struct MarqueeRect;
```

Source: `editor\pill_editor_core\src\tools.rs:677`

The rectangle a marquee drag covers, in one view's pixels.

## Fields

<a id="rustdoc-item-11276"></a>

### `min_x`

```rust
min_x: f32
```

The left edge.

<a id="rustdoc-item-11277"></a>

### `min_y`

```rust
min_y: f32
```

The top edge.

<a id="rustdoc-item-11278"></a>

### `max_x`

```rust
max_x: f32
```

The right edge.

<a id="rustdoc-item-11279"></a>

### `max_y`

```rust
max_y: f32
```

The bottom edge.

## Associated functions and methods

<a id="rustdoc-item-11281"></a>

### `from_corners`

```rust
pub fn from_corners(first: (f32, f32), second: (f32, f32)) -> MarqueeRect;
```

The rectangle two drag corners enclose, in either direction.

<a id="rustdoc-item-11282"></a>

### `contains`

```rust
pub fn contains(self: &Self, x: f32, y: f32) -> bool;
```

Whether `(x, y)` lies inside the rectangle, edges included.

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
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
