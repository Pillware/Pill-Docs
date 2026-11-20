<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-789"></a>

# Struct `pill_ui_theme::theme::Rgba`

```rust
pub struct Rgba;
```

Source: `ui\pill_ui_theme\src\theme.rs:43`

An sRGB colour with straight (not premultiplied) alpha, stored as
`[red, green, blue, alpha]`.

## Fields

<a id="rustdoc-item-788"></a>

### `0`

```rust
0: [u8; 4]
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-790"></a>

### `rgb`

```rust
pub const fn rgb(red: u8, green: u8, blue: u8) -> Self;
```

An opaque colour.

<a id="rustdoc-item-791"></a>

### `with_alpha`

```rust
pub const fn with_alpha(red: u8, green: u8, blue: u8, alpha: u8) -> Self;
```

A colour with an explicit alpha.

<a id="rustdoc-item-792"></a>

### `parse`

```rust
pub fn parse(text: &str) -> Result<Self, String>;
```

Parse `#rrggbb` or `#rrggbbaa`.

#### Errors

A message containing the refused text, when it lacks the `#`, has the
wrong length, or has a channel that is not hexadecimal.

<a id="rustdoc-item-793"></a>

### `hex`

```rust
pub fn hex(self: Self) -> String;
```

The colour as `#rrggbb`, or `#rrggbbaa` when it is not opaque.

<a id="rustdoc-item-794"></a>

### `with_alpha_factor`

```rust
pub fn with_alpha_factor(self: Self, factor: f32) -> Self;
```

The colour with its alpha scaled by `factor` (0.0..=1.0).

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
- `ToString`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Clone`
- `Copy`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Hash`
- `Display`
