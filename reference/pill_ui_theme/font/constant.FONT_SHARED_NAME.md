<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6"></a>

# Constant `pill_ui_theme::font::FONT_SHARED_NAME`

```rust
pub const FONT_SHARED_NAME: &str = "pill_ui_theme::FontAsset";
```

Source: `ui\pill_ui_theme\src\font.rs:40`

The name [`FontAsset`](struct.FontAsset.md#rustdoc-item-5) is registered under, the same in every binary.

It is a literal for two reasons: the store keys one asset column across
binaries by it, and each font's `.meta` file records it, so it must not
move when the type or its module is renamed.
