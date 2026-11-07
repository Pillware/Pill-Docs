<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-118"></a>

# Module `pill_ui_kit::style`

Source: `ui\pill_ui_kit\src\style.rs:1`

The theme's style and fonts, and how to install them on a context.
The token-to-egui translator and the font installer.

## Responsibilities

- [`build_style`](fn.build_style.md#rustdoc-item-171): builds a complete [`egui::Style`] from a
  [`Theme`](pill_ui_theme::Theme).
- [`font_definitions`](fn.font_definitions.md#rustdoc-item-174): builds the font definitions - egui's defaults, the
  theme's fonts in front of the caller's built-in families, and every
  family the translated styles name.
- [`install`](fn.install.md#rustdoc-item-119): puts the fonts on a context first, and only when their
  signature changed (the return says whether it did). Then it writes the
  style to both egui themes and pins the dark theme.
- [`FontSignature`](struct.FontSignature.md#rustdoc-item-120): the record the caller keeps, so that `set_fonts` runs
  only when the fonts changed.

## Design

Every entry point is a plain function that the caller's dylib compiles in,
so nothing this kit hands egui stores code from a reloadable image. The
context only ever receives plain data and owned font bytes, and the kit
holds no statics - the font signature, the font bytes and the theme all
belong to the caller. Fonts are installed before the style, because a style
that names a family nobody registered makes egui panic on the next pass.

## Module contents

### Structs
- [`FontSignature`](struct.FontSignature.md#rustdoc-item-120) — The font set last installed, recorded by the caller.
- [`ThemeFonts`](struct.ThemeFonts.md#rustdoc-item-10) — The font bytes the theme's layers supplied.

### Functions
- [`build_style`](fn.build_style.md#rustdoc-item-171) — Builds egui's style from `theme`, starting from `base_style`.
- [`color`](fn.color.md#rustdoc-item-183) — Converts a theme colour to an egui colour. Both use straight alpha.
- [`font_definitions`](fn.font_definitions.md#rustdoc-item-174) — Builds the font definitions from `fonts` and the caller's built-in families.
- [`install`](fn.install.md#rustdoc-item-119) — Installs `theme` on `context`: the fonts first, then the style on both egui
- [`is_theme_font`](fn.is_theme_font.md#rustdoc-item-4) — Whether `font_key` names one of the theme's own fonts.
- [`margin`](fn.margin.md#rustdoc-item-197) — Converts one theme number to an egui margin.
- [`shadow`](fn.shadow.md#rustdoc-item-192) — Converts a theme shadow to an egui shadow. Both use whole-point fields.
- [`stroke`](fn.stroke.md#rustdoc-item-186) — Converts a theme stroke to an egui stroke.
- [`text_style_family`](fn.text_style_family.md#rustdoc-item-180) — Returns the egui font family for a theme font family.
- [`text_style_key`](fn.text_style_key.md#rustdoc-item-178) — Returns the egui text-style key for a theme text style's name.
- [`vec2`](fn.vec2.md#rustdoc-item-195) — Converts a theme's `[x, y]` pair to an egui vector.
- [`widget_visuals`](fn.widget_visuals.md#rustdoc-item-189) — Converts a theme widget style to the egui look of one widget state.

### Constants
- [`DISPLAY_FAMILY`](constant.DISPLAY_FAMILY.md#rustdoc-item-0) — The family name a theme's `display` font is registered under.
- [`THEME_BODY_KEY`](constant.THEME_BODY_KEY.md#rustdoc-item-1) — The font-definition key a theme's body font is registered under.
- [`THEME_DISPLAY_KEY`](constant.THEME_DISPLAY_KEY.md#rustdoc-item-2) — The font-definition key a theme's display font is registered under.
- [`THEME_MONOSPACE_KEY`](constant.THEME_MONOSPACE_KEY.md#rustdoc-item-3) — The font-definition key a theme's monospace font is registered under.
