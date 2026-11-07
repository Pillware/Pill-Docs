<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-750"></a>

# Struct `pill_ui_theme::register::LoadedFont`

```rust
pub struct LoadedFont;
```

Source: `ui\pill_ui_theme\src\register.rs:75`

A font a theme layer named, loaded.

## Fields

<a id="rustdoc-item-747"></a>

### `handle`

```rust
handle: pill_engine_core::Handle<crate::font::FontAsset>
```

The font's handle in the asset store.

<a id="rustdoc-item-749"></a>

### `version`

```rust
version: Option<u64>
```

The store's content version for the font. It changes whenever the
store's copy changes, so a caller compares it instead of hashing the
bytes.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
