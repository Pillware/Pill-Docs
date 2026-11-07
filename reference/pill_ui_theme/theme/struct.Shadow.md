<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-875"></a>

# Struct `pill_ui_theme::theme::Shadow`

```rust
pub struct Shadow;
```

Source: `ui\pill_ui_theme\src\theme.rs:121`

A window or popup shadow, in egui 0.36's integer fields.

## Fields

<a id="rustdoc-item-871"></a>

### `offset`

```rust
offset: [i8; 2]
```

The offset in points.

<a id="rustdoc-item-872"></a>

### `blur`

```rust
blur: u8
```

The blur radius in points.

<a id="rustdoc-item-873"></a>

### `spread`

```rust
spread: u8
```

The spread in points.

<a id="rustdoc-item-874"></a>

### `color`

```rust
color: Rgba
```

The shadow's colour.

## Associated functions and methods

<a id="rustdoc-item-876"></a>

### `new`

```rust
pub const fn new(offset: [i8; 2], blur: u8, spread: u8, color: Rgba) -> Self;
```

A shadow with the given fields.

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
- `Eq`
