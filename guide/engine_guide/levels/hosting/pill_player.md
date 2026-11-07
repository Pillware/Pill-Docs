# `pill_player`

## Summary

`pill_player` is the part of Pill that runs a project: it owns the engine, runs one update at a time, and draws the result when a window is attached. Every executable links it - a development run reaches it through the host, a shipping or browser run uses it directly - so the project runs the same code in every mode.

Why that job is split between a player and a host is covered in [Hosting](hosting.md). This document is about the player itself.

## At a glance

| Property    | Value                                                                |
| ----------- | -------------------------------------------------------------------- |
| Runs in     | Every executable: development, shipping, browser and editor          |
| Owns        | the engine, one update, the renderer attached to a window, telemetry |
| Main types  | `Runtime` (headless), `RenderingRuntime` (windowed), `FrameDriver`   |
| Knows about | statically linked projects and modules                               |
| Never does  | build, load or watch modules, host .NET, or link a window library    |
| Source      | `modules/hosting/pill_player/`                                       |

```
   frontend: owns the main loop, the window, the input
        |
        |  FrameDriver
        v
   pill_player
     ├─ Runtime           the engine, one update
     └─ RenderingRuntime  the same, plus a renderer attached to a window
        |
        v
   the project and its modules, linked into the executable
```

## Why does Pill need a player separate from the host?

So a shipped project runs exactly the update code it ran during development, and so development tooling cannot reach a shipped executable.

Both modes run the project through the player. Development reaches it through the development host, which wraps one player and does its building, watching and reloading around it; shipping and the browser call the player directly. There is no second update implementation that could drift.

The reverse direction matters too. Everything a shipped project does not need stays out of this crate: there is no loader, no file watcher, no build runner, no .NET hosting and no window library in it. A shipping build never compiles the host, so none of that can appear in a shipped executable.

> **Example:** you run the same project in development and then in a shipping build. Both call the same `Runtime::run_frame_with`, so the ECS systems run in the same order, the same failures are reported the same way, and the same `N FPS | M entities` line is logged.

## What does the player own?

The player owns exactly what a project needs at runtime, and nothing that helps build it.

`Runtime` is the headless core. It holds the engine, the guard an external project backend returned, the frame counters that drive the statistics and the error report, and - in a windowed build - the renderer the bundle linked. The engine is boxed on purpose: the development host hands loaded modules a raw pointer to it, and that pointer must stay valid when the container moves.

`RenderingRuntime` is a `Runtime` plus an `AttachedRenderer`. Its fields are declared engine, then renderer backend, then window, because field order is drop order: the engine goes first, and the backend's surface goes before the window it was built on.

Around those two types, the crate holds:

- **The static-link contract** - how a linked project describes itself, without the player ever naming the project crate.
- **Owner attribution** - which subject each module's ECS systems belong to, so development and shipping attribute them identically.
- **Window attachment** - a renderer is attached through the window's raw handles as data, so no window library enters the player or the renderer.
- **Telemetry** - the one logging stack, the project's `logging:` settings, and the one failure report.
- **A start-up machine report** - the hardware the project is about to run on, logged once when the player is created.

## What happens in one update?

`Runtime::run_frame_with` runs one scheduler pass, reports what failed, and accounts for the time.

1. The engine runs every ECS system, then the deferred commands they queued.
2. Failures are reported: deferred command failures as one batch, and each ECS system failure with the name of the ECS system that raised it.
3. The caller's `after_systems` hook runs, then the frame statistics are updated.

Identical failures are collapsed: one line, then at most one line per second carrying `suppressed=N`, so a broken ECS system cannot flood the console at update rate.

The frame statistics are logged here, not by a frontend, roughly every three seconds as `N FPS | M entities`. Every frontend relies on that one line; `frames_per_second()` exposes the same rate for a user interface that displays one.

> **Example:** an ECS system panics every update. The first line names the ECS system and its cause. For the next second the repeats are counted silently, then one line reports how many were suppressed. The project keeps running and drawing.

## What can a frontend rely on?

A frontend writes its loop against `FrameDriver`, so the same loop drives the headless player, the windowed player and the development host.

| Method                              | Required? | What it does                                            |
| ----------------------------------- | --------- | ------------------------------------------------------- |
| `run_frame`                         | yes       | runs one update                                         |
| `push_input`                        | yes       | queues one input event for the next update              |
| `take_rumble_requests`              | yes       | returns what the last update asked the gamepads to play |
| `resize_surface`                    | yes       | forwards a physical resize of a surface                 |
| `set_surface_viewport`              | yes       | restricts drawing to a region of a surface              |
| `attach_surface` / `detach_surface` | no        | adds or removes an extra window as a surface            |
| `set_surface_ready`                 | no        | lets the frontend pace a surface                        |
| `set_surface_camera`                | no        | binds a camera to a surface                             |

