<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-709"></a>

# Enum `pill_ui_theme::register::ThemePathScope`

```rust
pub enum ThemePathScope { ... }
```

Source: `ui\pill_ui_theme\src\register.rs:38`

Which part of a project's `res` a theme path may name.

## Variants

<a id="rustdoc-item-707"></a>

### `Game`

```rust
Game
```

A game's own theme may name anything below `res` except `editor/`.

<a id="rustdoc-item-708"></a>

### `Editor`

```rust
Editor
```

An editor layer may name only files under `res/editor/`.

## Associated functions and methods

<a id="rustdoc-item-710"></a>

### `check`

```rust
pub fn check(self: Self, path: &str) -> Result<String, String>;
```

Checks `path` against this scope's rule and returns it in normalized
form.

#### Errors

A message saying which rule the path breaks: a game naming
`editor/...`, an editor layer naming something outside it, or a path
that is absolute, climbs out with `..`, or is empty.

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
