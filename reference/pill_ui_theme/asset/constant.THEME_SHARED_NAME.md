<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1"></a>

# Constant `pill_ui_theme::asset::THEME_SHARED_NAME`

```rust
pub const THEME_SHARED_NAME: &str = "pill_ui_theme::ThemeOverrides";
```

Source: `ui\pill_ui_theme\src\asset.rs:36`

The pinned shared name of [`ThemeOverrides`](../overrides/struct.ThemeOverrides.md#rustdoc-item-0), used by its `Asset`
implementation to keep one asset column across binaries.

The engine writes the name to the `asset_type` field of the `.theme` files
it creates, so the text must not change.
