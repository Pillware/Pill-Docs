# Hosting

## Summary

Hosting is the part of Pill that runs the project. The **player** owns the engine and runs every update, in every mode. In development mode, the **development host** wraps the player and adds building, loading and hot reloading of modules.

The player has its own document: [`pill_player`](pill_player.md). This one covers how the two parts fit together.

## At a glance

| Part             | Crate                   | Exists in                  | Job                                                        |
| ---------------- | ----------------------- | -------------------------- | ---------------------------------------------------------- |
| Player           | `pill_player`           | Every executable           | Owns the engine, runs one update, attaches the renderer    |
| Development host | `pill_development_host` | Development mode only      | Builds, loads and watches modules, hot reloads and patches |
| Patch scanner    | `pill_hot_scan`         | The host and build scripts | Reads source code to decide whether an edit can be patched |

```
   frontend
      │  FrameDriver
      ▼
┌─────────────────────────────────────────┐
│ development host  (development mode)    │  builds, loads, reloads
│  ┌───────────────────────────────────┐  │
│  │ player   (every mode)             │  │  owns the engine,
│  │   engine: world, ECS systems, …   │  │  runs every update
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

In shipping mode, the outer box is gone and the frontend talks to the player directly.

## Why are the player and the host separate?

The split guarantees two things at once.

**A shipped project behaves exactly as it did during development.** Both modes run the project through the same player code. Nothing about running the project is rewritten for shipping.

**Development tooling can never ship.** Everything needed only while working on a project lives in the host: compiling code, watching files, loading DLLs, C# tooling. A shipping build doesn't compile the host at all, so none of it can end up in the shipped executable.

Without the split, shipping builds would either carry the development tooling or run the project through different code, with the risk of behaving differently.

## What does the player do?

The player owns the engine and runs the project one update at a time. In code it lives in `pill_player`, and its two main types are `Runtime` (headless) and `RenderingRuntime` (with a renderer).

Each update, it runs the project's ECS systems, applies the changes they queued (such as spawning or removing entities), reports any failure, and records how long the update took.

It also:

- **starts a statically linked project**, which is how shipping and browser builds begin. The project describes itself through a `StaticProject`, listing itself and its extensions.
- **attaches the renderer to a window.** The window arrives as plain handles, so the player never depends on a window library.
- **sets up logging** for the whole process.
- **defines `FrameDriver`**, the interface every frontend's main loop is written against (see [Frontends](../frontends/frontends.md)).

Because the player is linked into every executable, it must stay free of anything a shipped project doesn't need. It never loads DLLs, watches files, builds code, hosts .NET, or uses `winit` or YAML.

## What does the development host do?

The development host turns a project's source code into running DLLs, and keeps them up to date while the project runs.

It comes in two forms:

- **`DevHost`** wraps the player for headless runs.
- **`RenderingHost`** wraps a `DevHost` and adds the renderer, which it also loads as a reloadable module, and its window.

### What happens when the host starts?

When the host starts, it builds and loads everything the project needs, then starts watching for changes.

> **Example:** you run `pill_standalone` with `PROJECT_PATH` set to `examples/my_project`. The host:
>
> 1. reads `project_settings.yaml` to find the project's extensions and renderer
> 2. generates a small wrapper crate for the project and for each extension inside the engine's workspace (why this matters is explained in [How is the engine linked?](modules_linking_in_pill.md))
> 3. builds each of them into a DLL, starting with the renderer's data crate
> 4. loads the DLLs, and each one registers its components, resources and ECS systems with the engine
> 5. starts watching the source files, the asset folder and, in windowed runs, the shaders

### What happens every update?

Every update, the host first applies any pending changes, then lets the player run the project.

1. **Reload phase.** The host applies everything that finished since the last update: rebuilt extensions and project, hot patches, a rebuilt C# assembly and edited assets.
2. **Renderer reload** (windowed only). If the renderer's data changed, the renderer module reloads now. It comes after the data it draws has reloaded, and before any ECS system reads that data.
3. **Update phase.** The wrapped player runs the project, exactly as it would in shipping mode.

Doing all reloading at the start of an update means no ECS system ever runs halfway through a swap.

> **Example:** you change a function in `examples/my_project` and save.
>
> 1. The file watcher notices the change.
> 2. The host decides how to apply it. A change to a function body marked `#[pill_hot]` can be a **hot patch**. Anything bigger needs a **hot reload** of the project.
> 3. For a hot reload, the host rebuilds the project's DLL.
> 4. At the start of the next update, the host converts any changed components to their new layout, unloads the old DLL and loads the new one.
> 5. The player runs the update with the new code. The entities on screen are the same as before.

### What happens when a build fails?

If a build fails, the host keeps running the old version of that module and reports the error. Your project doesn't stop, and the next successful build replaces the old version.

## How does the host decide whether an edit can be patched?

A hot patch replaces a single function, which is much faster than reloading a whole module. It is only safe when nothing changed except the inside of a function body.

To check this, the host compares the old and new source code with a small scanner, `pill_hot_scan`. The scanner finds where each function starts and ends and strips the bodies, so a body-only edit can be told apart from any other change.

Each module's build script uses the same scanner to record where its patchable functions are. Because the host and the build scripts share one implementation, they always agree on where a function starts and what its signature says.

## How do C# projects fit in?

A C# project runs through the same player as a Rust one. The C# bridge, `pill_csharp_bridge`, plugs into the player as the project's backend: instead of calling into a Rust DLL, the player calls into .NET.

The host adds the C# tooling on top: it generates the C# versions of the engine's components and compiles C# changes in-process for fast reloads.

## Exceptions and limitations

- **The host and every module must be built the same way.** The host builds modules through generated wrapper crates and passes its own feature settings along, so they all match. See [How is the engine linked?](modules_linking_in_pill.md).
- **The editor runs a variant of the host.** In the editor, the host also loads extensions' editor crates (named `<extension>_editor`), which a normal run never builds.
- **The browser has no host.** A browser build always runs the player directly, like shipping mode.

## Configuration

**Running the host:** the host takes the project from the `PROJECT_PATH` environment variable, and the project's extensions and renderer from its `project_settings.yaml`. There is no other host configuration.

```yaml
# project_settings.yaml
modules:
  - "pill_spline"
  - "pill_audio"
renderer: pill_master_renderer   # the default; "none" for no renderer
```

**Code:**

- `modules/hosting/pill_player/src/lib.rs`: what the player is responsible for, and what it must never do.
- `modules/hosting/pill_player/src/runtime.rs`: `Runtime`, one update, `setup`, and the `FrameDriver` interface.
- `modules/hosting/pill_player/src/static_project.rs`: how a statically linked project describes itself.
- `modules/hosting/pill_development_host/src/runtime.rs`: `DevHost`, `RenderingHost`, `setup` and the per-update phases.
- `modules/hosting/pill_development_host/src/reload.rs`: how a reload is applied, and what happens when it fails.
- `modules/hosting/pill_development_host/src/hot_patch/`: hot patching.
- `modules/hosting/pill_development_host/src/config.rs`: reading the project and its settings.
- `modules/hosting/pill_hot_scan/`: the source scanner.
