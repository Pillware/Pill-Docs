<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-942"></a>

# Module `pill_master_renderer::overlay::picking`

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\picking.rs:1`

Reading the pick buffer back without stalling a frame.

## Responsibilities

- Copy each requested pixel of the pick buffer into a buffer the CPU can
  map ([`PickReadback::copy_requested_pixels`](struct.PickReadback.md#rustdoc-item-981)).
- Ask for those buffers to be mapped once the frame that filled them is
  submitted, then turn what they hold into answers
  ([`PickReadback::collect`](struct.PickReadback.md#rustdoc-item-983)).

## Design

A frame records the copies and never waits for them. The map is asked for
after the frame is submitted, and a later [`PickReadback::collect`](struct.PickReadback.md#rustdoc-item-983) polls
the device without blocking and decodes whatever has arrived.

A pixel that covers a mesh holds that instance's position in the frame's
draw queue, so each readback keeps the entity at every queue position of
the frame it came from. The answer stays right even when a later frame
draws the queue in another order.

## Module contents

### Structs
- [`PendingReadback`](struct.PendingReadback.md#rustdoc-item-947) — The copies one frame recorded for one surface, kept until their pixels can
- [`PickReadback`](struct.PickReadback.md#rustdoc-item-977) — Every pick on its way back from the GPU, and the answers that have already

### Functions
- [`answer_every_request_with_nothing`](fn.answer_every_request_with_nothing.md#rustdoc-item-1013) — Answers every request in `requests` with [`PickHit::Nothing`].
- [`decode_slot`](fn.decode_slot.md#rustdoc-item-1014) — Decodes slot `slot_index` of a mapped readback into the pick answer it

### Constants
- [`BYTES_PER_SLOT`](constant.BYTES_PER_SLOT.md#rustdoc-item-941) — Bytes from one copied pixel's slot to the next: one wgpu row alignment
