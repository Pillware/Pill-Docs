<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8451"></a>

# Function `pill_editor_core::style::merge_layers`

```rust
pub fn merge_layers(code: &pill_ui_theme::Theme, user: Option<(&ThemeLayerInfo, &pill_ui_theme::ThemeOverrides)>, project: Option<(&ThemeLayerInfo, &pill_ui_theme::ThemeOverrides)>) -> ThemeMerge;
```

Source: `editor\pill_editor_core\src\style.rs:632`

Merges `user` and then `project` over `code` and refuses a bad layer on its
own.

A refused layer is skipped and named in [`ThemeMerge::refused`](struct.ThemeMerge.md#rustdoc-item-8417), so one
broken item never costs the other layer's values.
[`ThemeMerge::layers`](struct.ThemeMerge.md#rustdoc-item-8416) lists only the layers that were applied.
