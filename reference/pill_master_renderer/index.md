<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3145"></a>

# pill_master_renderer API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The wgpu renderer: the GPU work that turns the world's renderer data into
frames.

## Responsibilities

- Own the GPU half: the device and surface lifecycle ([`Renderer`](renderer/struct.Renderer.md#rustdoc-item-1865)), the
  [`resources`](resources/index.md#rustdoc-item-2227) the renderer keeps, the [`drawers`](drawers/index.md#rustdoc-item-170), the [`render_queue`](render_queue/index.md#rustdoc-item-1844)
  keys that order a frame's draws, and the [`ui`](ui/index.md#rustdoc-item-3085) painter that draws the
  frame's `pill_ui_frame` lists.
- Fill each frame from the world ([`frame`](frame/index.md#rustdoc-item-238), the `rendering` system).
- Install the renderer on an engine through [`register`](fn.register.md#rustdoc-item-3138), which adds that
  system. The components and assets are not registered here:
  `pill_master_renderer_data` registers them itself.

## Design

The data a renderer draws with - assets, components, the default pipelines
and their WGSL - lives in `pill_master_renderer_data`; the contract between
host and renderer - the frame, the backend trait, the camera - lives in
`pill_renderer_api`. Neither links wgpu, and both are re-exported here.
This crate is the only renderer crate that links wgpu, which is what lets a
development host load and reload it as a module while everything around it
compiles against data only.

## Module contents

### Modules
- [`chain`](chain/index.md#rustdoc-item-534) — Holds the frame's chain as GPU objects and the plan each frame is recorded
- [`drawers`](drawers/index.md#rustdoc-item-170) — The mesh drawer: batches the instances a frame queues and records the
- [`error`](error/index.md#rustdoc-item-179) — Renderer failures, re-exported from the contract crate, and the capture
- [`frame`](frame/index.md#rustdoc-item-238) — The system that turns the world into the frame the renderer draws.
- [`instance`](instance/index.md#rustdoc-item-275) — The per-instance transform the drawer uploads for the vertex shader.
- [`module_entry`](module_entry/index.md#rustdoc-item-3090) — The C ABI a host drives this renderer through when it loads it as a module.
- [`overlay`](overlay/index.md#rustdoc-item-858) — Debug drawing, gizmos, selection outlines, picking and the scene grid,
- [`preview`](preview/index.md#rustdoc-item-592) — The asset preview path: one small off-screen render, read back as pixels.
- [`profiler`](profiler/index.md#rustdoc-item-1480) — The query sets and readbacks behind GPU profiling measurements.
- [`readback`](readback/index.md#rustdoc-item-1638) — Mapping a GPU buffer back to the CPU without stalling a frame.
- [`render_queue`](render_queue/index.md#rustdoc-item-1844) — One queued draw per frame instance, and the sort key that puts draws
- [`renderer`](renderer/index.md#rustdoc-item-1847) — The wgpu renderer: the surfaces, the GPU caches and the frame submission.
- [`rendering_resources_manager`](rendering_resources_manager/index.md#rustdoc-item-2056) — The GPU objects that mirror the asset store, refreshed one asset type at a
- [`resources`](resources/index.md#rustdoc-item-2227) — One module per resource the renderer keeps, re-exported flat so callers
- [`stream_buffer`](stream_buffer/index.md#rustdoc-item-2865) — A GPU buffer rewritten every surface, shared by the overlay and the UI
- [`surface`](surface/index.md#rustdoc-item-2900) — The window surface, its swapchain, and the lifecycle that keeps them live.
- [`ui`](ui/index.md#rustdoc-item-3085) — The UI painter: draws the frame's `pill_ui_frame` lists over each surface.

### Functions
- [`attach`](fn.attach.md#rustdoc-item-3141) — Starts building a renderer backend on a window, for a host that links this
- [`init`](fn.init.md#rustdoc-item-3140) — The artifact's one-time entry point: nothing is one-time here.
- [`register`](fn.register.md#rustdoc-item-3138) — The registration half: declares nothing itself and returns zero.

### Macros
- [`__pill_renderer_entry_points`](macro.__pill_renderer_entry_points.md#rustdoc-item-3143) — Expands to this crate's renderer ABI exports, `pill_renderer_attach` and

## Re-exports

- `pub use pill_master_renderer_data::assets;`
- `pub use pill_master_renderer_data::components;`
- `pub use pill_master_renderer_data::config;`
- `pub use pill_master_renderer_data::AssetLoader;`
- `pub use pill_master_renderer_data::Material;`
- `pub use pill_master_renderer_data::MaterialBuilder;`
- `pub use pill_master_renderer_data::MaterialParameter;`
- `pub use pill_master_renderer_data::Mesh;`
- `pub use pill_master_renderer_data::MeshVertex;`
- `pub use pill_master_renderer_data::PassKind;`
- `pub use pill_master_renderer_data::PassTarget;`
- `pub use pill_master_renderer_data::PipelinePass;`
- `pub use pill_master_renderer_data::RenderPass;`
- `pub use pill_master_renderer_data::RenderingPipeline;`
- `pub use pill_master_renderer_data::Shader;`
- `pub use pill_master_renderer_data::ShaderBuilder;`
- `pub use pill_master_renderer_data::ShaderParameterSlot;`
- `pub use pill_master_renderer_data::ShaderParameterType;`
- `pub use pill_master_renderer_data::ShaderTextureSlot;`
- `pub use pill_master_renderer_data::Texture;`
- `pub use pill_master_renderer_data::TextureType;`
- `pub use pill_renderer_api::api;`
- `pub use pill_renderer_api::FrameOutcome;`
- `pub use pill_renderer_api::HeadlessRenderer;`
- `pub use pill_renderer_api::PillRenderer;`
- `pub use pill_renderer_api::RawWindowData;`
- `pub use pill_renderer_api::RenderCapabilities;`
- `pub use pill_renderer_api::RenderMetrics;`
- `pub use error::RendererError;`
- [`pub use frame::rendering_system;`](frame/fn.rendering_system.md#rustdoc-item-244)
- `pub use frame::RenderFrame;`
- `pub use frame::RenderInstance;`
- `pub use frame::ResolvedPass;`
- [`pub use instance::Instance;`](instance/struct.Instance.md#rustdoc-item-134)
- [`pub use renderer::Renderer;`](renderer/struct.Renderer.md#rustdoc-item-1865)
- `pub use resources::RenderingManager;`
- `pub use pill_master_renderer_data::components;`
