<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-534"></a>

# Module `pill_master_renderer::chain`

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:1`

Holds the frame's chain as GPU objects and the plan each frame is recorded
from.
The chain's GPU objects, and the plan each frame is recorded from.

## Responsibilities

- Decide when a chain's pipelines, bind groups and offscreen targets must be
  rebuilt. A tuple of the frame's chain generation, resource epoch and
  surface size is checked every frame; the chain itself and the offscreen
  layout are compared only when that tuple changes.
- Build one pass object per pass of the chain, and remember the reason for
  each pass it could not build.
- Plan each frame: which draws each pass takes, and which pass opens each
  target. A pass that cannot be recorded is named once, not once per frame.
- Write the chain to the log once per change.

## Design

The frame hands this module a resolved chain every frame, but the GPU objects
are built once and reused: an unchanged frame costs one tuple comparison.

A game writes its chain as a [`RenderingPipeline`] of [`RenderPass`]es. The
frame resolves that into [`ResolvedPass`]es, and this module turns each of
them into a GPU pass object. A [`ChainContext`] carries what the chain needs
from the renderer, and one pass build yields either that object or the reason
there is none.

[`RenderingPipeline`]: crate::RenderingPipeline
[`RenderPass`]: crate::RenderPass

## Module contents

### Structs
- [`ChainContext`](struct.ChainContext.md#rustdoc-item-508) — What the chain needs from the renderer to build its GPU objects.
- [`DrawRange`](struct.DrawRange.md#rustdoc-item-140) — One run of queue positions a geometry pass records, and which pipeline it
- [`GpuChain`](struct.GpuChain.md#rustdoc-item-543) — The GPU side of a chain: one pass object per pass, and the plan a frame is

### Enums
- [`PassOutput`](enum.PassOutput.md#rustdoc-item-338) — Where a pass writes.
- [`PassPlan`](enum.PassPlan.md#rustdoc-item-462) — One pass the renderer will record.
- [`PassSlot`](enum.PassSlot.md#rustdoc-item-377) — A pass's GPU object, or the reason there is none.

### Functions
- [`build_pass`](fn.build_pass.md#rustdoc-item-581) — One pass's GPU object, or the reason there is none.
- [`ensure_offscreen_targets`](fn.ensure_offscreen_targets.md#rustdoc-item-587) — Create a target for every offscreen output the chain declares.
- [`offscreen_layout`](fn.offscreen_layout.md#rustdoc-item-586) — The layout of the offscreen targets a chain needs: one entry per pass and
- [`scaled_target_refusal`](fn.scaled_target_refusal.md#rustdoc-item-579) — Why a pass cannot write a target scaled down from the surface, or `None`
- [`shader_ranges`](fn.shader_ranges.md#rustdoc-item-585) — The runs of the queue drawn by `shader`.
- [`shaderless_target_refusal`](fn.shaderless_target_refusal.md#rustdoc-item-580) — Why a pass with no shader of its own cannot draw into `pass`'s targets, or
- [`unclaimed_ranges`](fn.unclaimed_ranges.md#rustdoc-item-584) — The runs of the queue whose shader no pass in `claimed_shaders` names.
- [`whole_queue`](fn.whole_queue.md#rustdoc-item-583) — The whole queue as one range, or none when the queue is empty.

### Type aliases
- [`OffscreenLayoutKey`](type.OffscreenLayoutKey.md#rustdoc-item-533) — What the offscreen targets were built for: the scale each pass asks for on
