<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-174"></a>

# Function `pill_ui_kit::style::font_definitions`

```rust
pub fn font_definitions<impl FnOnce(&mut FontDefinitions): FnOnce(&mut egui::FontDefinitions)>(fonts: &ThemeFonts, append_builtin_fonts: impl FnOnce(&mut egui::FontDefinitions)) -> egui::FontDefinitions;
```

Source: `ui\pill_ui_kit\src\style.rs:213`

Builds the font definitions from `fonts` and the caller's built-in families.

Within a family the order is: the theme's font first, then the caller's
built-ins, then egui's defaults. The theme's fonts are added before
`append_builtin_fonts` runs, so a family the caller builds by copying the
proportional list (an icon font's fallback chain, for example) carries the
theme's body font as well.

The `display` family always exists, so a style can name it even when the
theme ships no display font. In that case it holds whatever the proportional
family holds.
