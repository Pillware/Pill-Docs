# `pill_standalone`

## Summary

`pill_standalone` is Pill's desktop frontend: one executable that runs a project headless or in a window, in Development or Shipping mode. It owns the process - the main loop, the window, logging and the one final error report - and contains no project code and no graphics code of its own.

Why any of that lives in a separate executable is covered in [Frontends](frontends.md). This document is about what this one does.

## At a glance

| Property | Value                                                  |
| -------- | ------------------------------------------------------ |
| Runs on  | The desktop                                            |
| Modes    | Development or Shipping, exactly one per build         |
| Window   | Headless, or windowed through `winit`                  |
| Owns     | the main loop, the window, telemetry, the error report |
| Contains | no project code, no GPU code                           |
| Source   | `modules/frontends/pill_standalone/`                   |

## What can it run?

The mode is chosen at build time, and it decides what sits behind `FrameDriver`.

| Mode            | Built with                                      | What runs behind the loop                                      |
| --------------- | ----------------------------------------------- | -------------------------------------------------------------- |
| **Development** | `cargo run --package pill_standalone` (default) | The development host: builds, loads, watches, reloads, patches |
| **Shipping**    | `devops/ci_cd/build_shipping.py`                | The player, running the project the shipping bundle links in   |

Development also compiles C# projects in-process and applies live per-function hot patches. Shipping does neither, and does not even compile the development host.

## What happens before the first main loop iteration?

Five steps, in this order, and the order is the design.

1. Install the report handler, so anything that fails afterwards can be reported.
2. Bring up telemetry. A file lane is added when `ECS_LOG_DIR` names a directory, and a telemetry failure only warns - it must never stop the project from running.
3. Resolve the project. Development reads `PROJECT_PATH` and the project's `project_settings.yaml`; Shipping asks the generated bundle, which already knows the project and its extensions.
4. Run the loop.
5. Convert the one failure the run ended with into one formatted report, after logging it so it appears inside whatever was active at the time.

> **Example:** in Development mode the host compiles the project on this startup, which takes tens of seconds the first time. That is why the window is not created yet: a window created first would show an empty surface for the whole build.

## How does a headless run work?

It runs one update after another until the process is killed.

There is no window, so there is no input, no resize and no redraw request - the loop simply calls `run_frame` again. The frame statistics (`123 FPS | 4567 entities`) are logged by the runtime itself every few seconds, not by the frontend. A headless driver's update cannot fail, so this loop has no way out on its own.

## How does a windowed run start?

Four steps on the first window event, chosen because each earlier step would otherwise be visible.

1. **Set the host up**, before any window exists - the first development launch compiles the project.
2. **Create the window hidden.** `winit` offers no way to set a client-area background colour, so a window revealed too early shows the operating system's white default.
3. **Attach the renderer** to that window, with the project already running.
4. **Present one update while still hidden, then reveal the window.** It opens showing a real picture.

After that, every window event is translated into the engine's own input vocabulary and handed to the driver: keys and mouse buttons, raw mouse motion, resizes. A redraw request runs one update, plays any gamepad vibration the project asked for, and asks for the next redraw; the runtime logs the frame statistics itself every few seconds, just like in a headless run.

## What are the development-only extras?

Two test frontends live in the same executable, both switched on by an environment variable and compiled only in Development mode.

- **A second window** (`PILL_SECOND_VIEW=1`) draws the same world through a second camera as surface 1. `PILL_SECOND_VIEW_SECONDS` closes it after a while.
- **A picking probe** (`PILL_PICK_TEST=1`) waits for the scene to settle, then picks through the renderer and reports what it found.

## What happens when something fails?

The failure is reported where it happens, and returned afterwards.

Reporting at the site matters because teardown unmaps the module DLLs: a fault inside that teardown would end the process before a report printed later could reach the console. So the loop logs the full cause chain first, keeps a copy, and only then tears down. The teardown itself is bracketed by two lines - `Shutting down`, then `Shutdown complete` - so a crash during unload leaves the first line and no second one.

The run can end with one of three things: a host failure, a renderer failure, or a window failure. All three arrive as one type, transparent through every layer, so the message the user sees is the original cause and not a summary of it.

## What are its limits?

- A headless run never exits on its own, and it has no input.
- Shipping mode never reloads or patches anything; that is a property of the build, not a switch.
- A build in a Cargo release profile cannot be Development mode: compiling it is refused, because Development mode needs the engine as shared DLLs and the release profile links everything into one image.
- It draws nothing itself. The renderer is attached by the host or the player and lives in its own module.
- It is not the editor. `pill_editor` has its own loop, its own windows and its own overlay.

## Where is it configured?

**Mode and features** - `modules/frontends/pill_standalone/Cargo.toml`: `development` and `shipping` (exactly one), plus `hot_patch`, `rendering`, `profiling`, `profiling-fine`, `metrics` and `dev-logs`.

**Refusals and staging** - `modules/frontends/pill_standalone/build.rs`: refuses `development` in any Cargo release profile, and copies the toolchain's `std` DLL beside the executable, which a development build imports at load time. The copy is made only on Windows, where the loader searches the executable's folder. On Linux the build script copies nothing, and the loader has to find `libstd-*.so` another way, for example through `LD_LIBRARY_PATH`.

**Environment**

| Variable                   | Effect                                       |
| -------------------------- | -------------------------------------------- |
| `PROJECT_PATH`             | The project Development mode builds and runs |
| `ECS_LOG_DIR`              | Adds a file lane to telemetry                |
| `PILL_SECOND_VIEW`         | Opens the second window (Development only)   |
| `PILL_SECOND_VIEW_SECONDS` | Closes it after that many seconds            |
| `PILL_PICK_TEST`           | Runs the picking probe (Development only)    |

**Commands**

```powershell
cd modules
$env:PROJECT_PATH = "../examples/local/project_rs"
cargo run --package pill_standalone                        # Development, headless
cargo run --package pill_standalone --features rendering   # Development, windowed
```
```cmd
cd modules
set PROJECT_PATH=../examples/local/project_rs
REM Development, headless
cargo run --package pill_standalone
REM Development, windowed
cargo run --package pill_standalone --features rendering
```
```bash
cd modules
export PROJECT_PATH="../examples/local/project_rs"
cargo run --package pill_standalone                        # Development, headless
cargo run --package pill_standalone --features rendering   # Development, windowed
```

A Shipping build comes from `python devops/ci_cd/build_shipping.py`; see [Build configurations](../../other/build_configurations.md). The host itself is described in [Hosting](../hosting/hosting.md).

## Why does a shipping build name the package?

Because cargo unions the features requested for a package across one invocation. A `--workspace` build would let `pill_editor`'s request for the development host re-enable `development` here, and a shipped binary would compile code it must not contain.

> **Example:** a shipped executable is built with
> `cargo build --package pill_standalone --no-default-features --features shipping`,
> normally through `devops/ci_cd/build_shipping.py`, which also generates the bundle first.

## Why is the project bundle a path under `build/`?

The bundle names the project and its modules, so it differs per build - but cargo needs a fixed path before any build script runs. `build/pill_shipping_bundle` is that fixed path; only its contents change, because one shipping executable is built at a time.

The directory is committed as a stub that refuses to compile: a fresh clone resolves, and a shipping build cannot silently link another project's generation.

> **Example:** generate the bundle, build, then put the stub back:
>
> 1. `python devops/tools/generate_shipping_bundle.py <project>`
> 2. build the shipping executable
> 3. `python devops/tools/generate_shipping_bundle.py --restore-stub`
>
> Until step 3 the stub shows up as modified in `git status`. The gate runs the restore itself after its shipping step.