Input and resize are required rather than defaulted for one reason: a driver that silently ignored them would drop every key, or keep drawing at an old size, with nothing in the log to say why. The defaulted methods are the ones a driver without a renderer can answer with a no-op, and `attach_surface`'s default reports that this driver draws no window.

A headless `Runtime` cannot fail an update, so its `FrameDriver` error type is `Infallible`; a windowed one fails with a renderer error. A frontend loop therefore reports a windowed failure and keeps a headless run going until the process is stopped.

## How does a statically linked project start?

A shipping or browser executable carries its project as data, and the player turns that data into a running world in a fixed order.

`StaticProject` is that description. It names the project, its modules in load order, the renderer the binary linked, the asset pack, the logging settings, the debug-drawing default and an optional startup scene.

The order in `setup_with_asset_database` is the design:

1. **Create the player**, which logs the machine's start-up report and boxes the engine.
2. **Insert the debug-drawing and picking resources** every build expects, each only where it is missing.
3. **Apply the bundle's logging settings**, before anything logs on the project's behalf. A settings failure warns and is not fatal.
4. **Insert the asset database**, so a module or the project can load a `res` file during its own initialization.
5. **Register every module, then the project.** Modules run first because the project may name types a module defines, and a managed project needs every module's components registered before its assembly loads.
6. **Load the startup scene**, once the types it refers to exist.

`setup` is the same with the embedded pack handled for the caller: it parses and mounts the pack, then calls `setup_with_asset_database`.

The first failure ends setup. There is no previous generation to fall back to on this path - a half-registered world would be worse than stopping - so a module whose entry point reports a non-zero status, or a backend that fails to start, is reported and returned.

> **Example:** a shipping build of a project with a `res` directory. `setup` mounts the pack embedded in the executable, logs `mounted the embedded asset pack` and `[assets] database indexed from the embedded pack`, then registers the renderer's data module, the project's modules and the project. If a module's entry point returns `1`, the run ends with a failure naming that module: nothing has been drawn yet.

## How are modules and the project attributed to owners?

Every ECS system carries the owner of the subject that registered it, and the player computes that owner with the same functions the development host uses.

An owner is a plain `u64` wrapper in the engine: the project is `0`, the engine itself is `u64::MAX`, and extension `i` is `i + 1`. Registration marks the current owner with `begin_module_registration` and resets it to the project owner with `end_module_registration`; the project therefore registers unscoped, and everything it registers is attributed to the project.

The owner decides what a reload clears, which ECS systems a pause suspends, and how the editor's system list labels each one. Shipping never reloads anything, but the other two still apply, and a shipped project must attribute its ECS systems exactly as the development run did.

The renderer is attributed as if it were one more extension, after the last module. That single rule is what lets "reload only the renderer" mean the same thing whether the renderer was linked into the binary or loaded as a module.

## How does a window get a renderer?

The renderer is attached to the window's handles as data, so neither the player nor the renderer contract names a window library.

Any type that hands out `raw-window-handle` 0.6 window and display handles satisfies `RendererWindow` - `winit`'s windows, `tao`'s, and an `Arc` of either. The frontend passes its own window, and the player converts it to `RawWindowData` and keeps the window alive beside the renderer it was built for.

`AttachedRenderer` holds the backend, the window and the handles. Extra surfaces - a second window, an editor viewport - are kept in a map keyed by surface id, each with its own size, viewport and presentation flag, and each re-attached to a replacement backend the same way.

`attach_renderer` does two things a windowed run depends on:

1. It registers the linked renderer's `rendering` ECS system under the renderer owner, exactly as its module entry point would.
2. It builds the backend on the window and wraps both into a `RenderingRuntime`.

The attach is asynchronous because building a backend is: a native frontend blocks on it once, a browser frontend awaits it.

Each update of a windowed player then runs the engine, draws what the `rendering` ECS system left in the frame, and hands back the pick and preview results the GPU finished since the last update. A world without those resources drops the results rather than growing them.

A build that links no renderer still compiles the windowed path; attaching reports it by name and points at the `rendering` feature.

## Where does a project's assets come from?

A shipped project reads its assets from the pack it was built with, never from the machine it runs on.

`mount_asset_pack` parses the pack, indexes every entry into an `AssetDatabase` (by guid and by path, so a reference can find an asset that is not loaded yet), mounts the pack in the asset store, then restricts the store to packs. That last step is the point: a missing asset fails instead of silently falling back to a file that happened to be on disk during development.

A native shipping build embeds its pack in the executable, and `setup` mounts it before anything initializes.

A browser build cannot embed a pack, so its frontend downloads one and hands the resulting database to `setup_with_asset_database`. The player never fetches anything itself; the `asset_pack_url` field is data for the browser frontend, and the player ignores it.

> **Example:** a project loads `res/textures/ground.png` during a module's init. In a shipping build the file is already in the mounted pack, so the load succeeds on the first update. If the file was never packed, the load fails: there is no directory beside the executable to fall back to.

