<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-369"></a>

# Module `pill_spline::gizmo`

Source: `extensions\pill_spline\modules\runtime\src\gizmo.rs:1`

The curve, its control points and its tangents, drawn as editor chrome.
The spline's own drawing, called by the engine's gizmo pass.

## Responsibilities

- Draw one [`Spline`](../component/struct.Spline.md#rustdoc-item-8) per entity that carries it: the curve, its control
  points and, when the spline stores them, each point's two tangent arms.

All of it is chrome: no game surface draws it and none of it is pickable.
Interaction belongs to the editor's spline tool, not to this module.

## Module contents

### Functions
- [`draw_spline_gizmo`](fn.draw_spline_gizmo.md#rustdoc-item-374) — Draws one spline: the curve, its control points and, when the spline stores

### Constants
- [`CURVE_COLOR`](constant.CURVE_COLOR.md#rustdoc-item-368) — The colour the curve is drawn in.
- [`POINT_COLOR`](constant.POINT_COLOR.md#rustdoc-item-370) — The colour the control points are drawn in.
- [`POINT_SIZE_PIXELS`](constant.POINT_SIZE_PIXELS.md#rustdoc-item-372) — How wide a control point is drawn, in pixels.
- [`SEGMENTS_PER_CURVE_SEGMENT`](constant.SEGMENTS_PER_CURVE_SEGMENT.md#rustdoc-item-373) — How many straight lines one curve segment is drawn with.
- [`TANGENT_COLOR`](constant.TANGENT_COLOR.md#rustdoc-item-371) — The colour the stored tangents are drawn in.
