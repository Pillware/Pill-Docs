<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1342"></a>

# pill_ui_theme API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The UI theme pipeline's plain data.

## Responsibilities

- [`theme`](theme/index.md#rustdoc-item-1149): the complete base [`Theme`](theme/struct.Theme.md#rustdoc-item-1232) and its two built-in themes,
  [`Theme::fallback`](theme/struct.Theme.md#rustdoc-item-1233) (neutral dark) and [`Theme::brutalist`](theme/struct.Theme.md#rustdoc-item-1234), plus the
  merge that applies an override document to one.
- [`overrides`](overrides/index.md#rustdoc-item-706): [`ThemeOverrides`](overrides/struct.ThemeOverrides.md#rustdoc-item-0), the document a `.theme` file holds,
  which lists only the items it changes, and the reader that parses it.
- [`asset`](asset/index.md#rustdoc-item-4): the `.theme` asset type, which carries its own header and
  guid, so it needs no `.meta` file.
- [`font`](font/index.md#rustdoc-item-161): the `.ttf`/`.otf` font a theme names, loaded as an asset.
- [`register`](mod@register): declares both asset types on a world, applies
  the game/editor path rule, and loads a theme or font, returning its
  handle.

## Design

This crate is a shared `dylib`: a project, `pill_project_ui`, the editor
shell and `pill_editor_core` share the `Theme`, `ThemeOverrides` and
`FontAsset` types and one asset column in the world's asset manager.

The crate is egui-free. The translator that builds egui's `Style` from a
`Theme` lives in `pill_ui_kit`, compiled into each UI's link unit, so no
egui value ever crosses this DLL boundary: every UI has its own copy of
egui, and the copies are not interchangeable.

A theme is always complete: a `.theme` file carries **only overrides**, and
the merge starts from a complete base theme, never from egui's defaults, so
an item the file leaves out keeps the base value.

## Module contents

### Modules
- [`asset`](asset/index.md#rustdoc-item-4) — The `.theme` asset type, which carries its own header and guid, so it needs
- [`font`](font/index.md#rustdoc-item-161) — The `.ttf`/`.otf` font a theme names, loaded as an asset.
- [`overrides`](overrides/index.md#rustdoc-item-706) — The document a `.theme` file holds, which lists only the items it changes,
- [`register`](register/index.md#rustdoc-item-778) — Puts the theme asset types on a world, then loads a theme or font within the
- [`theme`](theme/index.md#rustdoc-item-1149) — The complete theme values, and the merge that applies an override document

## Re-exports

- [`pub use asset::THEME_SHARED_NAME;`](asset/constant.THEME_SHARED_NAME.md#rustdoc-item-1)
- [`pub use font::FontAsset;`](font/struct.FontAsset.md#rustdoc-item-5)
- [`pub use font::FontImportSettings;`](font/struct.FontImportSettings.md#rustdoc-item-108)
- [`pub use font::FONT_SHARED_NAME;`](font/constant.FONT_SHARED_NAME.md#rustdoc-item-6)
- [`pub use overrides::ThemeOverrides;`](overrides/struct.ThemeOverrides.md#rustdoc-item-0)
- [`pub use register::load_font;`](register/fn.load_font.md#rustdoc-item-777)
- [`pub use register::load_overrides;`](register/fn.load_overrides.md#rustdoc-item-776)
- [`pub use register::register;`](register/fn.register.md#rustdoc-item-774)
- [`pub use register::LoadedFont;`](register/struct.LoadedFont.md#rustdoc-item-750)
- [`pub use register::ThemePathScope;`](register/enum.ThemePathScope.md#rustdoc-item-709)
- [`pub use theme::FontFamilyName;`](theme/enum.FontFamilyName.md#rustdoc-item-915)
- [`pub use theme::Palette;`](theme/struct.Palette.md#rustdoc-item-1186)
- [`pub use theme::Rgba;`](theme/struct.Rgba.md#rustdoc-item-780)
- [`pub use theme::Shadow;`](theme/struct.Shadow.md#rustdoc-item-875)
- [`pub use theme::Shape;`](theme/struct.Shape.md#rustdoc-item-1066)
- [`pub use theme::Spacing;`](theme/struct.Spacing.md#rustdoc-item-1030)
- [`pub use theme::Stroke;`](theme/struct.Stroke.md#rustdoc-item-835)
- [`pub use theme::TextStyle;`](theme/struct.TextStyle.md#rustdoc-item-955)
- [`pub use theme::Theme;`](theme/struct.Theme.md#rustdoc-item-1232)
- [`pub use theme::ThemeError;`](theme/enum.ThemeError.md#rustdoc-item-180)
- [`pub use theme::ThemeFontPaths;`](theme/struct.ThemeFontPaths.md#rustdoc-item-994)
- [`pub use theme::WidgetStates;`](theme/struct.WidgetStates.md#rustdoc-item-1147)
- [`pub use theme::WidgetStyle;`](theme/struct.WidgetStyle.md#rustdoc-item-1108)
