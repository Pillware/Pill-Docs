<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3592"></a>

# Module `pill_engine_core::debug_draw`

Source: `engine\pill_engine_core\src\debug_draw.rs:1`

Immediate debug drawing: lines, shapes, labels and gizmo handles. Any
system can draw them, and every renderer draws them.
Debug drawing that any system can use: lines, shapes and text labels, plus
the gizmo handles that an editor tool draws on top.

## Responsibilities

- Keep what systems ask to see, for one frame or for a set time, in
  [`DebugDraw`](struct.DebugDraw.md#rustdoc-item-3943), a world resource: line segments, shapes turned into line
  segments, text labels placed in the world or on the screen, and gizmo
  lines and triangles that carry a handle id.
- Count down how long each item stays and return one frame of plain data
  for the renderer. [`DebugDraw::collect_frame`](struct.DebugDraw.md#rustdoc-item-3957) builds a [`DebugFrame`](struct.DebugFrame.md#rustdoc-item-3868).
- Turn everything off. While drawing is disabled, no drawing call records
  anything, so nothing reaches the renderer.

## Design

The resource is plain data in the engine core and names no renderer, so a
game, an extension or an editor crate can draw without depending on one.
Every renderer that implements the contract draws the same frame. Shapes
are line segments by the time they leave here, so a renderer only has to
draw a line, a triangle and a text label. Label text is owned (`String`)
rather than borrowed from the module that drew it, so a reload cannot
leave a label pointing into memory that was unloaded.

## Module contents

### Structs
- [`DebugDraw`](struct.DebugDraw.md#rustdoc-item-3943) — The debug drawing of a world.
- [`DebugFrame`](struct.DebugFrame.md#rustdoc-item-3868) — Everything debug-drawn for one frame, in the form the renderer receives it.
- [`DebugLabel`](struct.DebugLabel.md#rustdoc-item-3756) — One text label of a frame.
- [`DebugLine`](struct.DebugLine.md#rustdoc-item-3719) — One line segment of a frame.
- [`DebugStyle`](struct.DebugStyle.md#rustdoc-item-3637) — How one drawn item looks and lasts.
- [`GizmoLine`](struct.GizmoLine.md#rustdoc-item-3793) — One gizmo line, drawn on top of everything and pickable by its handle id.
- [`GizmoTriangle`](struct.GizmoTriangle.md#rustdoc-item-3830) — One gizmo triangle, drawn on top of everything and pickable by its handle
- [`Timed`](struct.Timed.md#rustdoc-item-3907) — One item with the lifetime it has left.

### Enums
- [`DebugLifetime`](enum.DebugLifetime.md#rustdoc-item-3597) — How long one drawn item stays.
- [`LabelAnchor`](enum.LabelAnchor.md#rustdoc-item-3680) — Where a text label is placed.

### Functions
- [`add_vectors`](fn.add_vectors.md#rustdoc-item-3994)
- [`age_timed_items`](fn.age_timed_items.md#rustdoc-item-3992) — Drops the items whose time ran out and counts the rest down.
- [`cross_vectors`](fn.cross_vectors.md#rustdoc-item-3997)
- [`normalize_vector`](fn.normalize_vector.md#rustdoc-item-3999)
- [`plane_axes`](fn.plane_axes.md#rustdoc-item-3993) — Returns two unit-length axes that span the plane whose normal is `normal`.
- [`scale_vector`](fn.scale_vector.md#rustdoc-item-3996)
- [`subtract_vectors`](fn.subtract_vectors.md#rustdoc-item-3995)
- [`vector_length`](fn.vector_length.md#rustdoc-item-3998)

### Type aliases
- [`DebugColor`](type.DebugColor.md#rustdoc-item-3593) — A colour in linear RGBA, with one value per channel in `0..=1`.

### Constants
- [`CIRCLE_SEGMENTS`](constant.CIRCLE_SEGMENTS.md#rustdoc-item-3591) — Segments a circle is drawn with.
