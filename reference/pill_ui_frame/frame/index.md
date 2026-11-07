<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-385"></a>

# Module `pill_ui_frame::frame`

Source: `rendering\pill_ui_frame\src\frame.rs:1`

A frame of UI output.
A frame of UI output, made of draw lists per surface and the textures
they sample.

## Responsibilities

- [`UiFrame`](struct.UiFrame.md#rustdoc-item-350): everything a UI producer (a game's overlay, a tool's
  panels) built this update, as owned plain data.
- [`UiDraw`](struct.UiDraw.md#rustdoc-item-314): one surface's draw list and the monitor scale its logical
  pixels are in.

## Design

The value crosses an artifact boundary: a project's system builds it
inside one DLL, and a renderer in another DLL draws it. Everything it
carries is therefore owned data. The draw list holds plain vertex data,
and the textures are a versioned set of copies (see [`crate::texture`](../texture/index.md#rustdoc-item-347)),
never a pointer into the producer's atlas. The renderer keeps its own GPU
textures, and it uploads an image only when the set carries a revision it
has not applied yet.

## Module contents

### Structs
- [`UiDraw`](struct.UiDraw.md#rustdoc-item-314) — One surface's UI for a frame.
- [`UiFrame`](struct.UiFrame.md#rustdoc-item-350) — The UI output for one frame. It holds the lists to draw on the surfaces
