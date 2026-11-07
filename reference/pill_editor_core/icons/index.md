<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4424"></a>

# Module `pill_editor_core::icons`

Source: `editor\pill_editor_core\src\icons.rs:1`

Phosphor's icons: the fonts, the glyphs and the duotone painting.
Phosphor icons for the editor's chrome: single glyphs from the regular
face and duotone icons drawn as a fill under the line art.

## Responsibilities

- [`append_font_definitions`]: the two vendored Phosphor families, added to
  the font definitions that [`crate::style::apply_theme`](../style/fn.apply_theme.md#rustdoc-item-4574) installs through
  the UI kit.
- [`Icon`]: the icons the editor uses, with their codepoints in the fonts.
- [`rich`]: an icon and a label as one text run.
- [`paint_duotone`] and [`IconButton`]: Phosphor's duotone form, a fill
  under the line art, for the editor's buttons, menus and tool rows.

## Design

The vendored `Phosphor.ttf` (regular) and `Phosphor-Duotone.ttf` come from
the `@phosphor-icons/web` package. The duotone font holds each icon twice:
the fill shape at the codepoint and the line art one codepoint further.
The package's stylesheet overlays the pair at one fifth of the opacity;
[`paint_duotone`] draws the fill at [`DUOTONE_FILL_ALPHA`] from the same
origin as the line art and gets the same look with no image atlas. The
icons take the theme's colour and need no texture of their own.

Both icon families list their Phosphor face first. The UI fonts also map
this private-use range, so an icon listed behind them would draw as a
stray letter. [`rich`] carries the rule for mixing an icon with letters.

## Module contents

### Structs
- [`IconButton`](struct.IconButton.md#rustdoc-item-4529) — A button carrying a duotone icon and a label, drawn across the editor's

### Enums
- [`Icon`](enum.Icon.md#rustdoc-item-4468) — One Phosphor icon, named the way the package names it.

### Functions
- [`append_font_definitions`](fn.append_font_definitions.md#rustdoc-item-4565) — Appends the Phosphor fonts to `fonts` as the [`FAMILY`] and
- [`brighten`](fn.brighten.md#rustdoc-item-4573) — Returns `color` with every RGB channel raised by `amount`, stopping at
- [`glyph`](fn.glyph.md#rustdoc-item-4567) — The character at `codepoint`.
- [`paint_duotone`](fn.paint_duotone.md#rustdoc-item-4570) — Paints `icon`'s duotone form centred in `rect`, tinted `color`. The fill
- [`rich`](fn.rich.md#rustdoc-item-4564) — Combines `icon` and `label` into one text run. The icon's line art comes
- [`with_alpha`](fn.with_alpha.md#rustdoc-item-4569) — Returns `color` with its alpha channel scaled by `opacity_factor`.

### Constants
- [`DUOTONE_FAMILY`](constant.DUOTONE_FAMILY.md#rustdoc-item-4421) — The family of the duotone icons, falling back to the UI font.
- [`DUOTONE_FILL_ALPHA`](constant.DUOTONE_FILL_ALPHA.md#rustdoc-item-4422) — How strongly a duotone icon's fill shows under its line art.
- [`DUOTONE_FONT`](constant.DUOTONE_FONT.md#rustdoc-item-4428) — The duotone font, as the package shipped it.
- [`DUOTONE_KEY`](constant.DUOTONE_KEY.md#rustdoc-item-4430) — The key the duotone face is registered under.
- [`FAMILY`](constant.FAMILY.md#rustdoc-item-4420) — The family of the regular-weight icons, falling back to the UI font.
- [`HOVER_BRIGHTEN_AMOUNT`](constant.HOVER_BRIGHTEN_AMOUNT.md#rustdoc-item-4426) — How much the hovered fill of a row floating over a scene brightens.
- [`ICON_LABEL_GAP`](constant.ICON_LABEL_GAP.md#rustdoc-item-4425) — The gap between an icon and its label, in points.
- [`ICON_TEXT_RATIO`](constant.ICON_TEXT_RATIO.md#rustdoc-item-4423) — An icon's height relative to the button text it sits beside.
- [`REGULAR_FONT`](constant.REGULAR_FONT.md#rustdoc-item-4427) — The regular-weight font, as the package shipped it.
- [`REGULAR_KEY`](constant.REGULAR_KEY.md#rustdoc-item-4429) — The key the regular face is registered under.
