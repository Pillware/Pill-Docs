<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10513"></a>

# Function `pill_editor_core::style::merge_layers`

```rust
pub fn merge_layers(code: &pill_ui_theme::Theme, user: Option<(&ThemeLayerInfo, &pill_ui_theme::ThemeOverrides)>, project: Option<(&ThemeLayerInfo, &pill_ui_theme::ThemeOverrides)>) -> ThemeMerge;
```

Source: `editor\pill_editor_core\src\style.rs:636`

Merges `user` and then `project` over `code` and refuses a bad layer on its
own.

A refused layer is skipped and named in [`ThemeMerge::refused`](struct.ThemeMerge.md#rustdoc-item-10479), so one
broken item never costs the other layer's values.
[`ThemeMerge::layers`](struct.ThemeMerge.md#rustdoc-item-10478) lists only the layers that were applied.
