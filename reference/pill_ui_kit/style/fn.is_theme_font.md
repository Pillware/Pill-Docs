<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4"></a>

# Function `pill_ui_kit::style::is_theme_font`

```rust
pub fn is_theme_font(font_key: &str) -> bool;
```

Source: `ui\pill_ui_kit\src\style.rs:59`

Whether `font_key` names one of the theme's own fonts.

A caller that adds its built-in families uses this to keep the theme's font
in front. The theme font is what a theme layer asked for; the caller's font
is only the fallback behind it.
