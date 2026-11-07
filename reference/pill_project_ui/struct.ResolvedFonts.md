<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-394"></a>

# Struct `pill_project_ui::ResolvedFonts`

```rust
pub(crate) struct ResolvedFonts;
```

Visibility: `crate` · Source: `ui\pill_project_ui\src\lib.rs:438`

The fonts a theme's paths resolved to.

## Fields

<a id="rustdoc-item-391"></a>

### `font_handles`

```rust
font_handles: [Option<pill_engine_core::Handle<pill_ui_theme::FontAsset>>; 3]
```

Each family's handle in the store.

<a id="rustdoc-item-392"></a>

### `font_versions`

```rust
font_versions: [Option<u64>; 3]
```

Those handles' content versions when the bytes were read.

<a id="rustdoc-item-393"></a>

### `fonts`

```rust
fonts: kit::style::ThemeFonts
```

The bytes the kit installs.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
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
- `Default`
