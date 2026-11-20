<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-939"></a>

# Function `pill_master_renderer::overlay::font::glyph_index`

```rust
pub(in overlay::font) fn glyph_index(character: char) -> usize;
```

Visibility: `{'restricted': {'parent': 857, 'path': '::overlay::font'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\font.rs:223`

The glyph to draw for `character`.

A lowercase letter uses its uppercase form, and a character the font does
not have uses `?`. If the table held no `?` either, the first glyph (the
space) is used, so the returned index is always valid.
