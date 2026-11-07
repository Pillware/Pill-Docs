<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1847"></a>

# Module `pill_master_renderer::renderer`

Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:1`

The wgpu renderer: the surfaces, the GPU caches and the frame submission.
The master renderer: draws a frame's chain and instances on the device and
state [`State`] owns.

## Responsibilities

- Keep the GPU's copy of each asset up to date with the asset store,
  rebuilding only what changed ([`RenderingResourcesManager`] and its
  per-type sync helpers).
- Hold each surface's chain in a [`GpuChain`]. Rebuild it when the frame
  says the chain changed, and plan each frame's passes.
- Submit through [`State`]: one command encoder, one wgpu render pass per
  planned pass, then the present.
- Draw into several surfaces from one device. Each surface is an entry of
  one map ([`SurfaceTarget`]), and each is drawn through its own camera:
  the primary surface the renderer was built on and every one attached
  since.
- Draw the overlay - debug drawing, outlines, picking - over each surface
  after its chain (`crate::overlay`).

## Design

The renderer is the two halves a frame needs: an asset store kept current
on the GPU, and a chain turned into passes. Both are checked against
something cheap - the store's revision and the chain's generation - so an
unchanged frame costs two comparisons and no rebuilds. A resource that
fails to build is named in the log and skipped.

A surface owns what is sized to it: its swapchain, depth buffer, offscreen
targets, their pass objects, its camera handle and the overlay's targets.
That holds whether it is the primary surface or one attached later. The
device, the asset caches and the queue are shared, and [`State`] draws a
surface by being handed its target, so no per-surface field is ever swapped
in and out.

## Module contents

### Structs
- [`Renderer`](struct.Renderer.md#rustdoc-item-1865) — The master renderer: the asset caches, a chain per surface, and the
- [`State`](struct.State.md#rustdoc-item-495) — The wgpu state every surface shares: the device, the queue, the caches and
- [`SurfaceDraw`](struct.SurfaceDraw.md#rustdoc-item-1963) — One surface's frame between the acquire and the present.
- [`SurfaceTarget`](struct.SurfaceTarget.md#rustdoc-item-1863) — One surface the renderer draws into, and everything sized to it.

### Functions
- [`color_load`](fn.color_load.md#rustdoc-item-2051) — The colour a pass opens its target with, or the values already in it.
- [`covers_target`](fn.covers_target.md#rustdoc-item-2053) — Whether a frame's viewport covers every pixel of a `width` by `height` target.
- [`create_gpu_profiler`](fn.create_gpu_profiler.md#rustdoc-item-2047) — The GPU profiler `PILL_GPU_PROFILE` asks for, or `None` when it was not
- [`depth_attachment`](fn.depth_attachment.md#rustdoc-item-2050) — The depth attachment a geometry pass writes, or a skybox reads.
- [`draw_preview`](fn.draw_preview.md#rustdoc-item-2045) — Draw one preview, naming what stopped it when it cannot be drawn.
- [`record_preview`](fn.record_preview.md#rustdoc-item-2044) — Draw one asset preview, when the frame asked for one and the previous
- [`viewport_in_target`](fn.viewport_in_target.md#rustdoc-item-2054) — The frame's viewport expressed in the pixels of one pass's target.
- [`write_gpu_timestamp`](fn.write_gpu_timestamp.md#rustdoc-item-2049) — Writes a GPU timestamp named `label` between passes, when profiling.

### Constants
- [`CLEAR_COLOR`](constant.CLEAR_COLOR.md#rustdoc-item-1848) — Colour every frame starts from, whatever the first pass is.
- [`CLEAR_TRANSPARENT`](constant.CLEAR_TRANSPARENT.md#rustdoc-item-1850) — What a frame leaves outside a viewport that does not cover the whole target.
- [`GPU_REPORT_INTERVAL`](constant.GPU_REPORT_INTERVAL.md#rustdoc-item-1846) — Frames between two sampled log reports: one from the GPU profiler and one
- [`NO_FOG_COLOR`](constant.NO_FOG_COLOR.md#rustdoc-item-1852)
- [`NO_FOG_DENSITY`](constant.NO_FOG_DENSITY.md#rustdoc-item-1851) — Fog values the engine parameters keep so their layout matches what a shader
- [`OFFSCREEN_FORMAT`](constant.OFFSCREEN_FORMAT.md#rustdoc-item-1845) — The colour format of every offscreen target a chain declares.
