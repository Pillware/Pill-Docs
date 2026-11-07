<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-835"></a>

# Struct `pill_ui_theme::theme::Stroke`

```rust
pub struct Stroke;
```

Source: `ui\pill_ui_theme\src\theme.rs:105`

A line stroke: a width in points and a colour.

## Fields

<a id="rustdoc-item-833"></a>

### `width`

```rust
width: f32
```

The width in points.

<a id="rustdoc-item-834"></a>

### `color`

```rust
color: Rgba
```

The stroke's colour.

## Associated functions and methods

<a id="rustdoc-item-836"></a>

### `new`

```rust
pub const fn new(width: f32, color: Rgba) -> Self;
```

A stroke of `width` points in `color`.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
