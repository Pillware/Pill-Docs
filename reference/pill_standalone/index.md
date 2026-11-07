<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-310"></a>

# pill_standalone API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Standalone binary: the engine's desktop frontend, headless or windowed.

## Responsibilities

- Install the engine report handler and the shared telemetry stack.
- Select what to run - the development host (`development`) or the linked project
  (`shipping`) - and run it through the windowed or headless loop, whichever
  this build compiled.
- Convert the run's failure into one styled miette report at the single
  reporting boundary.

## Design

This binary owns its event loop and, in a windowed build, its window. What
runs inside the loop is either `pill_development_host`'s development host
or `pill_player` running the generated shipping bundle; both are driven
through `pill_player::FrameDriver`. A shipping build does not depend on
`pill_development_host` at all, so development code cannot reach a shipped
binary. There is no GPU code here: the runtime attaches the renderer, and
the renderer lives in its own crate.

## Module contents

### Modules
- [`error`](error/index.md#rustdoc-item-169) — The standalone frontend's errors.
- [`posture`](posture/index.md#rustdoc-item-180) — What this binary runs: the development host, or a shipped project.
- [`windowed_standalone`](windowed_standalone/index.md#rustdoc-item-184) — The windowed run loop and its `winit` application.

### Functions
- [`init_telemetry`](fn.init_telemetry.md#rustdoc-item-306) — Installs the shared telemetry stack that the rest of the run logs through.
- [`main`](fn.main.md#rustdoc-item-308) — Installs the report handler, runs the project, and turns a failure into a
