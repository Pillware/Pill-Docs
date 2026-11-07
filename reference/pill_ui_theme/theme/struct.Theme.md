<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1232"></a>

# Struct `pill_ui_theme::theme::Theme`

```rust
pub struct Theme;
```

Source: `ui\pill_ui_theme\src\theme.rs:587`

A complete set of UI tokens.

## Fields

<a id="rustdoc-item-1224"></a>

### `name`

```rust
name: String
```

A name identifying this theme; a `.theme` document may override it.

<a id="rustdoc-item-1225"></a>

### `dark_mode`

```rust
dark_mode: bool
```

Whether the theme is dark, with light text on dark surfaces. egui
reads it as a summary flag and builds no values from it.

<a id="rustdoc-item-1226"></a>

### `palette`

```rust
palette: Palette
```

The colours.

<a id="rustdoc-item-1227"></a>

### `text_styles`

```rust
text_styles: std::collections::BTreeMap<String, TextStyle>
```

The named text styles, in stable order.

<a id="rustdoc-item-1228"></a>

### `spacing`

```rust
spacing: Spacing
```

The layout metrics.

<a id="rustdoc-item-1229"></a>

### `shape`

```rust
shape: Shape
```

The radii, strokes, shadows and accents.

<a id="rustdoc-item-1230"></a>

### `widgets`

```rust
widgets: WidgetStates
```

The five default widget states.

<a id="rustdoc-item-1231"></a>

### `fonts`

```rust
fonts: ThemeFontPaths
```

The font paths a consumer resolves.

## Associated functions and methods

<a id="rustdoc-item-1233"></a>

### `fallback`

```rust
pub fn fallback() -> Self;
```

A neutral dark theme built in code.

`install(engine)` installs this theme. It gives a game a usable look
with no theme file and no project code.

<a id="rustdoc-item-1234"></a>

### `brutalist`

```rust
pub fn brutalist() -> Self;
```

The brutalist recipe, as a code default.

It has square corners, shadows with no blur, a pink accent and light
text on near-black surfaces. Its spacing and text sizes are the
recipe's own.

<a id="rustdoc-item-1235"></a>

### `merged_with`

```rust
pub fn merged_with(self: &Self, overrides: &ThemeOverrides) -> Result<Self, ThemeError>;
```

Apply the present items of `overrides` on top of this theme.

#### Errors

A [`ThemeError`](enum.ThemeError.md#rustdoc-item-180) naming the first item the document gets wrong. The
theme this was called on is left unchanged.

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
- `Default`
