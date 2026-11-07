<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2958"></a>

# Module `pill_master_renderer::ui::renderer`

Visibility: `{'restricted': {'parent': 3085, 'path': '::ui'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\ui\renderer.rs:1`

The draw-list renderer: one pipeline, whole-image texture uploads and scissor clipping.
Draws [`DrawList`]s with wgpu: one render pipeline, whole-image texture
uploads and scissor clipping.

## Responsibilities

- [`UiRenderer`](struct.UiRenderer.md#rustdoc-item-2006): owns the render pipeline and the textures the frames
  carried. It uploads texture changes and draws a surface's [`DrawList`]s.
- Applies each list's scale factor, its nested clip rectangles (as scissor
  rectangles) and correct sRGB blending.

## Design

The UI renderer uses the renderer module's device, queue and target. It
keeps no camera, no window and no per-frame state, apart from two scratch
vectors that hold the surface being drawn. One call per surface
([`UiRenderer::render`](struct.UiRenderer.md#rustdoc-item-3020)) converts every list for that surface into one pair
of reused buffers, because a buffer can be written only once per submission
(see [`StreamBuffer`]).

Textures arrive as a versioned set ([`UiRenderer::apply_texture_set`](struct.UiRenderer.md#rustdoc-item-3019)). The
renderer remembers the revision it applied for each texture and uploads the
whole image whenever that revision differs. A new instance holds no
textures, so the next set it receives uploads all of them instead of drawing
with empty textures. A draw that names a texture it does not hold draws
nothing.

Colours: `pill_ui_frame` hands over straight-alpha sRGB. The shader decodes
the vertex colour to linear light, and the textures are `Rgba8UnormSrgb`, so
the texels it samples are linear too. When the target format is sRGB, the
hardware encodes linear light back to sRGB exactly once. Blending is
`src * src_alpha + dst * (1 - src_alpha)`.

## Module contents

### Structs
- [`GpuVertex`](struct.GpuVertex.md#rustdoc-item-2962) — One vertex as the GPU sees it: a position in physical pixels, a texture
- [`HeldTexture`](struct.HeldTexture.md#rustdoc-item-3014) — One texture this renderer holds on the GPU: the image, the bind group that
- [`UiRenderer`](struct.UiRenderer.md#rustdoc-item-2006) — The GPU resources that draw `pill_ui_frame` draw lists.

### Functions
- [`create_srgb_texture`](fn.create_srgb_texture.md#rustdoc-item-3082) — Creates an `Rgba8UnormSrgb` texture of `texture_size` texels that the shader
- [`physical_scissor`](fn.physical_scissor.md#rustdoc-item-3083) — Converts a `clip` in logical pixels into the scissor rectangle a render pass
- [`upload_whole_texture`](fn.upload_whole_texture.md#rustdoc-item-3081) — Uploads `pixels` as the whole image of the 2D `texture`, which is

### Constants
- [`UI_SHADER`](constant.UI_SHADER.md#rustdoc-item-2957) — The whole pipeline in one WGSL source. The vertex stage turns physical
- [`VERTEX_ATTRIBUTES`](constant.VERTEX_ATTRIBUTES.md#rustdoc-item-3004) — The vertex attributes that match the fields of [`GpuVertex`].
