<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-204"></a>

# Module `pill_ui_kit::variants`

Source: `ui\pill_ui_kit\src\variants.rs:1`

Three looks for stock egui widgets: `primary`, `secondary` and `danger`.
Scoped style variants for stock egui widgets.

## Responsibilities

- [`primary`](fn.primary.md#rustdoc-item-199), [`secondary`](fn.secondary.md#rustdoc-item-201)
  and [`danger`](fn.danger.md#rustdoc-item-202): scoped widget colours and button
  padding from the theme's tokens, for a block the caller wraps in
  `ui.scope`.

## Design

A variant changes only the `Ui` it is given. Callers wrap it in
`ui.scope(|ui| { variants::danger(ui, &theme); ... })`, so the theme's look
comes back when the block ends. `Button::fill` sets one colour for every
state and drops egui's hover effect; changing the scoped `Style` keeps the
idle, hover and press colours separate.

## Module contents

### Functions
- [`danger`](fn.danger.md#rustdoc-item-202) — Applies the `danger` variant: a faint danger fill that becomes the full
- [`primary`](fn.primary.md#rustdoc-item-199) — Applies the `primary` variant: the accent fill.
- [`secondary`](fn.secondary.md#rustdoc-item-201) — Applies the `secondary` variant: a raised neutral fill.
- [`set_state_fills_and_padding`](fn.set_state_fills_and_padding.md#rustdoc-item-203) — Sets the widget fill for each of the three interaction states, the border
- [`to_egui_color`](fn.to_egui_color.md#rustdoc-item-205) — Returns the egui colour that matches a theme colour.
