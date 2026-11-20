<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-583"></a>

# Struct `pill_ui_theme::overrides::WidgetStyleOverride`

```rust
pub struct WidgetStyleOverride;
```

Source: `ui\pill_ui_theme\src\overrides.rs:280`

One widget state's overridable fields.

## Fields

<a id="rustdoc-item-627"></a>

### `bg_fill`

```rust
bg_fill: Option<String>
```

The fill for widgets that must have a background.

<a id="rustdoc-item-628"></a>

### `weak_bg_fill`

```rust
weak_bg_fill: Option<String>
```

The fill for widgets that may have a background (buttons).

<a id="rustdoc-item-629"></a>

### `bg_stroke`

```rust
bg_stroke: Option<StrokeOverride>
```

The outline around the widget.

<a id="rustdoc-item-630"></a>

### `fg_stroke`

```rust
fg_stroke: Option<StrokeOverride>
```

The text and glyph colour.

<a id="rustdoc-item-631"></a>

### `corner_radius`

```rust
corner_radius: Option<u8>
```

The corner radius in this state.

<a id="rustdoc-item-632"></a>

### `expansion`

```rust
expansion: Option<f32>
```

How much the frame grows in this state.

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
- `Deserialize<'de>`
- `StructuralPartialEq`
- `PartialEq`
- `Serialize`
