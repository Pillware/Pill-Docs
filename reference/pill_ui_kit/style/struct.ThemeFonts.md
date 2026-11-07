<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10"></a>

# Struct `pill_ui_kit::style::ThemeFonts`

```rust
pub struct ThemeFonts;
```

Source: `ui\pill_ui_kit\src\style.rs:72`

The font bytes the theme's layers supplied.

The kit installs its own copy of each font. The game copies the bytes out of
its asset store; the editor's user layer reads them from the file it names.

## Fields

<a id="rustdoc-item-5"></a>

### `body`

```rust
body: Option<Vec<u8>>
```

The body font's bytes.

<a id="rustdoc-item-8"></a>

### `display`

```rust
display: Option<Vec<u8>>
```

The display font's bytes.

<a id="rustdoc-item-9"></a>

### `monospace`

```rust
monospace: Option<Vec<u8>>
```

The monospace font's bytes.

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
- `Equivalent<K>`
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
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
