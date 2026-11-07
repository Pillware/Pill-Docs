<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3085"></a>

# Module `pill_master_renderer::ui`

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\ui\mod.rs:1`

The UI painter: draws the frame's `pill_ui_frame` lists over each surface.
The UI painter: draws [`pill_ui_frame`] draw lists with wgpu.

## Responsibilities

- [`UiRenderer`]: draws a [`pill_ui_frame::DrawList`] with one pipeline,
  whole-image texture uploads and scissor clipping.

## Design

The painter turns plain data into GPU work. It keeps no global state,
opens no window and handles no events. It does not know who built the
lists. A game's egui hands over `pill_ui_frame` values the same way any
other producer would. It draws on the renderer's own device and into the
renderer's target, so no wgpu object crosses a DLL boundary. It is the
`overlay` module's sibling and draws after that module's pass.

## Module contents

### Modules
- [`renderer`](renderer/index.md#rustdoc-item-2958) — The draw-list renderer: one pipeline, whole-image texture uploads and scissor clipping.
