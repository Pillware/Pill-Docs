<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-259"></a>

# pill_ui_kit API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The UI kit: converts a theme's tokens into egui's style and fonts, and
holds the widget looks that are built on those same tokens.

## Responsibilities

- [`style`](style/index.md#rustdoc-item-118): [`build_style`](style/fn.build_style.md#rustdoc-item-171) fills in an [`egui::Style`] from a theme, and
  [`font_definitions`](style/fn.font_definitions.md#rustdoc-item-174) builds the font definitions from the theme's fonts
  and the caller's own. [`install`](style/fn.install.md#rustdoc-item-119) puts both on an egui context, the fonts
  first, and then pins the dark theme. [`FontSignature`](style/struct.FontSignature.md#rustdoc-item-120) is the record the
  caller keeps, so the fonts are set again only when they changed.
- [`variants`](variants/index.md#rustdoc-item-204): `primary`, `secondary` and `danger`, three looks for stock
  egui widgets that the caller applies inside a `ui.scope`.
- [`widgets`](widgets/index.md#rustdoc-item-208): [`ChunkyButton`](widgets/struct.ChunkyButton.md#rustdoc-item-215), a button whose face sits on a hard shadow
  with no blur.

## Design

The kit is an `rlib` compiled into both UI dylibs (`pill_editor_core` and
`pill_project_ui`). It therefore runs in the same DLL as the egui `Context`
it writes to, and no egui value crosses a DLL boundary. Only those two
crates may depend on it, and each re-exports it as `kit`. Its dependencies
are exactly `egui` and `pill_ui_theme`. A widget that needs more belongs in
a separate crate, not in this one.

## Module contents

### Modules
- [`style`](style/index.md#rustdoc-item-118) — The theme's style and fonts, and how to install them on a context.
- [`variants`](variants/index.md#rustdoc-item-204) — Three looks for stock egui widgets: `primary`, `secondary` and `danger`.
- [`widgets`](widgets/index.md#rustdoc-item-208) — The chunky button: a flat face on a hard shadow with no blur.

## Re-exports

- [`pub use style::build_style;`](style/fn.build_style.md#rustdoc-item-171)
- [`pub use style::font_definitions;`](style/fn.font_definitions.md#rustdoc-item-174)
- [`pub use style::install;`](style/fn.install.md#rustdoc-item-119)
- [`pub use style::FontSignature;`](style/struct.FontSignature.md#rustdoc-item-120)
- [`pub use style::ThemeFonts;`](style/struct.ThemeFonts.md#rustdoc-item-10)
- [`pub use style::DISPLAY_FAMILY;`](style/constant.DISPLAY_FAMILY.md#rustdoc-item-0)
- [`pub use widgets::ChunkyButton;`](widgets/struct.ChunkyButton.md#rustdoc-item-215)
- [`pub use widgets::SHADOW_OFFSET;`](widgets/constant.SHADOW_OFFSET.md#rustdoc-item-206)
