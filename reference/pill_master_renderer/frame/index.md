<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-238"></a>

# Module `pill_master_renderer::frame`

Source: `extensions\pill_master_renderer\pill_master_renderer\src\frame.rs:1`

The system that turns the world into the frame the renderer draws.
Fills the frame the renderer draws, once per update.

## Responsibilities

- Collect the frame from the world each update: the camera to draw through,
  every drawable the world offers, and the clock the shaders read
  ([`rendering_system`](fn.rendering_system.md#rustdoc-item-244)).
- Turn the game's pipeline into plain passes. Entries that are switched off
  or point at dead assets are left out, and a chain whose surface pass
  breaks the renderer's contract is reported in the log.

## Design

[`RenderFrame`], [`RenderInstance`] and [`ResolvedPass`] are plain data
from `pill_renderer_api`, re-exported here. Filling them is renderer
behaviour, so it lives in this module, where a renderer reload can replace
it. The system also makes choices the world data does not spell out: which
of several cameras to use, what each pipeline pass turns into, and the draw
order each instance carries.

## Module contents

### Functions
- [`consumed_component_names`](fn.consumed_component_names.md#rustdoc-item-268) — Returns the shared names of the components [`rendering_system`] reads.
- [`frame_asset_key`](fn.frame_asset_key.md#rustdoc-item-256) — Builds the key the frame uses for `handle`.
- [`note_ui_producer`](fn.note_ui_producer.md#rustdoc-item-269) — Records which producer filled the frame, logging its name when that changed.
- [`pick_camera`](fn.pick_camera.md#rustdoc-item-263) — Picks the camera the primary surface draws through, out of every enabled
- [`rendering_system`](fn.rendering_system.md#rustdoc-item-244) — Fills the frame from the current world, once per update.
- [`resolve_passes`](fn.resolve_passes.md#rustdoc-item-259) — Returns the pass chain this frame should run, read from the pipeline the

### Type aliases
- [`RenderingExtras`](type.RenderingExtras.md#rustdoc-item-246) — The resources [`rendering_system`] reads besides the frame, the assets and

### Constants
- [`PRODUCER_GAME`](constant.PRODUCER_GAME.md#rustdoc-item-242) — The game's own egui UI.
- [`PRODUCER_NONE`](constant.PRODUCER_NONE.md#rustdoc-item-243) — No producer: the frame carries no UI.
- [`PRODUCER_UNSET`](constant.PRODUCER_UNSET.md#rustdoc-item-241) — No frame has been filled since this image started.

### Statics
- [`UI_PRODUCER`](static.UI_PRODUCER.md#rustdoc-item-236) — Which producer filled `RenderFrame.ui` on the last frame, so the log states
- [`UI_TEXTURES_REQUESTED`](static.UI_TEXTURES_REQUESTED.md#rustdoc-item-239) — Whether this renderer image has already asked the UI producer to send its

## Re-exports

- `pub use pill_renderer_api::frame::CullMode;`
- `pub use pill_renderer_api::frame::PassKind;`
- `pub use pill_renderer_api::frame::PassTarget;`
- `pub use pill_renderer_api::frame::RenderFrame;`
- `pub use pill_renderer_api::frame::RenderInstance;`
- `pub use pill_renderer_api::frame::ResolvedPass;`
