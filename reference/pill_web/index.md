<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-0"></a>

# pill_web API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The browser frontend: a statically linked project running in a page's canvas.

## Responsibilities

- Start a shipped project ([`run`]): readable panics, console logging, the
  project's asset pack downloaded from beside the page, and the project's
  modules registered through `pill_player`.
- Put a `winit` window on the page's canvas, attach the renderer to it
  asynchronously, and run one frame per browser animation frame.
- Feed the canvas's keyboard and mouse events to the engine. The canvas is
  focusable and focused at start, so keys reach the game without a click.
- Provide the browser editor frontend (`pill_web_editor`) with the start-up
  and canvas helpers it shares with this one.

## Design

The web counterpart of `pill_standalone`'s shipping posture, over the same
`pill_player` and [`FrameDriver`]. Three things differ, all because the
browser only does work when control returns to its event loop: the event
loop is handed over with `spawn_app` instead of being run here, the
renderer attach is a future spawned onto that loop instead of a call that
blocks, and the asset pack is downloaded from beside the page instead of
being embedded in the module, which the browser downloads whole. Frames
start once the attach resolves.

The browser editor frontend (`pill_web_editor`, under `modules/editor/`) is
a separate crate that builds on this one's start-up and canvas helpers.

The crate is empty on every other target: its dependencies are wasm-only,
so the workspace's native builds do not see it.
