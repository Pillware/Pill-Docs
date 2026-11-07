<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-858"></a>

# Module `pill_master_renderer::overlay`

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:1`

Debug drawing, gizmos, selection outlines, picking and the scene grid,
drawn over each surface.
Everything the renderer draws over what the chain rendered: the debug lines
on every surface, the editor's chrome (selection outlines, gizmo handles and
the scene grid) on the surfaces the frame marks as editor views, the pick
buffer for the surfaces that ask for a pick, and the debug labels, which it
lays out for the UI painter to draw.

## Responsibilities

- Build the overlay's pipelines once, beside the chain's ([`Overlay::new`]).
- Record a surface's overlay after its chain: the outline mask and edge,
  the scene grid, the depth-tested and on-top debug lines and the gizmos
  ([`Overlay::record`]).
- Lay the debug labels out as a `pill_ui_frame` list over the bitmap font
  ([`label_list`], [`font::texture_set`]); the UI painter draws it, since
  a label is a screen-space textured quad like any UI.
- Draw the pick buffer for a surface that has picks waiting, and read the
  asked-for pixels back frames later ([`Overlay::take_results`]).

## Design

None of this goes through the chain: a project's chain decides how its
scene looks, and an outline or a debug line has to look the same whatever
the chain is. The overlay draws after the chain into the same surface view,
reading the depth buffer the chain's geometry passes left, so geometry in
front of a depth-tested line hides it. The mask and pick passes
draw the frame's instances straight from the instance buffer the chain
already uploaded, so a queue position is an instance index in both.

Lines, gizmo triangles and the outline are anti-aliased without
multisampling: each primitive is projected on the processor, widened in
screen space by a pixel of feather, and its fragment shader fades that
band back down to the edge the shape really has. Multisampling would cost
every surface of every frontend; this costs only the overlay's own
primitives.

## Module contents

### Modules
- [`font`](font/index.md#rustdoc-item-861) — The bitmap font the debug labels are drawn in, and its painter texture.
- [`picking`](picking/index.md#rustdoc-item-946) — Reading the pick buffer back without stalling a frame.

### Structs
- [`GridParameters`](struct.GridParameters.md#rustdoc-item-1240) — The grid uniform: the cell size in `cell_size[0]`, and the drawing region in
- [`HandleLineVertex`](struct.HandleLineVertex.md#rustdoc-item-1117) — A gizmo line vertex in the pick buffer: the corner of the line's quad and
- [`HandleVertex`](struct.HandleVertex.md#rustdoc-item-1158) — A gizmo triangle vertex in the pick buffer: world position and handle
- [`LineVertex`](struct.LineVertex.md#rustdoc-item-1034) — A line vertex after projection: the corner of the line's quad, its colour,
- [`OutlineParameters`](struct.OutlineParameters.md#rustdoc-item-1199) — The outline uniform: colour, and the width in `outline_settings[0]`.
- [`Overlay`](struct.Overlay.md#rustdoc-item-1369) — The overlay's pipelines and the buffers they read.
- [`OverlayFrame`](struct.OverlayFrame.md#rustdoc-item-1322) — One surface's frame, as the overlay needs it.
- [`OverlayTargets`](struct.OverlayTargets.md#rustdoc-item-1286) — The targets one surface's overlay draws into.
- [`PipelineDescription`](struct.PipelineDescription.md#rustdoc-item-1422) — The settings one overlay pipeline differs in.
- [`TriangleVertex`](struct.TriangleVertex.md#rustdoc-item-1076) — A gizmo-triangle vertex after projection: the corner pushed out by the

### Functions
- [`clip_polygon_to_near`](fn.clip_polygon_to_near.md#rustdoc-item-1462) — A polygon clipped to the camera's near side, every vertex keeping the
- [`clip_segment_to_near`](fn.clip_segment_to_near.md#rustdoc-item-1461) — A segment clipped to the camera's near side: `None` when both ends are
- [`create_target_texture`](fn.create_target_texture.md#rustdoc-item-1451) — A single-sample 2D texture sized `width` by `height`.
- [`depth_state`](fn.depth_state.md#rustdoc-item-1449) — A depth state that reads `format` with `compare`, writing when `write`.
- [`draw_queue_positions`](fn.draw_queue_positions.md#rustdoc-item-1455) — Draw each queue position's mesh as the instance at that position; runs of
- [`expand_polygon`](fn.expand_polygon.md#rustdoc-item-1470) — Moves every vertex of a projected polygon `offset` pixels away from its two
- [`from_pixels`](fn.from_pixels.md#rustdoc-item-1467) — The clip-space position a pixel position maps back to at `depth`.
- [`handle_line_vertices`](fn.handle_line_vertices.md#rustdoc-item-1471) — The gizmo lines as the pick buffer draws them. Each is the same quad as the
- [`handle_triangle_vertices`](fn.handle_triangle_vertices.md#rustdoc-item-1472) — The frame's gizmo triangles as the pick buffer draws them, three
- [`label_list`](fn.label_list.md#rustdoc-item-1473) — The frame's labels as a `pill_ui_frame` list in surface pixels: glyph quads
- [`label_origin`](fn.label_origin.md#rustdoc-item-1475) — Where a label's text starts, in surface pixels: a screen anchor as given,
- [`lerp3`](fn.lerp3.md#rustdoc-item-1465) — Three components along the way from `start` to `end`.
- [`lerp4`](fn.lerp4.md#rustdoc-item-1464) — Four components along the way from `start` to `end`.
- [`line_quad`](fn.line_quad.md#rustdoc-item-1460) — The six clip-space corners of the quad covering `start`-`end`, widened by
- [`line_vertices`](fn.line_vertices.md#rustdoc-item-1457) — The frame's debug lines and gizmo lines as screen-space quads, split into
- [`near_side_crossing`](fn.near_side_crossing.md#rustdoc-item-1463) — How far along the way from a point at `start_depth` to one at `end_depth`
- [`outlined_queue_positions`](fn.outlined_queue_positions.md#rustdoc-item-1454) — The queue positions of the instances whose entity is outlined.
- [`set_viewport`](fn.set_viewport.md#rustdoc-item-1453) — Clip a pass to the region the scene was drawn into.
- [`to_pixels`](fn.to_pixels.md#rustdoc-item-1466) — A clip-space position in pixels from the centre of the drawn region.
- [`triangle_vertices`](fn.triangle_vertices.md#rustdoc-item-1469) — The frame's gizmo triangles as screen-space triangles whose corners are
- [`unit_direction`](fn.unit_direction.md#rustdoc-item-1468) — Scales `direction` to unit length, or returns `None` when it is too short

### Type aliases
- [`ClipVertex`](type.ClipVertex.md#rustdoc-item-1279) — A vertex on its way to the screen: its clip-space position and the corner

### Constants
- [`LABEL_SHADOW_COLOR`](constant.LABEL_SHADOW_COLOR.md#rustdoc-item-1023) — The colour of the shadow under a label, so it reads over any background.
- [`LINE_FEATHER`](constant.LINE_FEATHER.md#rustdoc-item-1026) — How many pixels past the line's half width the anti-aliasing fade reaches.
- [`LINE_HALF_WIDTH`](constant.LINE_HALF_WIDTH.md#rustdoc-item-1025) — The half width of a drawn overlay line, in pixels.
- [`LINE_QUAD_SIDES`](constant.LINE_QUAD_SIDES.md#rustdoc-item-1028) — Which side of its line each of a quad's six corners sits on, in order.
- [`MINIMUM_MITER_SINE`](constant.MINIMUM_MITER_SINE.md#rustdoc-item-1030) — The smallest sine of a corner's half-angle the expansion accepts. At a
- [`NEAR_CLIP_DEPTH`](constant.NEAR_CLIP_DEPTH.md#rustdoc-item-1024) — The view-space distance from the camera below which a point counts as
- [`OUTLINE_MASK_FORMAT`](constant.OUTLINE_MASK_FORMAT.md#rustdoc-item-1020) — Format of the outline mask.
- [`OUTLINE_WIDTH`](constant.OUTLINE_WIDTH.md#rustdoc-item-1019) — Width of a selection outline, in pixels.
- [`PICK_BUFFER_DEPTH_FORMAT`](constant.PICK_BUFFER_DEPTH_FORMAT.md#rustdoc-item-1022) — Format of the pick buffer's own depth: the same one every depth-tested
- [`PICK_BUFFER_FORMAT`](constant.PICK_BUFFER_FORMAT.md#rustdoc-item-1021) — Format of the pick buffer: one id per pixel.
- [`PICK_LINE_HALF_WIDTH`](constant.PICK_LINE_HALF_WIDTH.md#rustdoc-item-1027) — The half width of a gizmo line's quad in the pick buffer, in pixels.
- [`TRIANGLE_FEATHER`](constant.TRIANGLE_FEATHER.md#rustdoc-item-1029) — How far a gizmo triangle's corners are pushed out, in pixels, so its

### Macros
- [`attributes`](macro.attributes.md#rustdoc-item-1407) — A vertex attribute list for consecutive fields.
