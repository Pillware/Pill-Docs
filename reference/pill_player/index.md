<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-868"></a>

# pill_player API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Runs a game: the engine, its frames, and the statically linked project.

## Responsibilities

- Owns the [`pill_engine::Engine`] and runs frames ([`Runtime`](runtime/struct.Runtime.md#rustdoc-item-235)).
- Defines the static-link contract ([`StaticProject`](static_project/struct.StaticProject.md#rustdoc-item-278), [`StaticModule`](static_project/struct.StaticModule.md#rustdoc-item-556),
  [`StaticRenderer`](static_project/struct.StaticRenderer.md#rustdoc-item-280), [`StaticProjectBackend`](static_project/enum.StaticProjectBackend.md#rustdoc-item-592), [`ProjectBackend`](static_project/trait.ProjectBackend.md#rustdoc-item-586)) and
  registers a linked project in the same order, and under the same owners,
  as the hot-reloading host.
- Gives every registering part (a module, the renderer or the project) the
  owner its ECS systems are recorded under, and runs an entry point with
  that owner in effect ([`registration`](registration/index.md#rustdoc-item-124)). The development host uses the
  same owners.
- With `rendering`: attaches a renderer to a window passed as raw handles
  ([`RendererWindow`](render_window/trait.RendererWindow.md#rustdoc-item-125), [`attach_renderer`](rendering/fn.attach_renderer.md#rustdoc-item-276)) and draws frames
  ([`AttachedRenderer`](rendering/struct.AttachedRenderer.md#rustdoc-item-179), [`RenderingRuntime`](rendering/struct.RenderingRuntime.md#rustdoc-item-237)).
- Installs the telemetry stack ([`init_telemetry`](telemetry/fn.init_telemetry.md#rustdoc-item-744)) and defines
  [`FrameDriver`](runtime/trait.FrameDriver.md#rustdoc-item-272), the trait a frontend's loop drives.

## Design

Linked into every executable: the development host
(`pill_development_host`) builds on it, and a shipping build and a web
build use it without the host. It therefore holds only what a shipped game
needs: no DLL loading, file watching, build tools, .NET hosting, winit or
YAML. A C# project reaches it as an external [`ProjectBackend`](static_project/trait.ProjectBackend.md#rustdoc-item-586) that
`pill_csharp_bridge` implements.

## Module contents

### Modules
- [`error`](error/index.md#rustdoc-item-114) — Errors of a windowed runtime.
- [`registration`](registration/index.md#rustdoc-item-124) — Which owner a module, the renderer or the project registers its ECS
- [`render_window`](render_window/index.md#rustdoc-item-135) — Attaching a renderer to a frontend's window, through its handles as data.
- [`rendering`](rendering/index.md#rustdoc-item-137) — A renderer attached to a window, and the runtime that draws a statically
- [`runtime`](runtime/index.md#rustdoc-item-284) — Engine ownership and the frame every build runs.
- [`static_project`](static_project/index.md#rustdoc-item-733) — Statically linked project and module registration.
- [`system_specs`](system_specs/index.md#rustdoc-item-737) — The start-up report of the machine the engine runs on.
- [`telemetry`](telemetry/index.md#rustdoc-item-748) — Application telemetry bootstrap for every frontend.

## Re-exports

- `pub use pill_engine::common_components::TransformComponent;`
- `pub use pill_renderer_api::editor_view_surfaces;`
- `pub use pill_renderer_api::ensure_preview_resources;`
- `pub use pill_renderer_api::frame_grid;`
- `pub use pill_renderer_api::CameraBinding;`
- `pub use pill_renderer_api::CameraComponent;`
- `pub use pill_renderer_api::PickHit;`
- `pub use pill_renderer_api::PickRequests;`
- `pub use pill_renderer_api::PickResults;`
- `pub use pill_renderer_api::PresentPreference;`
- `pub use pill_renderer_api::PreviewAsset;`
- `pub use pill_renderer_api::PreviewImage;`
- `pub use pill_renderer_api::PreviewRequests;`
- `pub use pill_renderer_api::PreviewResults;`
- `pub use pill_renderer_api::RenderViewport;`
- `pub use pill_renderer_api::RendererError;`
- `pub use pill_renderer_api::SceneGrid;`
- `pub use pill_renderer_api::SelectionOutlines;`
- `pub use pill_renderer_api::SurfaceCameras;`
- `pub use pill_renderer_api::SurfaceId;`
- `pub use pill_renderer_api::SurfaceOptions;`
- [`pub use runtime::insert_debug_resources;`](runtime/fn.insert_debug_resources.md#rustdoc-item-549)
- [`pub use runtime::mount_asset_pack;`](runtime/fn.mount_asset_pack.md#rustdoc-item-551)
- [`pub use runtime::set_surface_camera;`](runtime/fn.set_surface_camera.md#rustdoc-item-547)
- [`pub use runtime::setup;`](runtime/fn.setup.md#rustdoc-item-314)
- [`pub use runtime::setup_with_asset_database;`](runtime/fn.setup_with_asset_database.md#rustdoc-item-315)
- [`pub use runtime::FrameDriver;`](runtime/trait.FrameDriver.md#rustdoc-item-272)
- [`pub use runtime::PackSource;`](runtime/enum.PackSource.md#rustdoc-item-498)
- [`pub use runtime::Runtime;`](runtime/struct.Runtime.md#rustdoc-item-235)
- [`pub use runtime::WindowedFrameDriver;`](runtime/trait.WindowedFrameDriver.md#rustdoc-item-275)
- [`pub use static_project::ProjectBackend;`](static_project/trait.ProjectBackend.md#rustdoc-item-586)
- [`pub use static_project::StaticLogging;`](static_project/struct.StaticLogging.md#rustdoc-item-659)
- [`pub use static_project::StaticModule;`](static_project/struct.StaticModule.md#rustdoc-item-556)
- [`pub use static_project::StaticProject;`](static_project/struct.StaticProject.md#rustdoc-item-278)
- [`pub use static_project::StaticProjectBackend;`](static_project/enum.StaticProjectBackend.md#rustdoc-item-592)
- [`pub use static_project::StaticRenderer;`](static_project/struct.StaticRenderer.md#rustdoc-item-280)
- [`pub use static_project::StaticRendererAttachFn;`](static_project/type.StaticRendererAttachFn.md#rustdoc-item-622)
- [`pub use telemetry::apply_logging_settings;`](telemetry/fn.apply_logging_settings.md#rustdoc-item-804)
- [`pub use telemetry::init_telemetry;`](telemetry/fn.init_telemetry.md#rustdoc-item-744)
- [`pub use telemetry::init_telemetry_with_capture;`](telemetry/fn.init_telemetry_with_capture.md#rustdoc-item-802)
- [`pub use telemetry::report_failure;`](telemetry/fn.report_failure.md#rustdoc-item-805)
- [`pub use telemetry::LoggingSettings;`](telemetry/struct.LoggingSettings.md#rustdoc-item-698)
- [`pub use error::RenderingError;`](error/enum.RenderingError.md#rustdoc-item-6)
- [`pub use render_window::RendererWindow;`](render_window/trait.RendererWindow.md#rustdoc-item-125)
- [`pub use rendering::attach_renderer;`](rendering/fn.attach_renderer.md#rustdoc-item-276)
- [`pub use rendering::setup_rendering;`](rendering/fn.setup_rendering.md#rustdoc-item-277)
- [`pub use rendering::AttachedRenderer;`](rendering/struct.AttachedRenderer.md#rustdoc-item-179)
- [`pub use rendering::RenderingRuntime;`](rendering/struct.RenderingRuntime.md#rustdoc-item-237)
