<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1162"></a>

# Module `pill_ui_theme::theme`

Source: `ui\pill_ui_theme\src\theme.rs:1`

The complete theme values, and the merge that applies an override document
to a base theme.
The complete theme tokens and the merge that applies overrides to them.

## Responsibilities

- [`Theme`](struct.Theme.md#rustdoc-item-1245): every value a UI's style needs, as plain owned data.
- [`Theme::fallback`](struct.Theme.md#rustdoc-item-1246) and [`Theme::brutalist`](struct.Theme.md#rustdoc-item-1247): the neutral dark base and
  the brutalist recipe.
- [`Theme::merged_with`](struct.Theme.md#rustdoc-item-1248): turns a sparse override document into a complete
  theme.
- The token types the document and the UI kit share ([`Rgba`](struct.Rgba.md#rustdoc-item-789), [`Stroke`](struct.Stroke.md#rustdoc-item-845),
  [`Shadow`](struct.Shadow.md#rustdoc-item-885), [`Spacing`](struct.Spacing.md#rustdoc-item-1043), [`Shape`](struct.Shape.md#rustdoc-item-1079), [`WidgetStyle`](struct.WidgetStyle.md#rustdoc-item-1121), [`WidgetStates`](struct.WidgetStates.md#rustdoc-item-1160)).

## Design

Everything here is plain data and needs no egui. This crate is a shared
`dylib`, so a project, `pill_project_ui`, the editor shell and
`pill_editor_core` all see the same `Theme` type, and each UI converts the
tokens inside its own link unit.

A merge never fills gaps from egui's defaults. The base theme is complete,
so an item the document leaves out keeps the base value. One refused item
rejects the whole layer, so a UI never paints a half-applied theme.

## Module contents

### Structs
- [`Palette`](struct.Palette.md#rustdoc-item-1199) — The colour roles a theme paints with, named by role and not by hue.
- [`Rgba`](struct.Rgba.md#rustdoc-item-789) — An sRGB colour with straight (not premultiplied) alpha, stored as
- [`Shadow`](struct.Shadow.md#rustdoc-item-885) — A window or popup shadow, in egui 0.36's integer fields.
- [`Shape`](struct.Shape.md#rustdoc-item-1079) — The corner radii, strokes, shadows and two accent widths a UI reads from
- [`Spacing`](struct.Spacing.md#rustdoc-item-1043) — The layout metrics a UI reads from the theme.
- [`Stroke`](struct.Stroke.md#rustdoc-item-845) — A line stroke: a width in points and a colour.
- [`TextStyle`](struct.TextStyle.md#rustdoc-item-967) — One named text style: a size in points and a family.
- [`Theme`](struct.Theme.md#rustdoc-item-1245) — A complete set of UI tokens.
- [`ThemeFontPaths`](struct.ThemeFontPaths.md#rustdoc-item-1006) — The font paths a theme names, resolved by each consumer.
- [`WidgetStates`](struct.WidgetStates.md#rustdoc-item-1160) — The five interaction states egui picks from.
- [`WidgetStyle`](struct.WidgetStyle.md#rustdoc-item-1121) — One widget's look in one interaction state.

### Enums
- [`FontFamilyName`](enum.FontFamilyName.md#rustdoc-item-926) — The family a text style names.
- [`ThemeError`](enum.ThemeError.md#rustdoc-item-184) — A refused theme document or item.

### Functions
- [`check_number`](fn.check_number.md#rustdoc-item-1322) — Returns `value` when it is finite and non-negative, or an error naming
- [`fallback_text_styles`](fn.fallback_text_styles.md#rustdoc-item-1284) — The neutral fallback's five named text styles.
- [`merge_fonts`](fn.merge_fonts.md#rustdoc-item-1331) — Replace the font paths the document names.
- [`merge_palette`](fn.merge_palette.md#rustdoc-item-1323) — Replace every colour role the document names.
- [`merge_shadow`](fn.merge_shadow.md#rustdoc-item-1327) — Replace one shadow's present fields.
- [`merge_shape`](fn.merge_shape.md#rustdoc-item-1328) — Replace the shape items the document names.
- [`merge_spacing`](fn.merge_spacing.md#rustdoc-item-1325) — Replace the metrics the document names.
- [`merge_stroke`](fn.merge_stroke.md#rustdoc-item-1326) — Replace one stroke's present fields.
- [`merge_text_styles`](fn.merge_text_styles.md#rustdoc-item-1324) — Replace the named text styles the document names, adding new ones.
- [`merge_widget`](fn.merge_widget.md#rustdoc-item-1329) — Replace one widget state's present fields.
- [`merge_widgets`](fn.merge_widgets.md#rustdoc-item-1330) — Replace the fields the document names in each widget state.
- [`parse_color`](fn.parse_color.md#rustdoc-item-1321) — Parse a colour and name it on failure.
