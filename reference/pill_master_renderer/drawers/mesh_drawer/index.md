<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3"></a>

# Module `pill_master_renderer::drawers::mesh_drawer`

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\drawers\mesh_drawer.rs:1`

The mesh drawer: batches the frame's queued instances and records their
instanced draws.
Batching and draw recording for the master renderer's mesh path.

## Responsibilities

- Track the shader, material, and mesh that the bound GPU resources belong
  to, and draw the accumulated instances when any of them changes
  ([`DrawingContext`]).
- Own the instance buffer, keep it large enough for a frame's instances,
  and upload them once per frame ([`MeshDrawer::upload_instances`]).
- Open a render pass and record the draws of the ranges it is given
  ([`MeshDrawer::record_draw_commands`]).

## Design

The queue arrives sorted by its packed key: rendering order first, then
shader, material, and mesh. Each run of equal keys becomes one instanced
draw, and a new draw starts only where the key changes, where the pass's
pipeline changes between ranges, or where a range ends.

The frame's instances are uploaded once, in queue order, into one growable
buffer, so a queue position is also an instance index. Every pass draws
straight from that upload, and nothing is copied or written per pass.

## Module contents

### Structs
- [`DrawingContext`](struct.DrawingContext.md#rustdoc-item-16) — The bound state and instance range of the batch being accumulated.
- [`MeshDrawer`](struct.MeshDrawer.md#rustdoc-item-127) — Owns the instance buffer and records a frame's mesh draws through it.
