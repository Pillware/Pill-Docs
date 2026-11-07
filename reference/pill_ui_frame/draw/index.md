<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-271"></a>

# Module `pill_ui_frame::draw`

Source: `rendering\pill_ui_frame\src\draw.rs:1`

The draw vocabulary a backend consumes.
What a UI wants drawn, as plain data.

## Responsibilities

- Defines the data a backend draws: [`DrawList`](struct.DrawList.md#rustdoc-item-233), with its vertices, its
  indices and the commands that use them (clip changes and draws), plus the
  values those commands carry ([`UiVertex`](struct.UiVertex.md#rustdoc-item-191), [`Color`](struct.Color.md#rustdoc-item-4), [`Rect`](struct.Rect.md#rustdoc-item-106),
  [`TextureId`](struct.TextureId.md#rustdoc-item-148)).
- Batches consecutive quads that share a texture and no clip change into
  one command, so a run of glyph quads is one draw.

## Design

The list only grows while a frame is built; the owner clears it before
building the next frame. Positions are logical pixels with the origin at the
UI's top-left corner and y growing down. The backend applies the monitor's
scale factor when it draws.

Clips nest. The backend intersects each [`DrawList::push_clip`](struct.DrawList.md#rustdoc-item-276) rectangle
with the clip already in force, and every draw between a push and its
matching [`DrawList::pop_clip`](struct.DrawList.md#rustdoc-item-275) is clipped to the result.

Every draw samples a texture that the producer put in the frame's texture
set. A solid fill samples a white texel in one of those textures, because
the format has no separate fill command.

## Module contents

### Structs
- [`Color`](struct.Color.md#rustdoc-item-4) — A colour in sRGB. Each channel is an `f32` in `0.0..=1.0`.
- [`DrawList`](struct.DrawList.md#rustdoc-item-233) — Everything one frame of UI asks a backend to draw.
- [`Rect`](struct.Rect.md#rustdoc-item-106) — An axis-aligned rectangle in logical pixels.
- [`TextureId`](struct.TextureId.md#rustdoc-item-148) — Identifies the texture a draw samples.
- [`UiVertex`](struct.UiVertex.md#rustdoc-item-191) — One vertex of a UI triangle.

### Enums
- [`DrawCommand`](enum.DrawCommand.md#rustdoc-item-234) — One entry in a [`DrawList`]'s command stream: open a clip, close a clip, or
