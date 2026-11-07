<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-108"></a>

# Struct `pill_ui_theme::font::FontImportSettings`

```rust
pub struct FontImportSettings;
```

Source: `ui\pill_ui_theme\src\font.rs:79`

The import settings a font's `.meta` file holds.

There is nothing to configure, because the bytes say everything about the
font, but an imported asset needs a settings type. The `.meta` file is also
where the font's guid lives, and that guid keeps the font's identity when
the file is renamed.

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
- `DeserializeOwned`
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
- `Serialize`
- `Deserialize<'de>`
