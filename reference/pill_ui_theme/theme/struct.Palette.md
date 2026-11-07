<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1186"></a>

# Struct `pill_ui_theme::theme::Palette`

```rust
pub struct Palette;
```

Source: `ui\pill_ui_theme\src\theme.rs:474`

The colour roles a theme paints with, named by role and not by hue.

## Fields

<a id="rustdoc-item-230"></a>

### `frame`

```rust
frame: Rgba
```

The window frame and tab-strip background.

<a id="rustdoc-item-232"></a>

### `panel`

```rust
panel: Rgba
```

A panel's background.

<a id="rustdoc-item-234"></a>

### `panel_raised`

```rust
panel_raised: Rgba
```

A surface one step lighter than the panel: a hovered tab, a neutral
button's face, and striped rows.

<a id="rustdoc-item-236"></a>

### `control`

```rust
control: Rgba
```

A flat control's fill: buttons and rows drawn on a panel.

<a id="rustdoc-item-238"></a>

### `well`

```rust
well: Rgba
```

The background of text inputs and other sunken areas.

<a id="rustdoc-item-240"></a>

### `line`

```rust
line: Rgba
```

Borders and separators.

<a id="rustdoc-item-242"></a>

### `text`

```rust
text: Rgba
```

Normal text.

<a id="rustdoc-item-244"></a>

### `text_strong`

```rust
text_strong: Rgba
```

Emphasized text.

<a id="rustdoc-item-246"></a>

### `text_muted`

```rust
text_muted: Rgba
```

Muted text.

<a id="rustdoc-item-248"></a>

### `accent`

```rust
accent: Rgba
```

The accent: focus, active tabs, selection.

<a id="rustdoc-item-250"></a>

### `accent_hot`

```rust
accent_hot: Rgba
```

A brighter accent for hovered accents.

<a id="rustdoc-item-252"></a>

### `success`

```rust
success: Rgba
```

Success and running states.

<a id="rustdoc-item-254"></a>

### `warning`

```rust
warning: Rgba
```

Warnings.

<a id="rustdoc-item-256"></a>

### `danger`

```rust
danger: Rgba
```

Errors and destructive actions.

<a id="rustdoc-item-258"></a>

### `selection`

```rust
selection: Rgba
```

A selected row's tint.

<a id="rustdoc-item-260"></a>

### `selection_bar`

```rust
selection_bar: Rgba
```

A selected row's left bar.

<a id="rustdoc-item-262"></a>

### `overlay`

```rust
overlay: Rgba
```

A floating panel's fill over the scene.

<a id="rustdoc-item-264"></a>

### `overlay_border`

```rust
overlay_border: Rgba
```

A floating panel's border.

<a id="rustdoc-item-266"></a>

### `log_info`

```rust
log_info: Rgba
```

A log line at `info`.

<a id="rustdoc-item-268"></a>

### `log_debug`

```rust
log_debug: Rgba
```

A log line at `debug`.

<a id="rustdoc-item-270"></a>

### `log_warn`

```rust
log_warn: Rgba
```

A log line at `warn`.

<a id="rustdoc-item-272"></a>

### `log_error`

```rust
log_error: Rgba
```

A log line at `error`.

## Associated functions and methods

<a id="rustdoc-item-1187"></a>

### `brutalist`

```rust
pub(in theme) fn brutalist() -> Self;
```

The brutalist recipe's colours.

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
