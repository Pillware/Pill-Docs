<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1756"></a>

# pill_renderer_api API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The renderer contract: what the host hands any renderer and what every
renderer hands back, with no graphics library behind it.

## Responsibilities

- Define the backend contract a frontend drives ([`PillRenderer`](api/trait.PillRenderer.md#rustdoc-item-181)) and the
  values it reports ([`FrameOutcome`](api/enum.FrameOutcome.md#rustdoc-item-3), [`RenderCapabilities`](api/struct.RenderCapabilities.md#rustdoc-item-106),
  [`RenderMetrics`](api/struct.RenderMetrics.md#rustdoc-item-144)), plus the failures a renderer raises
  ([`RendererError`](error/enum.RendererError.md#rustdoc-item-182)).
- Define the frame a renderer draws ([`RenderFrame`](frame/struct.RenderFrame.md#rustdoc-item-191)) and the vocabulary
  it is written in: pass kinds and targets, cull modes, material
  parameters.
- Define the camera component the frame embeds and the viewport rectangle
  a frontend points a renderer at, and register the components through
  [`register_contract_components`](components/fn.register_contract_components.md#rustdoc-item-360).
- Carry a window ([`RawWindowData`](raw_window/struct.RawWindowData.md#rustdoc-item-198)), a surface set ([`SurfaceId`](surface/struct.SurfaceId.md#rustdoc-item-187),
  [`SurfaceCameras`](surface/struct.SurfaceCameras.md#rustdoc-item-870)) and the scene grid ([`SceneGrid`](grid/struct.SceneGrid.md#rustdoc-item-927), the frame's cell
  size) as plain data.
- Carry debug drawing, selection outlines, picking and previews between the
  world and any renderer ([`SelectionOutlines`](picking/struct.SelectionOutlines.md#rustdoc-item-874), [`PickRequests`](picking/struct.PickRequests.md#rustdoc-item-1451),
  [`PickResults`](picking/struct.PickResults.md#rustdoc-item-201), [`PreviewRequests`](preview/struct.PreviewRequests.md#rustdoc-item-1609)).

## Design

This crate never depends on wgpu or winit and holds nothing specific to one
renderer. A renderer comes as a data crate (assets, its own components,
pipelines, shaders) plus a GPU module, and both build on this contract. The
host links this crate in every posture, so a change here needs a host
restart. The types stay small and hold plain data.

## Module contents

### Modules
- [`api`](api/index.md#rustdoc-item-238) — The renderer contract a frontend drives, plus a headless stub.
- [`components`](components/index.md#rustdoc-item-362) — The contract's camera component and viewport rectangle, and
- [`error`](error/index.md#rustdoc-item-466) — Renderer failures, the [`error::Result`] alias and the
- [`frame`](frame/index.md#rustdoc-item-922) — The frame a renderer draws: instances, resolved passes, the surfaces'
- [`grid`](grid/index.md#rustdoc-item-924) — The scene grid of the view-bound surfaces: whether it is on, its line
- [`picking`](picking/index.md#rustdoc-item-1450) — Selection outlines and picking.
- [`preview`](preview/index.md#rustdoc-item-1608) — Asset previews: off-screen renders the editor asks a renderer for.
- [`raw_window`](raw_window/index.md#rustdoc-item-1062) — A window's platform handles as plain data, for attaching a renderer to it.
- [`surface`](surface/index.md#rustdoc-item-1293) — Several surfaces per renderer: identities, presentation, camera bindings.

## Re-exports

- [`pub use api::AttachFuture;`](api/type.AttachFuture.md#rustdoc-item-177)
- [`pub use api::FrameOutcome;`](api/enum.FrameOutcome.md#rustdoc-item-3)
- [`pub use api::HeadlessRenderer;`](api/struct.HeadlessRenderer.md#rustdoc-item-207)
- [`pub use api::PillRenderer;`](api/trait.PillRenderer.md#rustdoc-item-181)
- [`pub use api::RenderCapabilities;`](api/struct.RenderCapabilities.md#rustdoc-item-106)
- [`pub use api::RenderMetrics;`](api/struct.RenderMetrics.md#rustdoc-item-144)
- [`pub use error::RendererError;`](error/enum.RendererError.md#rustdoc-item-182)
- [`pub use frame::AssetKey;`](frame/struct.AssetKey.md#rustdoc-item-700)
- [`pub use frame::ChainSource;`](frame/struct.ChainSource.md#rustdoc-item-828)
- [`pub use frame::CullMode;`](frame/enum.CullMode.md#rustdoc-item-561)
- [`pub use frame::MaterialParameter;`](frame/enum.MaterialParameter.md#rustdoc-item-661)
- [`pub use frame::PassKind;`](frame/enum.PassKind.md#rustdoc-item-470)
- [`pub use frame::PassSettings;`](frame/struct.PassSettings.md#rustdoc-item-614)
- [`pub use frame::PassTarget;`](frame/enum.PassTarget.md#rustdoc-item-516)
- [`pub use frame::RenderFrame;`](frame/struct.RenderFrame.md#rustdoc-item-191)
- [`pub use frame::RenderInstance;`](frame/struct.RenderInstance.md#rustdoc-item-755)
- [`pub use frame::ResolvedPass;`](frame/struct.ResolvedPass.md#rustdoc-item-612)
- [`pub use grid::editor_view_surfaces;`](grid/fn.editor_view_surfaces.md#rustdoc-item-963)
- [`pub use grid::frame_grid;`](grid/fn.frame_grid.md#rustdoc-item-964)
- [`pub use grid::SceneGrid;`](grid/struct.SceneGrid.md#rustdoc-item-927)
- [`pub use picking::decode_pick_value;`](picking/fn.decode_pick_value.md#rustdoc-item-1525)
- [`pub use picking::PickHit;`](picking/enum.PickHit.md#rustdoc-item-1375)
- [`pub use picking::PickRequest;`](picking/struct.PickRequest.md#rustdoc-item-879)
- [`pub use picking::PickRequests;`](picking/struct.PickRequests.md#rustdoc-item-1451)
- [`pub use picking::PickResult;`](picking/struct.PickResult.md#rustdoc-item-203)
- [`pub use picking::PickResults;`](picking/struct.PickResults.md#rustdoc-item-201)
- [`pub use picking::SelectionOutlines;`](picking/struct.SelectionOutlines.md#rustdoc-item-874)
- [`pub use picking::PICK_HANDLE_BIT;`](picking/constant.PICK_HANDLE_BIT.md#rustdoc-item-1294)
- [`pub use preview::ensure_preview_resources;`](preview/fn.ensure_preview_resources.md#rustdoc-item-1711)
- [`pub use preview::PreviewAsset;`](preview/enum.PreviewAsset.md#rustdoc-item-1534)
- [`pub use preview::PreviewImage;`](preview/struct.PreviewImage.md#rustdoc-item-206)
- [`pub use preview::PreviewRequest;`](preview/struct.PreviewRequest.md#rustdoc-item-881)
- [`pub use preview::PreviewRequests;`](preview/struct.PreviewRequests.md#rustdoc-item-1609)
- [`pub use preview::PreviewResults;`](preview/struct.PreviewResults.md#rustdoc-item-204)
- [`pub use raw_window::RawWindowData;`](raw_window/struct.RawWindowData.md#rustdoc-item-198)
- [`pub use raw_window::RawWindowKind;`](raw_window/enum.RawWindowKind.md#rustdoc-item-976)
- [`pub use surface::resolve_camera_binding;`](surface/fn.resolve_camera_binding.md#rustdoc-item-1291)
- [`pub use surface::CameraBinding;`](surface/enum.CameraBinding.md#rustdoc-item-966)
- [`pub use surface::PresentPreference;`](surface/enum.PresentPreference.md#rustdoc-item-1110)
- [`pub use surface::SurfaceCameras;`](surface/struct.SurfaceCameras.md#rustdoc-item-870)
- [`pub use surface::SurfaceId;`](surface/struct.SurfaceId.md#rustdoc-item-187)
- [`pub use surface::SurfaceOptions;`](surface/struct.SurfaceOptions.md#rustdoc-item-199)
- [`pub use surface::SurfaceView;`](surface/struct.SurfaceView.md#rustdoc-item-871)
- [`pub use components;`](components/index.md#rustdoc-item-362)
