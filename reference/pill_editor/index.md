<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1598"></a>

# pill_editor API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Native editor executable: the Pill engine's editor frontend.

## Responsibilities

- Install the engine report handler and the shared telemetry stack.
- Own the `winit` event loop, the main window, and the editor's own GPU
  device that draws the editor's UI.
- Host the project and its extensions, including the reloadable editor
  shell module, through `pill_development_host`.
- Convert the final error into one styled miette report at the single
  reporting boundary.

## Design

Nothing in this executable can change while it runs: the shared platform
layer, the loop and the UI presentation never reload. Everything that
should reload - panels, their commands and their state - lives in the
shell module this binary hosts. A change here needs a restart; a change
to the shell module hot-patches or reloads.

## Module contents

### Modules
- [`clipboard`](clipboard/index.md#rustdoc-item-1) — Reads and writes the OS clipboard for the runner's copy, cut and paste.
- [`drag_out`](drag_out/index.md#rustdoc-item-18) — Hands one project asset to the OS as a file drag.
- [`frontend`](frontend/index.md#rustdoc-item-342) — The editor's errors, with their stable diagnostic codes.
- [`overlay`](overlay/index.md#rustdoc-item-382) — The overlay drawn above the editor window: a DirectComposition visual on
- [`runner`](runner/index.md#rustdoc-item-483) — The windows, the GPU device and the frame loop.
- [`test_channel`](test_channel/index.md#rustdoc-item-1560) — The devops suite's scripted input channel.

### Functions
- [`init_telemetry`](fn.init_telemetry.md#rustdoc-item-1594) — Installs the shared telemetry stack before the run loop starts.
- [`main`](fn.main.md#rustdoc-item-1596) — Runs the editor and reports its final error once.
