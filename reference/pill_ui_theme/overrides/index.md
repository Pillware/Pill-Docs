<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-706"></a>

# Module `pill_ui_theme::overrides`

Source: `ui\pill_ui_theme\src\overrides.rs:1`

The document a `.theme` file holds, which lists only the items it changes,
and the reader that parses it.
The sparse theme document a `.theme` file holds.

## Responsibilities

- [`ThemeOverrides`](struct.ThemeOverrides.md#rustdoc-item-0): every token a document may change, each one optional,
  so a file states only what it differs from the base theme.
- [`ThemeOverrides::from_json_str`](struct.ThemeOverrides.md#rustdoc-item-179): accepts a bare override body or a
  complete standalone asset document (the body under `asset`).
- The nested override types the merge reads.

## Design

Every struct refuses unknown fields, and a field left out of a document
means "no change". A typo therefore fails loudly instead of silently doing
nothing, and a document never has to restate a value it keeps. Colours stay
strings here and are parsed during the merge, where the item's dotted path
is known, so an error can name `palette.accent` instead of "a colour".

## Module contents

### Structs
- [`FontsOverrides`](struct.FontsOverrides.md#rustdoc-item-177) — The font paths [`ThemeOverrides`] can name.
- [`PaletteOverrides`](struct.PaletteOverrides.md#rustdoc-item-166) — The colour roles [`ThemeOverrides`] can change, each written as `#rrggbb` or
- [`ShadowOverride`](struct.ShadowOverride.md#rustdoc-item-442) — One shadow's overridable fields.
- [`ShapeOverrides`](struct.ShapeOverrides.md#rustdoc-item-173) — The shape values [`ThemeOverrides`] can change.
- [`SpacingOverrides`](struct.SpacingOverrides.md#rustdoc-item-171) — The layout metrics [`ThemeOverrides`] can change.
- [`StrokeOverride`](struct.StrokeOverride.md#rustdoc-item-439) — One stroke's overridable fields.
- [`TextStyleOverride`](struct.TextStyleOverride.md#rustdoc-item-169) — One named text style's overridable fields.
- [`ThemeOverrides`](struct.ThemeOverrides.md#rustdoc-item-0) — The theme changes a `.theme` document lists.
- [`WidgetsOverrides`](struct.WidgetsOverrides.md#rustdoc-item-175) — The widget states [`ThemeOverrides`] can change.
- [`WidgetStyleOverride`](struct.WidgetStyleOverride.md#rustdoc-item-575) — One widget state's overridable fields.
