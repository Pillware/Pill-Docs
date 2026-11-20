<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1450"></a>

# Module `pill_renderer_api::picking`

Source: `rendering\pill_renderer_api\src\picking.rs:1`

Selection outlines and picking.
Selection outlines and picking: which entities a renderer outlines, and
which entity or gizmo handle is under a pixel.

## Responsibilities

- Name the entities to outline ([`SelectionOutlines`](struct.SelectionOutlines.md#rustdoc-item-874), a world resource).
- Ask what is under a pixel of a surface ([`PickRequests`](struct.PickRequests.md#rustdoc-item-1451)) and receive the
  answer frames later ([`PickResults`](struct.PickResults.md#rustdoc-item-201)), as plain data.

## Design

A pick reads the pick buffer back from the GPU, and waiting for that answer
never blocks a frame. A request made now is answered once the GPU has
finished with it, a frame or more later. Each request carries an id, so its
answer can be matched however late it arrives. The pick buffer also draws
the gizmo handles over the scene, with the same lines and triangles that
[`pill_engine::DebugDraw::gizmo_line`] and
[`pill_engine::DebugDraw::gizmo_triangle`] draw, so a pick finds a handle
that lies in front of an entity.

## Module contents

### Structs
- [`PickRequest`](struct.PickRequest.md#rustdoc-item-879) — One request to find what is under a pixel.
- [`PickRequests`](struct.PickRequests.md#rustdoc-item-1451) — The picks asked for and not yet handed to a renderer.
- [`PickResult`](struct.PickResult.md#rustdoc-item-203) — The answer to one [`PickRequest`].
- [`PickResults`](struct.PickResults.md#rustdoc-item-201) — The answers renderers delivered and nobody took yet.
- [`SelectionOutlines`](struct.SelectionOutlines.md#rustdoc-item-874) — The entities a renderer outlines, in one colour.

### Enums
- [`PickHit`](enum.PickHit.md#rustdoc-item-1375) — What a pick found.

### Functions
- [`decode_pick_value`](fn.decode_pick_value.md#rustdoc-item-1525) — Decodes one pick-buffer value against the instance entities of the frame

### Constants
- [`PICK_HANDLE_BIT`](constant.PICK_HANDLE_BIT.md#rustdoc-item-1294) — What one pixel of the pick buffer holds: `0` for nothing, `1 + index` for
