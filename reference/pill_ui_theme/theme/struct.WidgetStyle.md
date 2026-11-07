<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1108"></a>

# Struct `pill_ui_theme::theme::WidgetStyle`

```rust
pub struct WidgetStyle;
```

Source: `ui\pill_ui_theme\src\theme.rs:339`

One widget's look in one interaction state.

## Fields

<a id="rustdoc-item-1102"></a>

### `bg_fill`

```rust
bg_fill: Rgba
```

The fill for widgets that must have a background, such as a check box
or a text edit.

<a id="rustdoc-item-1103"></a>

### `weak_bg_fill`

```rust
weak_bg_fill: Rgba
```

The fill for widgets whose background is optional, such as buttons.

<a id="rustdoc-item-1104"></a>

### `bg_stroke`

```rust
bg_stroke: Stroke
```

The outline drawn around a widget that has one.

<a id="rustdoc-item-1105"></a>

### `fg_stroke`

```rust
fg_stroke: Stroke
```

The text and glyph colour.

<a id="rustdoc-item-1106"></a>

### `corner_radius`

```rust
corner_radius: u8
```

The corner radius in this state.

<a id="rustdoc-item-1107"></a>

### `expansion`

```rust
expansion: f32
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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
