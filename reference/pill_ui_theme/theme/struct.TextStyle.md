<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-955"></a>

# Struct `pill_ui_theme::theme::TextStyle`

```rust
pub struct TextStyle;
```

Source: `ui\pill_ui_theme\src\theme.rs:189`

One named text style: a size in points and a family.

## Fields

<a id="rustdoc-item-953"></a>

### `size`

```rust
size: f32
```

The size in points.

<a id="rustdoc-item-954"></a>

### `family`

```rust
family: FontFamilyName
```

The family the style draws in.

## Associated functions and methods

<a id="rustdoc-item-956"></a>

### `new`

```rust
pub const fn new(size: f32, family: FontFamilyName) -> Self;
```

A style of `size` points in `family`.

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
