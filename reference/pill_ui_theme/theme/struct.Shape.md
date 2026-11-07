<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1066"></a>

# Struct `pill_ui_theme::theme::Shape`

```rust
pub struct Shape;
```

Source: `ui\pill_ui_theme\src\theme.rs:296`

The corner radii, strokes, shadows and two accent widths a UI reads from
the theme.

## Fields

<a id="rustdoc-item-431"></a>

### `corner_radius`

```rust
corner_radius: u8
```

The default corner radius.

<a id="rustdoc-item-433"></a>

### `window_corner_radius`

```rust
window_corner_radius: u8
```

A window's corner radius.

<a id="rustdoc-item-435"></a>

### `menu_corner_radius`

```rust
menu_corner_radius: u8
```

A menu's or popup's corner radius.

<a id="rustdoc-item-437"></a>

### `window_stroke`

```rust
window_stroke: Stroke
```

The stroke around a window.

<a id="rustdoc-item-440"></a>

### `window_shadow`

```rust
window_shadow: Shadow
```

The window shadow.

<a id="rustdoc-item-443"></a>

### `popup_shadow`

```rust
popup_shadow: Shadow
```

The popup shadow.

<a id="rustdoc-item-445"></a>

### `selection_stroke`

```rust
selection_stroke: Stroke
```

The stroke around selected text.

<a id="rustdoc-item-447"></a>

### `tab_underline_width`

```rust
tab_underline_width: f32
```

The active tab's underline width.

<a id="rustdoc-item-449"></a>

### `selected_row_bar_width`

```rust
selected_row_bar_width: f32
```

The selected row's left bar width.

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
- `Default`
