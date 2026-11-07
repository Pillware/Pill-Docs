<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-208"></a>

# Module `pill_ui_kit::widgets`

Source: `ui\pill_ui_kit\src\widgets.rs:1`

The chunky button: a flat face on a hard shadow with no blur.
The brutalist chunky button: a flat face over a hard shadow with no blur.
While the button is held, the face moves onto the shadow, as if pressed.

## Responsibilities

- [`ChunkyButton`](struct.ChunkyButton.md#rustdoc-item-215): a button drawn from a [`Theme`](pill_ui_theme::Theme)'s
  tokens, in three variants - neutral, accent and selected - plus a
  disabled look.
- [`ChunkyButton::new`](struct.ChunkyButton.md#rustdoc-item-216): the label and the theme; `.accent(..)` and
  `.selected(..)` pick the variant.

## Design

egui's stock `Button` cannot draw a hard shadow with no blur, and
`Button::fill` also overrides the hover and pressed colours. This widget
therefore lays its rectangle out first, reads the state from the response,
and then paints the shadow and the face itself. A clipped button paints
nothing at all.

The widget keeps nothing in egui's memory. Project drawing code is a
reloadable DLL image, so a value left in a context's memory could outlive
it. Everything the widget needs comes from the `Theme` the caller passes
and the `Response` it returns.

## Module contents

### Structs
- [`ChunkyButton`](struct.ChunkyButton.md#rustdoc-item-215) — A button with a hard shadow, painted from a theme's tokens.

### Functions
- [`to_egui_color`](fn.to_egui_color.md#rustdoc-item-250) — Returns the egui colour that matches a theme colour.

### Constants
- [`OUTLINE_WIDTH_POINTS`](constant.OUTLINE_WIDTH_POINTS.md#rustdoc-item-207) — The width of the face's outline, in points.
- [`SELECTION_BAR_WIDTH_POINTS`](constant.SELECTION_BAR_WIDTH_POINTS.md#rustdoc-item-209) — The width of the selection bar on a chosen face, in points.
- [`SHADOW_OFFSET`](constant.SHADOW_OFFSET.md#rustdoc-item-206) — The distance between the face and its shadow, in points.
