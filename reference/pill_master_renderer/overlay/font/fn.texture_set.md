<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-940"></a>

# Function `pill_master_renderer::overlay::font::texture_set`

```rust
pub(crate) fn texture_set() -> pill_ui_frame::UiTextureSet;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\font.rs:190`

The atlas as the one-texture set the UI painter registers once, when the
renderer starts.

Every texel is white and its alpha is the glyph coverage. The texture is
sampled nearest, which keeps the glyphs sharp at [`GLYPH_SCALE`](constant.GLYPH_SCALE.md#rustdoc-item-864).
