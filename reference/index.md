<!-- This file is generated. Do not edit it directly. -->

# Rust API reference

Generated from nightly rustdoc JSON for the Pill Engine workspace.

## Crates

- [`pill_asset_format`](pill_asset_format/index.md) — The asset pack format's magic and version, shared by its writer and reader.
- [`pill_assets`](pill_assets/index.md) — Rule-based asset cooking, driven from build scripts.
- [`pill_audio`](pill_audio/index.md) — The audio extension: sound assets, playback components and the system that
- [`pill_core`](pill_core/index.md) — Shared core definitions of the Pill engine: the one library every DLL links.
- [`pill_core_macros`](pill_core_macros/index.md) — `#[engine_error]` - one error definition that produces both the plain and
- [`pill_csharp_bridge`](pill_csharp_bridge/index.md) — The Rust half of the C#/Rust ABI: runs a C# project inside the engine.
- [`pill_development_host`](pill_development_host/index.md) — The development host: it builds a project and its extensions as loadable
- [`pill_dummy_color`](pill_dummy_color/index.md) — An example extension with no ECS state. It provides a colour value type and
- [`pill_dummy_math`](pill_dummy_math/index.md) — Placeholder extension with no ECS state.
- [`pill_dummy_random`](pill_dummy_random/index.md) — Placeholder extension with no ECS state: a deterministic pseudo-random
- [`pill_editor`](pill_editor/index.md) — Native editor executable: the Pill engine's editor frontend.
- [`pill_editor_core`](pill_editor_core/index.md) — The egui editor's shared core: the UI libraries it re-exports, the dock
- [`pill_editor_shell_egui_editor`](pill_editor_shell_egui_editor/index.md) — The egui editor shell: the docked UI that reloads while the editor runs.
- [`pill_engine`](pill_engine/index.md) — The Pill engine, as projects and extensions see it.
- [`pill_engine_core`](pill_engine_core/index.md) — The engine core: an archetype-based Entity Component System and everything
- [`pill_engine_macros`](pill_engine_macros/index.md) — Procedural macros that remove the hand-written registration and FFI
- [`pill_hot_scan`](pill_hot_scan/index.md) — Minimal source scanning for patch classification and generation.
- [`pill_input`](pill_input/index.md) — Input translation shared by the frontends.
- [`pill_master_renderer`](pill_master_renderer/index.md) — The wgpu renderer: the GPU work that turns the world's renderer data into
- [`pill_master_renderer_data`](pill_master_renderer_data/index.md) — The master renderer's data: the assets, components and pipeline choice a
- [`pill_physics`](pill_physics/index.md) — Pill's rigid-body physics: a rapier world behind engine components.
- [`pill_player`](pill_player/index.md) — Runs a game: the engine, its frames, and the statically linked project.
- [`pill_project_ui`](pill_project_ui/index.md) — The game UI: an egui context a project draws through, painted by the
- [`pill_renderer_api`](pill_renderer_api/index.md) — The renderer contract: what the host hands any renderer and what every
- [`pill_spline`](pill_spline/index.md) — Extension providing spline paths.
- [`pill_standalone`](pill_standalone/index.md) — Standalone binary: the engine's desktop frontend, headless or windowed.
- [`pill_test`](pill_test/index.md) — Minimal extension module: one persistable component and one system.
- [`pill_ui_frame`](pill_ui_frame/index.md) — The plain draw data a UI producer builds and a renderer draws.
- [`pill_ui_kit`](pill_ui_kit/index.md) — The UI kit: converts a theme's tokens into egui's style and fonts, and
- [`pill_ui_theme`](pill_ui_theme/index.md) — The UI theme pipeline's plain data.
- [`pill_web`](pill_web/index.md) — The browser frontend: a statically linked project running in a page's canvas.
- [`pill_web_editor`](pill_web_editor/index.md) — The browser editor frontend: the egui editor in a page, with the scene on
