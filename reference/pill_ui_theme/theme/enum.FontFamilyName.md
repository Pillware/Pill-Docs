<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-915"></a>

# Enum `pill_ui_theme::theme::FontFamilyName`

```rust
pub enum FontFamilyName { ... }
```

Source: `ui\pill_ui_theme\src\theme.rs:150`

The family a text style names.

## Variants

<a id="rustdoc-item-912"></a>

### `Proportional`

```rust
Proportional
```

The body font family.

<a id="rustdoc-item-913"></a>

### `Monospace`

```rust
Monospace
```

The code font family.

<a id="rustdoc-item-914"></a>

### `Display`

```rust
Display
```

The display font family.

## Associated functions and methods

<a id="rustdoc-item-916"></a>

### `parse`

```rust
pub fn parse(text: &str) -> Result<Self, String>;
```

Parse a family name: `proportional` (or `body`), `monospace` (or
`mono`) or `display`.

#### Errors

A message naming the accepted families.

<a id="rustdoc-item-917"></a>

### `as_str`

```rust
pub fn as_str(self: Self) -> &'static str;
```

The name this family is written as in a document.

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
