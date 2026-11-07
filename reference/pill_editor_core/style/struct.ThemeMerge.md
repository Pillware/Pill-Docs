<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8418"></a>

# Struct `pill_editor_core::style::ThemeMerge`

```rust
pub struct ThemeMerge;
```

Source: `editor\pill_editor_core\src\style.rs:616`

The result of merging the layers over the code default.

## Fields

<a id="rustdoc-item-8415"></a>

### `theme`

```rust
theme: pill_ui_theme::Theme
```

The merged theme.

<a id="rustdoc-item-8416"></a>

### `layers`

```rust
layers: Vec<ThemeLayerInfo>
```

The layers that were merged, in apply order; the code default is always
first.

<a id="rustdoc-item-8417"></a>

### `refused`

```rust
refused: Vec<(ThemeLayer, String)>
```

The layers a refused override dropped, with the reason.

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
