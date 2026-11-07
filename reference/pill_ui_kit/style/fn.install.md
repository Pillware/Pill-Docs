<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-119"></a>

# Function `pill_ui_kit::style::install`

```rust
pub fn install<impl FnOnce(&mut FontDefinitions): FnOnce(&mut egui::FontDefinitions)>(context: &egui::Context, theme: &pill_ui_theme::Theme, fonts: &ThemeFonts, append_builtin_fonts: impl FnOnce(&mut egui::FontDefinitions), signature: &mut FontSignature) -> bool;
```

Source: `ui\pill_ui_kit\src\style.rs:275`

Installs `theme` on `context`: the fonts first, then the style on both egui
themes, then the dark theme pinned.

`append_builtin_fonts` adds the caller's own families - the editor passes
its Inter, JetBrains Mono and Phosphor - and it runs only when the fonts are
installed. `signature` belongs to the context, so pass a new one for each
new context.

Returns whether `set_fonts` ran, so the caller can log the install once.
