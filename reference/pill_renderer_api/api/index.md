<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-235"></a>

# Module `pill_renderer_api::api`

Source: `rendering\pill_renderer_api\src\api.rs:1`

The renderer contract a frontend drives, plus a headless stub.
The renderer contract: the trait a frontend drives, what the renderer
reports for each frame, and a stub for builds without a GPU.

## Responsibilities

- Define [`PillRenderer`](trait.PillRenderer.md#rustdoc-item-178), the trait a frontend drives: resize, viewport,
  frame submission, surfaces, and asset invalidation.
- Report a frame's result ([`FrameOutcome`](enum.FrameOutcome.md#rustdoc-item-3)) and the renderer's limits and
  frame statistics ([`RenderCapabilities`](struct.RenderCapabilities.md#rustdoc-item-103), [`RenderMetrics`](struct.RenderMetrics.md#rustdoc-item-141)), so a
  frontend can display statistics without knowing which backend produced
  them.
- Name the future a renderer is built through ([`AttachFuture`](type.AttachFuture.md#rustdoc-item-174)), so a
  frontend can await it where it cannot block - in a browser.
- Provide [`HeadlessRenderer`](struct.HeadlessRenderer.md#rustdoc-item-204), the stub that keeps builds and tests
  without a GPU surface on the same call path as the wgpu backend.

## Design

The host drives the renderer through a `Box<dyn PillRenderer>`, so this
module names no graphics type: a windowed build implements the trait on its
wgpu renderer, a headless build swaps in [`HeadlessRenderer`](struct.HeadlessRenderer.md#rustdoc-item-204), and the
frame loop cannot tell the two apart.

## Module contents

### Structs
- [`HeadlessRenderer`](struct.HeadlessRenderer.md#rustdoc-item-204) — Stub renderer for frontends that run without a GPU surface.
- [`RenderCapabilities`](struct.RenderCapabilities.md#rustdoc-item-103) — What the renderer can do: the limits of its device and the scene data it
- [`RenderMetrics`](struct.RenderMetrics.md#rustdoc-item-141) — Frame statistics from the most recent [`PillRenderer::render`] call that

### Enums
- [`FrameOutcome`](enum.FrameOutcome.md#rustdoc-item-3) — What one [`PillRenderer::render`] call did with the frame it was given.

### Traits
- [`PillRenderer`](trait.PillRenderer.md#rustdoc-item-178) — The contract a renderer implements and a frontend drives once per frame.

### Type aliases
- [`AttachFuture`](type.AttachFuture.md#rustdoc-item-174) — A renderer that is still being built for a window: what a statically
