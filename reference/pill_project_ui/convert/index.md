<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1"></a>

# Module `pill_project_ui::convert`

Source: `ui\pill_project_ui\src\convert.rs:1`

The tessellated output to `pill_ui_frame`.
Turns egui's tessellated output into `pill_ui_frame` draw data: meshes,
clips and texture ids.

## Responsibilities

- [`convert`]: append egui's clipped primitives to a [`DrawList`] and
  return how many draws they became.
- [`external_id`](fn.external_id.md#rustdoc-item-5) and [`straight_color`](fn.straight_color.md#rustdoc-item-7): the two conversions the rest of
  the draw data needs - one for texture identity, one for colour space.

## Design

egui hands over triangle lists whose colours are premultiplied sRGB, in
points. `pill_ui_frame::Color` stores straight alpha instead, and the
renderer's UI painter blends with `SrcAlpha`, so this module divides the
alpha back out of every vertex colour. [`textures`](../textures/index.md#rustdoc-item-10) does
the same for each texel of the images it mirrors.

Vertex positions are copied unchanged. Each finished list records the scale
factor of the monitor it was built for, and the painter multiplies by it
when it draws, so no vertex is scaled here.

## Module contents

### Functions
- [`convert`](fn.convert.md#rustdoc-item-2) — Appends `primitives` to `list` and returns how many draws they added.
- [`external_id`](fn.external_id.md#rustdoc-item-5) — Converts egui's texture id into the number the painter registers the
- [`straight_color`](fn.straight_color.md#rustdoc-item-7) — Converts egui's premultiplied sRGB colour into a `pill_ui_frame::Color`

### Constants
- [`MANAGED_TEXTURE_ID_BIT`](constant.MANAGED_TEXTURE_ID_BIT.md#rustdoc-item-0) — The top bit of a `pill_ui_frame::TextureId`, which keeps egui's two
