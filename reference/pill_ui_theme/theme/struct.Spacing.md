<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1030"></a>

# Struct `pill_ui_theme::theme::Spacing`

```rust
pub struct Spacing;
```

Source: `ui\pill_ui_theme\src\theme.rs:224`

The layout metrics a UI reads from the theme.

## Fields

<a id="rustdoc-item-354"></a>

### `item_spacing`

```rust
item_spacing: [f32; 2]
```

Gap between consecutive widgets.

<a id="rustdoc-item-356"></a>

### `button_padding`

```rust
button_padding: [f32; 2]
```

Padding inside a button.

<a id="rustdoc-item-358"></a>

### `interact_size`

```rust
interact_size: [f32; 2]
```

Minimum interactive size.

<a id="rustdoc-item-360"></a>

### `window_margin`

```rust
window_margin: f32
```

Padding inside a window.

<a id="rustdoc-item-362"></a>

### `menu_margin`

```rust
menu_margin: f32
```

Padding inside a menu or popup.

<a id="rustdoc-item-364"></a>

### `indent`

```rust
indent: f32
```

Offset of an indented body.

<a id="rustdoc-item-366"></a>

### `slider_width`

```rust
slider_width: f32
```

A slider's width.

<a id="rustdoc-item-368"></a>

### `slider_rail_height`

```rust
slider_rail_height: f32
```

A slider rail's height.

<a id="rustdoc-item-370"></a>

### `icon_width`

```rust
icon_width: f32
```

The outer size of the icon a check box or radio button draws.

<a id="rustdoc-item-372"></a>

### `icon_width_inner`

```rust
icon_width_inner: f32
```

The inner size of that icon: the mark inside the box.

<a id="rustdoc-item-374"></a>

### `icon_spacing`

```rust
icon_spacing: f32
```

The gap between an icon and its label.

<a id="rustdoc-item-376"></a>

### `menu_width`

```rust
menu_width: f32
```

A menu's wrapping width. egui 0.36 never reads its `menu_width`, so
this changes nothing today.

<a id="rustdoc-item-378"></a>

### `tooltip_width`

```rust
tooltip_width: f32
```

A tooltip's maximum width; zero lets egui size it.

<a id="rustdoc-item-380"></a>

### `combo_width`

```rust
combo_width: f32
```

A combo box's minimum width; zero lets egui size it.

<a id="rustdoc-item-382"></a>

### `combo_height`

```rust
combo_height: f32
```

The height at which a combo box starts to scroll.

<a id="rustdoc-item-384"></a>

### `text_edit_width`

```rust
text_edit_width: f32
```

A text edit's default width.

<a id="rustdoc-item-386"></a>

### `menu_spacing`

```rust
menu_spacing: f32
```

The horizontal gap between a menu and its submenu.

<a id="rustdoc-item-388"></a>

### `scroll_bar_width`

```rust
scroll_bar_width: f32
```

A scroll bar's width.

<a id="rustdoc-item-390"></a>

### `scroll_floating`

```rust
scroll_floating: bool
```

Whether scroll bars float over the content. A floating bar is thin
until the pointer reaches it and takes no layout width.

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
