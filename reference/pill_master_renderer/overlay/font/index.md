<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-861"></a>

# Module `pill_master_renderer::overlay::font`

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\font.rs:1`

The bitmap font the debug labels are drawn in, and its painter texture.
The bitmap font the debug labels are drawn in: one 5 by 7 pixel glyph per
character, drawn into a single atlas, and the quads a line of text becomes.

## Responsibilities

- Hold the glyphs as readable pixel art ([`GLYPHS`]) and draw them into one
  single-channel atlas ([`build_atlas`]).
- Hand that atlas to the UI painter as a texture under its own reserved
  id ([`texture_set`], [`FONT_TEXTURE`]).
- Turn a label into glyph quads at a pixel position ([`layout_text`]).

## Design

Debug labels need to be readable, not pretty, and they must not depend on a
font file being found at runtime. The glyphs therefore live in the source,
and the atlas is built from them when the renderer starts.

A lowercase letter draws as its uppercase form, and a character the font
does not have draws as `?`.

## Module contents

### Structs
- [`Atlas`](struct.Atlas.md#rustdoc-item-871) — The atlas: its size and one coverage byte per texel, row by row.
- [`GlyphQuad`](struct.GlyphQuad.md#rustdoc-item-901) — One glyph quad: where it goes on screen and which atlas cell it shows.

### Functions
- [`atlas_size`](fn.atlas_size.md#rustdoc-item-938) — The atlas's width and height in texels.
- [`build_atlas`](fn.build_atlas.md#rustdoc-item-939) — Draw every glyph of [`GLYPHS`] into its cell, in table order.
- [`cell_origin`](fn.cell_origin.md#rustdoc-item-942) — The top-left texel of the cell that holds the glyph at `index`.
- [`glyph_index`](fn.glyph_index.md#rustdoc-item-943) — The glyph to draw for `character`.
- [`layout_text`](fn.layout_text.md#rustdoc-item-944) — The quads `text` becomes, starting at pixel (`x`, `y`) as the top-left
- [`texture_set`](fn.texture_set.md#rustdoc-item-940) — The atlas as the one-texture set the UI painter registers once, when the

### Constants
- [`ATLAS_COLUMNS`](constant.ATLAS_COLUMNS.md#rustdoc-item-863) — How many cells one atlas row holds.
- [`CELL_HEIGHT`](constant.CELL_HEIGHT.md#rustdoc-item-862)
- [`CELL_WIDTH`](constant.CELL_WIDTH.md#rustdoc-item-860) — An atlas cell: the glyph plus one pixel of space to its right and below,
- [`FONT_TEXTURE`](constant.FONT_TEXTURE.md#rustdoc-item-866) — The texture the label list samples the font from.
- [`GLYPH_HEIGHT`](constant.GLYPH_HEIGHT.md#rustdoc-item-859) — Glyph height in pixels.
- [`GLYPH_SCALE`](constant.GLYPH_SCALE.md#rustdoc-item-864) — How many screen pixels one glyph pixel covers.
- [`GLYPH_WIDTH`](constant.GLYPH_WIDTH.md#rustdoc-item-857) — Glyph width in pixels.
- [`GLYPHS`](constant.GLYPHS.md#rustdoc-item-865) — Every glyph the font has, as its character and its pixel art.
