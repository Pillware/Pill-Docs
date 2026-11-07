<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-397"></a>

# Module `pill_editor_shell_egui_editor::shell::views`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\views.rs:1`

The [`views`](#rustdoc-item-397) module: the scene and game viewports, their geometry and
their overlay chips.
Geometry of the scene and game viewports, their overlay chips, and the
entity badges drawn over the scene.

## Responsibilities

- The measured scene body rectangle the frontend places the scene's child
  window at, and the game view's own rectangle.
- The per-viewport overlay chip (the frame counter) and the region it marks.
- The entity badges: the mark each entity gets, the shadow under it, and
  the pick region it marks.

The globs below are absolute paths: a generated patch crate replays this
file's top-level `use` lines, so a `super::`-relative glob would not
resolve there.

## Module contents

### Functions
- [`badge_shadow_centres`](fn.badge_shadow_centres.md#rustdoc-item-394) — Returns the centres a badge's shadow is drawn at: the mark's centre moved
- [`frame_counter_rect`](fn.frame_counter_rect.md#rustdoc-item-393) — Returns the frame counter's rectangle: a box whose top-right corner sits
- [`scene_badges`](fn.scene_badges.md#rustdoc-item-396) — Draws one scene view's entity badges: for each point the executable
- [`scene_body_rect`](fn.scene_body_rect.md#rustdoc-item-391) — Returns a scene tab's body rectangle in logical points, grown by
- [`scene_overlay`](fn.scene_overlay.md#rustdoc-item-392) — Draws a scene tab's overlay chip: the frame counter in the viewport's
- [`shell_rect`](fn.shell_rect.md#rustdoc-item-389) — Converts an egui rectangle into the boundary's plain rectangle.

### Constants
- [`SCENE_BADGE_PADDING`](constant.SCENE_BADGE_PADDING.md#rustdoc-item-384) — The space, in logical points, that a badge's mark leaves inside its
- [`SCENE_BADGE_SHADOW_ALPHA`](constant.SCENE_BADGE_SHADOW_ALPHA.md#rustdoc-item-388) — The opacity of one shadow sample. The shadow draws the mark once per
- [`SCENE_BADGE_SHADOW_BLUR`](constant.SCENE_BADGE_SHADOW_BLUR.md#rustdoc-item-385) — How far a badge's shadow spreads, as a fraction of the mark's size.
- [`SCENE_BADGE_SHADOW_DISTANCE`](constant.SCENE_BADGE_SHADOW_DISTANCE.md#rustdoc-item-386) — How far down and right of the mark the whole shadow sits, as a fraction of
- [`SCENE_BADGE_SHADOW_SAMPLES`](constant.SCENE_BADGE_SHADOW_SAMPLES.md#rustdoc-item-387) — The unit offsets a badge's shadow is sampled at: the centre and a ring
- [`SCENE_COUNTER_HEIGHT`](constant.SCENE_COUNTER_HEIGHT.md#rustdoc-item-382) — The height of the scene's frame counter box, in logical points.
- [`SCENE_COUNTER_MARGIN`](constant.SCENE_COUNTER_MARGIN.md#rustdoc-item-383) — The gap, in logical points, between the frame counter box and the tab
- [`SCENE_COUNTER_WIDTH`](constant.SCENE_COUNTER_WIDTH.md#rustdoc-item-381) — The width of the scene's frame counter box, in logical points.
- [`SCENE_RECT_OVERSHOOT`](constant.SCENE_RECT_OVERSHOOT.md#rustdoc-item-379) — How far, in logical points, the scene rectangle extends past the measured
- [`SLOW_UPDATE_MICROS`](constant.SLOW_UPDATE_MICROS.md#rustdoc-item-380) — A shell update slower than this logs its own `[editor] egui frame` line,
