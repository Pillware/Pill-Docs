<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-850"></a>

# Module `pill_renderer_api::frame`

Source: `rendering\pill_renderer_api\src\frame.rs:1`

The frame a renderer draws: instances, resolved passes, the surfaces'
cameras and the clock.
The frame the renderer draws: plain data a project's world hands the
renderer once per update.

## Responsibilities

- Define [`RenderFrame`](struct.RenderFrame.md#rustdoc-item-188), the per-update renderer input, and the two values
  it carries: [`RenderInstance`](struct.RenderInstance.md#rustdoc-item-686) for each drawable and [`ResolvedPass`](struct.ResolvedPass.md#rustdoc-item-546) for
  each pass of the chain.
- Define the vocabulary a resolved pass is written in: [`PassSettings`](struct.PassSettings.md#rustdoc-item-548),
  [`PassKind`](enum.PassKind.md#rustdoc-item-407), [`PassTarget`](enum.PassTarget.md#rustdoc-item-452), [`CullMode`](enum.CullMode.md#rustdoc-item-496) and [`MaterialParameter`](enum.MaterialParameter.md#rustdoc-item-594).

## Design

Only the types live here. The system that fills them from the world belongs
to the renderer module.

The frame crosses the artifact boundary, so it carries plain data only:
asset keys instead of handles, and a copy of the camera instead of a
borrow. The assets behind those keys are read from the world's
`AssetManager` when the frame is drawn, so the frame never copies the asset
store.

**This module is renderer contract.** `PillRenderer::render` takes a
[`RenderFrame`](struct.RenderFrame.md#rustdoc-item-188), so everything the frame names has to be available to every
renderer and to the host, whichever renderer's data crate a project uses.
That is why it depends on nothing in the renderer's own data crate: the pass
and parameter types it needs are defined here, and the asset types that use
them import them from here. The camera is contract for the same reason. The
transform is the engine's.

## Module contents

### Structs
- [`AssetKey`](struct.AssetKey.md#rustdoc-item-633) — The key of one asset, as a frame and a renderer name it.
- [`ChainSource`](struct.ChainSource.md#rustdoc-item-759) — What a frame's resolved pass chain was read from: the two values that, when
- [`PassSettings`](struct.PassSettings.md#rustdoc-item-548) — How one pass draws: what it renders, where it writes, and how the draw is
- [`RenderFrame`](struct.RenderFrame.md#rustdoc-item-188) — One frame's renderer input: the instances, the pass chain, the surface
- [`RenderInstance`](struct.RenderInstance.md#rustdoc-item-686) — One drawable the frame collected: where it stands and what it draws with.
- [`ResolvedPass`](struct.ResolvedPass.md#rustdoc-item-546) — One pass of the chain the renderer runs, with every handle resolved to a

### Enums
- [`CullMode`](enum.CullMode.md#rustdoc-item-496) — Which faces a pass drops.
- [`MaterialParameter`](enum.MaterialParameter.md#rustdoc-item-594) — One named value a shader reads.
- [`PassKind`](enum.PassKind.md#rustdoc-item-407) — What a pass draws.
- [`PassTarget`](enum.PassTarget.md#rustdoc-item-452) — Where a pass reads from and writes to.
