<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-922"></a>

# Module `pill_renderer_api::frame`

Source: `rendering\pill_renderer_api\src\frame.rs:1`

The frame a renderer draws: instances, resolved passes, the surfaces'
cameras and the clock.
The frame the renderer draws: plain data a project's world hands the
renderer once per update.

## Responsibilities

- Define [`RenderFrame`](struct.RenderFrame.md#rustdoc-item-191), the per-update renderer input, and the two values
  it carries: [`RenderInstance`](struct.RenderInstance.md#rustdoc-item-755) for each drawable and [`ResolvedPass`](struct.ResolvedPass.md#rustdoc-item-612) for
  each pass of the chain.
- Define the vocabulary a resolved pass is written in: [`PassSettings`](struct.PassSettings.md#rustdoc-item-614),
  [`PassKind`](enum.PassKind.md#rustdoc-item-470), [`PassTarget`](enum.PassTarget.md#rustdoc-item-516), [`CullMode`](enum.CullMode.md#rustdoc-item-561) and [`MaterialParameter`](enum.MaterialParameter.md#rustdoc-item-661).

## Design

Only the types live here. The system that fills them from the world belongs
to the renderer module.

The frame crosses the artifact boundary, so it carries plain data only:
asset keys instead of handles, and a copy of the camera instead of a
borrow. The assets behind those keys are read from the world's
`AssetManager` when the frame is drawn, so the frame never copies the asset
store.

**This module is renderer contract.** `PillRenderer::render` takes a
[`RenderFrame`](struct.RenderFrame.md#rustdoc-item-191), so everything the frame names has to be available to every
renderer and to the host, whichever renderer's data crate a project uses.
That is why it depends on nothing in the renderer's own data crate: the pass
and parameter types it needs are defined here, and the asset types that use
them import them from here. The camera is contract for the same reason. The
transform is the engine's.

## Module contents

### Structs
- [`AssetKey`](struct.AssetKey.md#rustdoc-item-700) — The key of one asset, as a frame and a renderer name it.
- [`ChainSource`](struct.ChainSource.md#rustdoc-item-828) — What a frame's resolved pass chain was read from: the two values that, when
- [`PassSettings`](struct.PassSettings.md#rustdoc-item-614) — How one pass draws: what it renders, where it writes, and how the draw is
- [`RenderFrame`](struct.RenderFrame.md#rustdoc-item-191) — One frame's renderer input: the instances, the pass chain, the surface
- [`RenderInstance`](struct.RenderInstance.md#rustdoc-item-755) — One drawable the frame collected: where it stands and what it draws with.
- [`ResolvedPass`](struct.ResolvedPass.md#rustdoc-item-612) — One pass of the chain the renderer runs, with every handle resolved to a

### Enums
- [`CullMode`](enum.CullMode.md#rustdoc-item-561) — Which faces a pass drops.
- [`MaterialParameter`](enum.MaterialParameter.md#rustdoc-item-661) — One named value a shader reads.
- [`PassKind`](enum.PassKind.md#rustdoc-item-470) — What a pass draws.
- [`PassTarget`](enum.PassTarget.md#rustdoc-item-516) — Where a pass reads from and writes to.
