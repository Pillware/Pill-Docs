<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10"></a>

# Module `pill_project_ui::textures`

Source: `ui\pill_project_ui\src\textures.rs:1`

The texture mirror a rebuilt painter can upload from.
The texture mirror: egui's delta stream, kept as whole images a rebuilt
painter can upload from.

## Responsibilities

- [`TextureMirror`](struct.TextureMirror.md#rustdoc-item-220): one image per egui texture, kept up to date by the
  deltas each pass reports, with a revision on every image.
- [`TextureMirror::apply`](struct.TextureMirror.md#rustdoc-item-225): fold a pass's [`TexturesDelta`] into the
  mirror and remember which images changed and which were freed.
- [`TextureMirror::carry`](struct.TextureMirror.md#rustdoc-item-215): turn what changed into the frame's
  [`UiTextureSet`], as whole images.

## Design

egui sends a whole image when a texture is new or changes size, and a
small patch when only part of it changes (the font atlas gets a patch for
every new glyph). A painter that is rebuilt mid-run starts with no
textures, and a patch cannot give it the parts that did not change. So the
producer keeps a full copy of every texture and sends that copy again
whenever the texture changes. The mirror is that copy: one `Vec<u8>` per
texture, patched by the deltas and read out as the frame's uploads.

The bytes are straight-alpha sRGB RGBA8: every channel is stored on its
own, and alpha is not multiplied into the colour. That is what
`pill_ui_frame::Color` and the painter's shader expect. egui's `Color32`
pixels are premultiplied (the colour is already multiplied by the alpha),
so they are converted on the way in.

## Module contents

### Structs
- [`MirroredTexture`](struct.MirroredTexture.md#rustdoc-item-180) — The whole image of one texture, as a painter that starts with no textures
- [`TextureMirror`](struct.TextureMirror.md#rustdoc-item-220) — Every texture egui handed this UI, kept whole.

### Functions
- [`to_ui_texture_filter`](fn.to_ui_texture_filter.md#rustdoc-item-257) — Returns the filter mode `texture_options` asks for.
- [`to_unpremultiplied_rgba8`](fn.to_unpremultiplied_rgba8.md#rustdoc-item-256) — Converts egui's premultiplied sRGB pixels to straight-alpha RGBA8.
