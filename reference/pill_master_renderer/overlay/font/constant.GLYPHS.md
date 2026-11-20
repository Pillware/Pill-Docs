<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-861"></a>

# Constant `pill_master_renderer::overlay::font::GLYPHS`

```rust
pub(in overlay) const GLYPHS: &[(char, &str)] = _;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\font.rs:48`

Every glyph the font has, as its character and its pixel art.

The art is seven rows separated by `/`, each row five characters wide,
with `#` for a lit pixel and `.` for a blank one.
