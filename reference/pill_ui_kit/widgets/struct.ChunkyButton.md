<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-215"></a>

# Struct `pill_ui_kit::widgets::ChunkyButton`

```rust
pub struct ChunkyButton<'a>;
```

Source: `ui\pill_ui_kit\src\widgets.rs:61`

A button with a hard shadow, painted from a theme's tokens.

The button reports clicks like any other egui button: a click is a press
and a release on the same widget, and `add_enabled(false, ..)` reports no
click at all.

## Fields

<a id="rustdoc-item-210"></a>

### `label`

```rust
label: egui::WidgetText
```

The label drawn on the face.

<a id="rustdoc-item-212"></a>

### `theme`

```rust
theme: &'a pill_ui_theme::Theme
```

The tokens the face is painted with.

<a id="rustdoc-item-213"></a>

### `uses_accent_face`

```rust
uses_accent_face: bool
```

Whether the face uses the accent colours.

<a id="rustdoc-item-214"></a>

### `selected`

```rust
selected: bool
```

Whether the button is the chosen one of its group.

## Associated functions and methods

<a id="rustdoc-item-216"></a>

### `new`

```rust
pub fn new<impl Into<WidgetText>: Into<WidgetText>>(label: impl Into<WidgetText>, theme: &'a Theme) -> Self;
```

Creates a neutral chunky button with `label` on its face, painted from
`theme`.

<a id="rustdoc-item-217"></a>

### `accent`

```rust
pub fn accent(self: Self, uses_accent_face: bool) -> Self;
```

Chooses the accent face: the accent colour as the fill, the frame
colour as the text colour, and the hot accent while the pointer is over
the button or the button is held.

<a id="rustdoc-item-218"></a>

### `selected`

```rust
pub fn selected(self: Self, selected: bool) -> Self;
```

Marks the button as the chosen one of its group. A chosen button also
uses the accent face and paints a bar of the selection colour along the
shadow's left edge.

<a id="rustdoc-item-219"></a>

### `face_colors`

```rust
pub(in widgets) fn face_colors(self: &Self, enabled: bool, hovered: bool, held: bool) -> (Color32, Color32);
```

Returns the face's fill colour and text colour for the given state.

Every colour comes from a theme token. The accent face uses the accent
colour, or the hot accent while the pointer is over the button or the
button is held. The neutral face uses the raised panel colour at rest,
the control colour while hovered, and the line colour while held. A
disabled face uses the panel colour and the muted text colour.

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
- `Widget`
