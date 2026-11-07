<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-457"></a>

# Module `pill_editor_core::brand`

Source: `editor\pill_editor_core\src\brand.rs:1`

The editor's brand mark: the pill logotype stored as a precomputed coverage
mask.
The editor's brand mark: the pill logotype, computed from its SVG source
and stored here as data.

## Responsibilities

- Carries the mark's coverage mask as data and turns it into the
  [`egui::ColorImage`] the shell uploads once per session.
- Holds no drawing code: the shell decides where the mark sits and what
  colour it takes.

The source is `modules/editor/pill_editor_core/assets/pill_mark.svg`
(500x500, one white path made of three subpaths). egui has no SVG
renderer in this crate graph, so the path was rendered ahead of time into
a square bitmap: filled with the even-odd rule, 8x8 samples per texel,
with the path's bounding box centred in the square and a 6% margin
around it. The result is the coverage stored in [`MARK_ALPHA`]. Render it
again with the same settings when the SVG changes; this module's tests
pin the constant's shape.

## Module contents

### Functions
- [`mark_color_image`](fn.mark_color_image.md#rustdoc-item-455) — Returns the mark as a white image whose alpha channel is the stored

### Constants
- [`MARK_ALPHA`](constant.MARK_ALPHA.md#rustdoc-item-454) — The mark's coverage per texel, stored row by row. The array holds
- [`MARK_SIDE`](constant.MARK_SIDE.md#rustdoc-item-453) — The mark's width and height in texels. The image is square, and every
