<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-994"></a>

# Struct `pill_ui_theme::theme::ThemeFontPaths`

```rust
pub struct ThemeFontPaths;
```

Source: `ui\pill_ui_theme\src\theme.rs:209`

The font paths a theme names, resolved by each consumer.

A merge carries the paths and not the font bytes. The game loads a path as
a `FontAsset`, the editor's project layer does the same, and the editor's
user layer reads the file from disk.

## Fields

<a id="rustdoc-item-991"></a>

### `body`

```rust
body: Option<String>
```

The body font's path.

<a id="rustdoc-item-992"></a>

### `display`

```rust
display: Option<String>
```

The display font's path.

<a id="rustdoc-item-993"></a>

### `monospace`

```rust
monospace: Option<String>
```

The monospace font's path.

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
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
