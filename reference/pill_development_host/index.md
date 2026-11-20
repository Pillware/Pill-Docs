<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4869"></a>

# pill_development_host API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The development host: it builds a project and its extensions as loadable
modules and reloads them while the project runs.

## Responsibilities

- Builds and loads native or C# project modules and the extensions.
- Watches project sources and runs hot reloads at frame boundaries, just
  before the wrapped [`pill_player::Runtime`] runs its frame.
- Exposes [`setup`](runtime/fn.setup.md#rustdoc-item-4373), [`run_frame`](runtime/fn.run_frame.md#rustdoc-item-4178) and, when the host draws into a window,
  [`setup_rendering`](runtime/fn.setup_rendering.md#rustdoc-item-4375) and [`attach_renderer`](runtime/fn.attach_renderer.md#rustdoc-item-4384). A frontend owns its event
  loop and drives the host through [`FrameDriver`].

## Design

The configuration types ([`ProjectModuleConfig`](config/struct.ProjectModuleConfig.md#rustdoc-item-766), [`HostConfig`](config/struct.HostConfig.md#rustdoc-item-954)) keep
backend selection out of executable crates. Running the game is
`pill_player`'s job: the engine, the frame, the statically linked project
and the renderer's window. A shipping build links that crate without this
one. Everything this crate does is development work, so nothing here is
behind a feature: what a run watches is decided at startup by the switches
in [`switches`](switches/index.md#rustdoc-item-3972).

## Module contents

### Modules
- [`analytics`](analytics/index.md#rustdoc-item-1) — Collects build, load and reload measurements and prints them as console
- [`asset_browser`](asset_browser/index.md#rustdoc-item-4719) — The project's assets as a tool sees them: the tree listing, import settings
- [`build_progress`](build_progress/index.md#rustdoc-item-478) — The startup build plan: logs the modules a start will build, then counts
- [`build_runner`](build_runner/index.md#rustdoc-item-546) — Build commands for the project and its extensions, artifact staging and
- [`config`](config/index.md#rustdoc-item-823) — Project and extension configuration shared by every host frontend.
- [`csharp`](csharp/index.md#rustdoc-item-1405) — C# development tooling on top of `pill_csharp_bridge`: generates the C#
- [`extension`](extension/index.md#rustdoc-item-2844) — Builds, loads and reloads the extension modules.
- [`hot_patch`](hot_patch/index.md#rustdoc-item-2042) — Per-function hot patching: decides which edits can be patched, then
- [`layout_record`](layout_record/index.md#rustdoc-item-2848) — What a module's resources declared their layouts are made of, and whether
- [`native_binary`](native_binary/index.md#rustdoc-item-3148) — Reads a native image's dependencies, imports and exports from its bytes, so
- [`native_library`](native_library/index.md#rustdoc-item-3326) — Loads native module libraries from temporary copies that must outlive a
- [`notices`](notices/index.md#rustdoc-item-3549) — Reloads, patches, failures and rollbacks, queued as notices for an attached
- [`project_module`](project_module/index.md#rustdoc-item-2730) — The loaded project module: its startup build and load, and each reload
- [`reload`](reload/index.md#rustdoc-item-3684) — The steps every reload runs once its replacement image is loaded.
- [`renderer_module`](renderer_module/index.md#rustdoc-item-3974) — The GPU renderer as a loaded module: builds and attaches it, then drives
- [`runtime`](runtime/index.md#rustdoc-item-4115) — The development host: `DevHost` and `RenderingHost`, with the functions
- [`switches`](switches/index.md#rustdoc-item-3972) — What this run's watchers are allowed to do, read from the `PILL_*` switches.
- [`watchers`](watchers/index.md#rustdoc-item-4562) — The file watchers: the project's source tree, its asset directory and a

## Re-exports

- [`pub use config::EDITOR_SETTINGS_FILE;`](config/constant.EDITOR_SETTINGS_FILE.md#rustdoc-item-857)
- [`pub use config::read_editor_settings;`](config/fn.read_editor_settings.md#rustdoc-item-1292)
- [`pub use config::resolve_editor_theme;`](config/fn.resolve_editor_theme.md#rustdoc-item-1293)
- [`pub use config::EditorSettings;`](config/struct.EditorSettings.md#rustdoc-item-1155)
- [`pub use config::ExtensionConfig;`](config/struct.ExtensionConfig.md#rustdoc-item-817)
- [`pub use config::HostConfig;`](config/struct.HostConfig.md#rustdoc-item-954)
- [`pub use config::ProjectModuleBackend;`](config/enum.ProjectModuleBackend.md#rustdoc-item-871)
- [`pub use config::ProjectModuleConfig;`](config/struct.ProjectModuleConfig.md#rustdoc-item-766)
- `pub use extension::EXTENSION_ABI_VERSION;`
- [`pub use notices::take;`](notices/fn.take.md#rustdoc-item-3551)
- [`pub use notices::HostNotice;`](notices/enum.HostNotice.md#rustdoc-item-3553)
- `pub use pill_core::error::engine_report;`
- `pub use pill_core::error::install_engine_report_handler;`
- `pub use pill_core::error::BuildError;`
- `pub use pill_core::error::CSharpError;`
- `pub use pill_core::error::ConfigError;`
- `pub use pill_core::error::EngineMessage;`
- `pub use pill_core::error::EngineReportHandler;`
- `pub use pill_core::error::HostError;`
- `pub use pill_core::error::LibraryError;`
- `pub use pill_core::error::MessageRenderer;`
- `pub use pill_core::error::ModuleError;`
- `pub use pill_core::error::PlainMessageRenderer;`
- `pub use pill_core::error::SemanticRole;`
- `pub use pill_core::error::StyledDiagnosticProxy;`
- `pub use pill_core::error::TerminalMessageRenderer;`
- `pub use pill_core::error::WatcherError;`
- `pub use pill_csharp_bridge::CSharpModuleConfig;`
- `pub use pill_player::FrameDriver;`
- `pub use asset_browser::standalone_file_name;`
- [`pub use asset_browser::standalone_types;`](asset_browser/fn.standalone_types.md#rustdoc-item-4812)
- [`pub use asset_browser::AssetEntry;`](asset_browser/struct.AssetEntry.md#rustdoc-item-4194)
- [`pub use asset_browser::StandaloneType;`](asset_browser/struct.StandaloneType.md#rustdoc-item-4199)
- [`pub use hot_patch::PatchGeneration;`](hot_patch/generations/struct.PatchGeneration.md#rustdoc-item-2085)
- [`pub use runtime::run_frame;`](runtime/fn.run_frame.md#rustdoc-item-4178)
- [`pub use runtime::setup;`](runtime/fn.setup.md#rustdoc-item-4373)
- [`pub use runtime::DevHost;`](runtime/struct.DevHost.md#rustdoc-item-4179)
- `pub use pill_engine::EngineError;`
- `pub use pill_player::RendererWindow;`
- `pub use pill_player::RenderingError;`
- `pub use pill_renderer_api::RenderViewport;`
- `pub use pill_renderer_api::RendererError;`
- [`pub use runtime::attach_renderer;`](runtime/fn.attach_renderer.md#rustdoc-item-4384)
- [`pub use runtime::setup_rendering;`](runtime/fn.setup_rendering.md#rustdoc-item-4375)
- [`pub use runtime::RenderingHost;`](runtime/struct.RenderingHost.md#rustdoc-item-4187)
