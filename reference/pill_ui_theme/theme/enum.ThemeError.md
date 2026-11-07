<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-180"></a>

# Enum `pill_ui_theme::theme::ThemeError`

```rust
pub enum ThemeError { ... }
```

Source: `ui\pill_ui_theme\src\theme.rs:756`

A refused theme document or item.

## Variants

<a id="rustdoc-item-178"></a>

### `Json`

```rust
Json
```

The document did not parse as JSON, or did not fit the override shape.

<a id="rustdoc-item-1275"></a>

### `Item`

```rust
Item
```

One item's value was refused.

## Associated functions and methods

<a id="rustdoc-item-1276"></a>

### `item`

```rust
pub(in theme) fn item<impl Into<String>: Into<String>, impl Into<String>: Into<String>>(item: impl Into<String>, detail: impl Into<String>) -> Self;
```

Builds the error for one refused item, from its dotted path and the
reason it was refused.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
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
- `Debug`
- `Error`
- `Display`
