<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-0"></a>

# pill_web_editor API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The browser editor frontend: the egui editor in a page, with the scene on
one canvas and the shell's UI on a transparent canvas above it.

## Responsibilities

- [`run`]: put the scene on one canvas and the shell's tessellated draw
  lists on the canvas above it, and feed the shell's plain-data boundary
  (`EguiShellInput`/`EguiShellFrame`) the way the native executable does.
- Run one update per redraw, in this order: engine input, the queued command
  batches and scripted lines, the boundary input and snapshot, the world
  update (the shell's egui pass runs inside it), then the UI draw.
- [`scripted::editor_command`]: the scripted channel, the web counterpart of
  `PILL_EDITOR_TEST_COMMANDS`.

## Design

The browser counterpart of `pill_editor`, paired with `pill_web` the way
the native editor is paired with `pill_standalone`. `pill_web` runs the
start-up both browser frontends share (telemetry, the asset pack, project
setup) and holds the canvas helpers; this crate owns the editor's canvases,
its UI device and the order of one update. The shell crate registers itself
when the bundle's module init calls `register`, and its system runs inside
every engine update, so this crate only owns the browser-only half.

The scene canvas carries the project's own renderer. The UI canvas gets its
own `wgpu` device and `egui-wgpu` renderer, because egui's meshes are plain
data and the UI must not depend on a renderer that can reload or fail. The
UI canvas stays transparent where the dock drew nothing, so the scene shows
through the viewport holes; that is the browser counterpart of the native
composition overlay.

Wasm only: on native targets this crate compiles to nothing, like `pill_web`.
