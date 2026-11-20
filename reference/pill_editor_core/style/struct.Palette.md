<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10226"></a>

# Struct `pill_editor_core::style::Palette`

```rust
pub struct Palette;
```

Source: `editor\pill_editor_core\src\style.rs:65`

The editor's colour roles as egui colours, copied from the last installed
theme.

The shell reads them through the role accessors below and never names the
theme's own `Rgba` values, so changing the theme gives every call site a new
colour at once.

## Fields

<a id="rustdoc-item-10203"></a>

### `frame`

```rust
frame: egui::Color32
```

The window frame and tab-strip background.

<a id="rustdoc-item-10204"></a>

### `panel`

```rust
panel: egui::Color32
```

A panel's and tab body's background.

<a id="rustdoc-item-10205"></a>

### `panel_raised`

```rust
panel_raised: egui::Color32
```

A raised surface: menus, hovered rows, tooltips.

<a id="rustdoc-item-10206"></a>

### `control`

```rust
control: egui::Color32
```

A flat control's fill on a panel.

<a id="rustdoc-item-10207"></a>

### `well`

```rust
well: egui::Color32
```

Inputs and wells.

<a id="rustdoc-item-10208"></a>

### `line`

```rust
line: egui::Color32
```

Borders and separators.

<a id="rustdoc-item-10209"></a>

### `text`

```rust
text: egui::Color32
```

Normal text.

<a id="rustdoc-item-10210"></a>

### `text_strong`

```rust
text_strong: egui::Color32
```

Emphasized text: active tab titles, hovered labels.

<a id="rustdoc-item-10211"></a>

### `text_muted`

```rust
text_muted: egui::Color32
```

Muted text: inactive tab titles, secondary labels.

<a id="rustdoc-item-10212"></a>

### `accent`

```rust
accent: egui::Color32
```

The accent: the active tab's underline and other highlighted marks.

<a id="rustdoc-item-10213"></a>

### `accent_hot`

```rust
accent_hot: egui::Color32
```

A brighter accent: the link colour and the face of an accented control
while it is hovered or held.

<a id="rustdoc-item-10214"></a>

### `success`

```rust
success: egui::Color32
```

Success and running states.

<a id="rustdoc-item-10215"></a>

### `warning`

```rust
warning: egui::Color32
```

Warnings.

<a id="rustdoc-item-10216"></a>

### `danger`

```rust
danger: egui::Color32
```

Errors and destructive actions.

<a id="rustdoc-item-10217"></a>

### `selection`

```rust
selection: egui::Color32
```

A selected row's tint.

<a id="rustdoc-item-10218"></a>

### `selection_bar`

```rust
selection_bar: egui::Color32
```

A selected row's left bar.

<a id="rustdoc-item-10219"></a>

### `overlay`

```rust
overlay: egui::Color32
```

A floating panel's fill over the scene.

<a id="rustdoc-item-10220"></a>

### `overlay_border`

```rust
overlay_border: egui::Color32
```

A floating panel's border.

<a id="rustdoc-item-10221"></a>

### `shadow`

```rust
shadow: egui::Color32
```

The ink a drop shadow is cast in.

<a id="rustdoc-item-10222"></a>

### `log_info`

```rust
log_info: egui::Color32
```

A log line at `info`.

<a id="rustdoc-item-10223"></a>

### `log_debug`

```rust
log_debug: egui::Color32
```

A log line at `debug`.

<a id="rustdoc-item-10224"></a>

### `log_warn`

```rust
log_warn: egui::Color32
```

A log line at `warn`.

<a id="rustdoc-item-10225"></a>

### `log_error`

```rust
log_error: egui::Color32
```

A log line at `error`.

## Associated functions and methods

<a id="rustdoc-item-10227"></a>

### `from_theme`

```rust
pub(in style) fn from_theme(theme: &Theme) -> Self;
```

The roles of `theme`.

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
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
