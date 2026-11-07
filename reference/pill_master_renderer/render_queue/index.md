<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1844"></a>

# Module `pill_master_renderer::render_queue`

Source: `extensions\pill_master_renderer\pill_master_renderer\src\render_queue.rs:1`

One queued draw per frame instance, and the sort key that puts draws
sharing a shader, material and mesh next to each other.
The draw queue of one frame, and the key that decides the order its draws
are made in.

## Responsibilities

- Carry one queued draw per drawable frame instance: the shader, material
  and mesh handles it binds, the instance it draws, and the key the queue
  sorts on ([`RenderQueueItem`]).
- Pack a draw's rendering order and the slot identity of its handles into
  the one `u64` the queue sorts by ([`compose_render_queue_key`]).

## Design

Sorting by the key puts draws that use the same rendering order, shader,
material and mesh next to each other. The mesh drawer records each run of
equal keys as one instanced draw.

The key exists only for that comparison. It stores each index and version
in one byte, so a value above 255 keeps only its low byte, and nothing
reads a key back as a handle. A draw carries its real handles beside the
key, which is why an asset whose slot version has passed 255 still draws
with its own objects.

## Module contents

### Structs
- [`RenderQueueItem`](struct.RenderQueueItem.md#rustdoc-item-139) — One draw waiting in the queue, with the handles it binds, the instance it

### Functions
- [`compose_render_queue_key`](fn.compose_render_queue_key.md#rustdoc-item-1790) — Packs the rendering order of a draw and the resources it binds into one
