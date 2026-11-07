<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5"></a>

# Struct `pill_ui_theme::font::FontAsset`

```rust
pub struct FontAsset;
```

Source: `ui\pill_ui_theme\src\font.rs:52`

A font file a theme layer named, as its bytes.

The type is an asset so the store can version it and load it again when the
file changes; a UI copies [`Self::bytes`](#rustdoc-item-7) into egui when it installs the
fonts.

## Fields

<a id="rustdoc-item-7"></a>

### `bytes`

```rust
bytes: Vec<u8>
```

The font file's bytes, copied unchanged.

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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Asset`
- `TraitAccessible<dyn Asset>`
- `ImportedAsset`
