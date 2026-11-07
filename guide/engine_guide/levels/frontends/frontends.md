# Frontends

## Summary

A frontend is the executable you start. It owns the window, the operating system's events and the main loop, and every update it asks the rest of Pill to run the project.

Pill has four frontends: `pill_standalone` for the desktop, `pill_web` for the browser, `pill_web_editor` for the browser editor and `pill_editor` for the desktop editor.

## At a glance

| Frontend          | Runs on | Modes                         | Window                   |
| ----------------- | ------- | ----------------------------- | ------------------------ |
| `pill_standalone` | Desktop | Development or shipping       | Headless or windowed     |
| `pill_web`        | Browser | Shipping only (no hot reload) | A canvas on the page     |
| `pill_web_editor` | Browser | Shipping only (no hot reload) | Two stacked canvases     |
| `pill_editor`     | Desktop | Development only              | The editor's own windows |

```
        frontend  (window, events, main loop)
            │
            │  every update: "run one update", "here is the input"
            ▼
   host (development mode)  or  player (shipping mode)
```

## Why does Pill have frontends?

Frontends keep everything platform-specific out of the engine.

A desktop window and a browser canvas need completely different main loops. On the desktop, the program runs its own loop and asks the operating system for events. In a browser, the page owns the loop and the program only gets control back between animation frames.

If the engine handled this itself, every part of it would need to know which platform it runs on. Instead, the engine and the player know nothing about windows or browsers. Each frontend handles its own platform and talks to the rest of Pill through one small interface.

## How does a frontend drive Pill?

A frontend talks to Pill only through an interface called `FrameDriver`. It asks the driver to do four things:

| Request                | What it does                                                      |
| ---------------------- | ----------------------------------------------------------------- |
| `run_frame`            | Run one update of the project.                                    |
| `push_input`           | Hand over a keyboard, mouse or gamepad event for the next update. |
| `take_rumble_requests` | Collect the gamepad vibrations the project asked for.             |
| `attach_surface`       | Draw into an additional window.                                   |

The frontend doesn't care what is behind the interface. In development mode it is the development host (see [Hosting](../hosting/hosting.md)). In shipping mode it is the player directly. This is what lets one main loop serve both modes.

> **Example:** you run `pill_standalone` windowed and press the space key.
>
> 1. The operating system sends a key event to the frontend's window.
> 2. The frontend translates it into the engine's own input event and calls `push_input`.
> 3. The window asks for a redraw, so the frontend calls `run_frame`.
> 4. During that update, the project's ECS systems see the key press.
> 5. The renderer draws the result into the window.

## How does `pill_standalone` work?

`pill_standalone` is the desktop executable, and the only frontend that works in both modes.

It has two main loops: a headless one, and a windowed one built on the `winit` window library. Each loop is written once, against `FrameDriver`.

Only one file knows which mode the executable was built in. It picks what sits behind `FrameDriver`:

| Loop     | Development mode | Shipping mode      |
| -------- | ---------------- | ------------------ |
| Headless | `DevHost`        | `Runtime`          |
| Windowed | `RenderingHost`  | `RenderingRuntime` |

`DevHost` and `RenderingHost` are the development host's types. `Runtime` and `RenderingRuntime` are the player's: the crate is called `pill_player`, but its types kept their original names.

Before the loop starts, the frontend sets up logging. When the loop ends with an error, it prints that error once, as one formatted report.

`pill_standalone` contains no graphics code of its own. The renderer is attached by the player and lives in its own module. For the full description, see [`pill_standalone`](pill_standalone.md).

## How does `pill_web` work?

`pill_web` runs a project in a browser, on WebGPU. It works like shipping mode: the project is compiled in, and there is no hot reload and no C#.

Three things differ from the desktop, all because a browser only makes progress once control returns to it:

- **The main loop is handed to the browser** instead of being run by the program. Pill runs one update per browser animation frame.
- **The renderer is attached asynchronously.** Updates start only once it is ready.
- **The assets are downloaded** next to the page instead of being packed into the program, because the browser downloads the whole program before it starts.

The browser editor is its own frontend crate, `pill_web_editor`, the counterpart of `pill_editor` the way `pill_web` is the counterpart of `pill_standalone`. For the full description, see [`pill_web`](pill_web.md).

## Where does `pill_editor` fit?

`pill_editor` is a frontend too. It owns a `winit` main loop and drives the development host, so it exists only in development mode.

Unlike `pill_standalone`, it has graphics code of its own: it draws the editor's interface with its own GPU device, and places the project's views in child windows. It is covered in the editor documentation.

## How is input shared between frontends?

All three frontends use `winit`, so the translation from `winit` events to the engine's input events lives in one shared crate, `pill_input`.

The engine defines what an input event is, but it never sees `winit` itself. Each frontend receives its platform's events, translates them through `pill_input` and hands them over with `push_input`.

Gamepads are the exception. Only `pill_standalone` polls gamepads and plays the vibrations a project requests. The browser and the editor forward window input only.

## What can only `pill_standalone` do in development mode?

In development mode, `pill_standalone` offers two test helpers, switched on with environment variables:

- `PILL_SECOND_VIEW=1` opens a second window that the renderer also draws into.
- `PILL_PICK_TEST=1` picks what is under the window's centre and corner and outlines what the centre hit, to test picking.

## Configuration

**Building and running:**

```powershell
cd modules
$env:PROJECT_PATH = "../examples/local/project_rs"
cargo run --package pill_standalone                        # headless, development mode
cargo run --package pill_standalone --features rendering   # windowed, development mode
python ../devops/tools/build_web.py ../examples/local/master_renderer_test   # browser
```
```cmd
cd modules
set PROJECT_PATH=../examples/local/project_rs
REM headless, development mode
cargo run --package pill_standalone
REM windowed, development mode
cargo run --package pill_standalone --features rendering
REM browser
python ../devops/tools/build_web.py ../examples/local/master_renderer_test
```
```bash
cd modules
export PROJECT_PATH="../examples/local/project_rs"
cargo run --package pill_standalone                        # headless, development mode
cargo run --package pill_standalone --features rendering   # windowed, development mode
python ../devops/tools/build_web.py ../examples/local/master_renderer_test   # browser
```

Shipping mode is covered in [Build configurations](../../other/build_configurations.md).

**Code:**

- `modules/frontends/pill_standalone/src/main.rs`: start-up, logging and the final error report.
- `modules/frontends/pill_standalone/src/posture.rs`: a mode's implementation in code (its **posture**), and the one file that picks the driver.
- `modules/frontends/pill_standalone/src/headless_standalone.rs` and `windowed_standalone.rs`: the headless and the windowed main loop; a build compiles one of them.
- `modules/frontends/pill_web/src/lib.rs`: the browser frontend.
- `modules/frontends/pill_input/`: input translation and gamepads.
- `modules/frontends/editor/pill_editor/`: the editor frontend.
- `modules/hosting/pill_player/src/runtime.rs`: the `FrameDriver` interface.
