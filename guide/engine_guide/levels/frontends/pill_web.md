# `pill_web`

## Summary

`pill_web` is Pill's browser frontend: it runs a shipping-mode project inside a page, drawn into a canvas with WebGPU. To the rest of Pill it is an ordinary frontend - it receives the page's events and asks the player to run one update at a time.

Why frontends exist at all is covered in [Frontends](frontends.md). This document is about the browser one.

## At a glance

| Property       | Value                                                                 |
| -------------- | --------------------------------------------------------------------- |
| Runs on        | The browser (WebAssembly and WebGPU)                                  |
| Modes          | Shipping mode only                                                    |
| Window         | A canvas on the page                                                  |
| Contains       | no development host, no hot reload, no C# runtime, no gamepad polling |
| On the desktop | compiles to nothing - its dependencies are wasm-only                  |
| Build output   | `<project>/build/web`: the page, the `pkg/` module and the asset pack |
| Source         | `modules/frontends/pill_web/`                                         |

## What does the browser change?

The browser frontend does the same job as a desktop shipping run, but the page owns the main loop, so every step that would block on the desktop becomes asynchronous.

| Concern         | Desktop shipping run        | Browser run                                                      |
| --------------- | --------------------------- | ---------------------------------------------------------------- |
| Main loop       | the program runs it         | handed to the page (`spawn_app`); one update per animation frame |
| Renderer attach | done before the loop starts | awaited in the background; updates begin when it resolves        |
| Assets          | packed with the executable  | downloaded beside the page before the project starts             |

Nothing else changes: the same `FrameDriver` interface runs the project, and the same player sits behind it.

> **Example:** you open the project's page.
>
> 1. the page loads the wasm program and calls its start function
> 2. telemetry and readable panics come up
> 3. the asset pack is downloaded beside the page and mounted, if the build has one
> 4. the project is set up as a static project, with no development host
> 5. a `winit` window is put on the canvas and focused
> 6. the renderer attaches, and updates begin

## How does one update reach the project?

Each browser animation frame runs exactly one update, and only once the renderer is attached.

The event loop is handed to the browser once, because a browser only runs the program between its own tasks - a program that tried to run a loop of its own would never yield to the page. Afterwards the loop lives off redraw requests: an update runs, then the frontend asks for the next animation frame.

The canvas window is created on the first resume. Two details exist because a canvas is not a desktop window:

- **The canvas is focused at start**, through raw JavaScript with `preventScroll`, so keys reach the project without a click - and so an in-flight smooth scroll is not cancelled by focusing.
- **The renderer may attach before the window has measured the canvas.** WebGPU refuses a zero-sized surface, so the attach uses the canvas's laid-out size, and the measured size is applied once the attach resolves.

Input is translated through `pill_input` and handed over with `push_input`, exactly as on the desktop. Input that arrives before the renderer is attached has no project to go to and is dropped. A failed update is reported once and stops asking for more, so the page does not repeat the same error every animation frame.

## Where do the assets come from?

Assets arrive one of two ways, decided by the project the browser bundle links.

| The project has     | Then                                                                                                |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| an `asset_pack_url` | the pack is downloaded beside the page, mounted, and passed to setup before the project initializes |
| none                | the project carries its assets inside the wasm program and is set up directly                       |

Downloading matters because a browser fetches the whole program before running any of it: a project's assets can be large, so a browser build packs them beside the page instead of embedding them. The pack is a single indexed blob, so it is fetched whole - there is nothing to stream before it is parsed.

The file is `assets.pillpack`, which `devops/tools/build_web.py` copies beside `index.html`; the bundle names it in `StaticProject::asset_pack_url`, the field this frontend fetches.

> **Example:** `devops/tests/test_web_smoke.py` fails if the pack was not downloaded and mounted, which is how the suite proves the browser build kept the project's assets out of the program.

## Why is there no hot reload or C# in the browser?

Both are development-mode features, and a browser build is a shipping-mode build: the project, its extensions and the renderer are all statically linked into one wasm program.

There is no development host in the browser, so nothing builds, loads or reloads modules - changing project code means rebuilding the page and reloading it. And the C# side of Pill is a native .NET runtime hosting the bridge; a browser build links Rust only.

## What are its limits?

- Shipping mode only: no hot reload, no hot patch, no in-process C# build.
- Only window input is forwarded: gamepads are not polled and rumble is not played in the browser.
- WebGPU must be available in the browser.
- The first update waits for the program, the asset pack and the renderer attach.

## Where is it configured?

**Code** - `modules/frontends/pill_web/`:

- `lib.rs` - the game runner (`run`), the start-up it performs for the page (`start_project`: telemetry, asset pack, setup), and the canvas helpers.
- `Cargo.toml` - wasm-only dependencies.

On native targets the crate compiles to nothing: it is gated on `target_arch = "wasm32"` and its dependencies are wasm-only, so desktop builds are unaffected.

**Generated** - the crate compiled into the page's module is `build/pill_web_app`: a `cdylib` with a workspace of its own and a `#[wasm_bindgen(start)]` shim that calls `pill_web::run` with the bundle's static project. `wasm-pack` builds it into `pkg/`, and the page it runs in is `devops/tools/web/index.html`.

**Build** - `devops/tools/build_web.py` regenerates the bundle and that app crate through `devops/tools/generate_shipping_bundle.py --web`, builds them for `wasm32-unknown-unknown`, and leaves the page, `pkg/` and `assets.pillpack` in `<project>/build/web`.

```powershell
python devops/tools/build_web.py examples/local/master_renderer_test
# then serve <project>/build/web over HTTP and open the page
```
```cmd
python devops/tools/build_web.py examples/local/master_renderer_test
REM then serve <project>/build/web over HTTP and open the page
```
```bash
python devops/tools/build_web.py examples/local/master_renderer_test
# then serve <project>/build/web over HTTP and open the page
```

**Suites** - `devops/tests/test_web_smoke.py` builds a project with a `res` directory and asserts in a headless WebGPU browser: the asset pack was downloaded and mounted, the first frame presented with a camera, that updates keep running (the player's `FPS |` line), that no engine error, WebGPU validation error or page exception occurred, the canvas pixels (with Pillow installed) and that a key press without a click, a wheel turn and a mouse button each reach the project.

See also: [Frontends](frontends.md), [`pill_standalone`](pill_standalone.md), and [Build configurations](../../other/build_configurations.md).