## How are logging and failures handled?

The player provides one logging stack and one failure format, so every build reports the same way.

`init_telemetry` installs the terminal lane, adds a rolling file lane when a directory is passed, and takes an optional in-process capture ring for the editor's console; `profiling` adds Tracy. Frontends call it before setting the project up.

The bundle's `logging:` settings travel as text (`StaticLogging`) and are read into `LoggingSettings`: a default level, a timestamp format, the source-location switch and per-target levels. `apply_logging_settings` applies them to the running process: the two switches take effect even with no stack installed, and the level and target filters are reloaded into both the terminal and the file lane.

`report_failure(context, error)` logs the full cause chain where the failure happened. Reporting at the site is deliberate: teardown can unmap module DLLs, so a report deferred past teardown might never reach the console.

> **Example:** a module's entry point returns a non-zero status during setup. The failure is logged with its context and cause chain, returned as a typed error, and the frontend turns it into the one formatted report the user sees - the original cause, not a summary of it.

## What does the player deliberately not do?

| It never...                       | Because                                                              |
| --------------------------------- | -------------------------------------------------------------------- |
| loads, watches or builds a module | that is the development host's job, and no shipped project does it   |
| hosts .NET                        | a managed project arrives as a `ProjectBackend` the bundle supplies  |
| links a window library            | a window reaches it as raw handles, so each frontend brings its own  |
| reads YAML or `project_settings`  | settings arrive as data, already read and validated by whoever built |
| names a renderer crate            | the renderer arrives as two function pointers in `StaticRenderer`    |
| reads a component registry        | each module's registries live in the `pill_engine` copy it links     |

The renderer entry is worth a second look. The player registers the renderer's ECS system and calls its attach function, but it does not depend on the renderer: `StaticRenderer` holds a registration function and an attach function, which the shipping bundle - the one crate that depends on the renderer - fills in.

The registry entry is the same idea. Component registries are collected per module image by `inventory`, so they live in the `pill_engine` copy linked into each module, not in the player.

## What are its limits?

- A headless update cannot fail, so a headless loop has no way to end on its own; it runs until the process is stopped.
- Setup is all-or-nothing: any module or project initialization failure ends the run, because there is no previous generation to roll back to.
- The renderer is registered when a window attaches, not during setup. A headless run never creates the `rendering` ECS system, even in a build that links a renderer.
- Applying the bundle's logging settings can fail only on a hand-edited bundle, and a failure warns rather than stops the project.
- Errors are rate-limited by signature: a repeated failure is counted, not printed every update.
- `after_systems` is a seam, not a feature: no current caller puts work there, because a project and its extensions run entirely through their registered ECS systems.

## Where is it configured?

**Code** - `modules/hosting/pill_player/src/`:

| File                | Holds                                                                        |
| ------------------- | ---------------------------------------------------------------------------- |
| `runtime.rs`        | `Runtime`, one update, `setup`, `FrameDriver`, `mount_asset_pack`            |
| `static_project.rs` | `StaticProject`, `StaticModule`, `StaticRenderer`, `ProjectBackend`          |
| `registration.rs`   | the owner every registering subject gets, and the scoped entry point         |
| `rendering.rs`      | `AttachedRenderer`, `RenderingRuntime`, `attach_renderer`, `setup_rendering` |
| `render_window.rs`  | `RendererWindow`, and attaching a backend to a window's handles              |
| `telemetry.rs`      | `init_telemetry`, `apply_logging_settings`, `report_failure`                 |
| `error.rs`          | `RenderingError`, the windowed boundary's composed error                     |
| `system_specs.rs`   | the start-up report of the machine the project runs on                       |

**Features** - `modules/hosting/pill_player/Cargo.toml`:

| Feature          | Adds                                                                |
| ---------------- | ------------------------------------------------------------------- |
| `rendering`      | the windowed player: attaching a renderer and drawing frames        |
| `profiling`      | engine profiling zones, routed to Tracy through the telemetry stack |
| `profiling-fine` | finer profiling zones, on top of `profiling`                        |
| `metrics`        | the update's numbers through the shared metrics recorder            |

**Tests** - the crate carries unit tests for the owner arithmetic, the frame hook, the asset-pack mount and the error composition:

```powershell
cd modules
cargo test --package pill_player
```
```cmd
cd modules
cargo test --package pill_player
```
```bash
cd modules
cargo test --package pill_player
```

Nothing about the player is configured by environment variables: the project path, the extension list and the logging settings are read by the host or the bundle and passed in as data.

See also: [Hosting](hosting.md), [Frontends](../frontends/frontends.md), [`pill_standalone`](../frontends/pill_standalone.md), [`pill_web`](../frontends/pill_web.md), and [How is the engine linked?](modules_linking_in_pill.md).
