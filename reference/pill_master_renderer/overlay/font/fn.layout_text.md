<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-940"></a>

# Function `pill_master_renderer::overlay::font::layout_text`

```rust
pub(in overlay) fn layout_text(text: &str, x: f32, y: f32) -> Vec<GlyphQuad>;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\font.rs:236`

The quads `text` becomes, starting at pixel (`x`, `y`) as the top-left
corner.

A newline starts the next line under the first character of the line
above.
