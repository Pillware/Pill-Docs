<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-0"></a>

# Struct `pill_ui_theme::overrides::ThemeOverrides`

```rust
pub struct ThemeOverrides;
```

Source: `ui\pill_ui_theme\src\overrides.rs:38`

The theme changes a `.theme` document lists.

A document names only the items it changes. Merging it onto a complete base
theme yields the theme a UI installs.

## Fields

<a id="rustdoc-item-162"></a>

### `name`

```rust
name: Option<String>
```

The theme's name. A document may set it, and the merge copies it onto
the theme.

<a id="rustdoc-item-164"></a>

### `dark_mode`

```rust
dark_mode: Option<bool>
```

Whether egui treats the theme as dark mode.

<a id="rustdoc-item-165"></a>

### `palette`

```rust
palette: PaletteOverrides
```

The colour roles this document changes.

<a id="rustdoc-item-167"></a>

### `text_styles`

```rust
text_styles: std::collections::BTreeMap<String, TextStyleOverride>
```

The named text styles this document replaces or adds.

<a id="rustdoc-item-170"></a>

### `spacing`

```rust
spacing: SpacingOverrides
```

The layout metrics this document changes.

<a id="rustdoc-item-172"></a>

### `shape`

```rust
shape: ShapeOverrides
```

The corner radii, strokes, shadows and accent widths this document
changes.

<a id="rustdoc-item-174"></a>

### `widgets`

```rust
widgets: WidgetsOverrides
```

The widget states this document changes.

<a id="rustdoc-item-176"></a>

### `fonts`

```rust
fonts: FontsOverrides
```

The font paths this document names.

## Associated functions and methods

<a id="rustdoc-item-179"></a>

### `from_json_str`

```rust
pub fn from_json_str(json_text: &str) -> Result<Self, ThemeError>;
```

Reads an override document from its JSON text.

The text is either the override body itself or a standalone asset file,
which carries its body under `asset`. Both give the same value.

#### Errors

[`ThemeError::Json`](../theme/enum.ThemeError.md#rustdoc-item-178) with serde's message when the text is not JSON,
does not hold an object, or names an unknown or wrongly typed item.

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
- `Asset`
- `StandaloneAsset`
- `TraitAccessible<dyn Asset>`
- `Clone`
- `Debug`
- `Default`
- `Deserialize<'de>`
- `StructuralPartialEq`
- `PartialEq`
- `Serialize`
