<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-137"></a>

# Module `pill_player::rendering`

Visibility: `crate` · Source: `hosting\pill_player\src\rendering.rs:1`

A renderer attached to a window, and the runtime that draws a statically
linked project on it.
A renderer attached to a window, and the runtime that draws a statically
linked project there.

## Responsibilities

- Keep a renderer backend and the window it draws on together, and drop the
  backend first ([`AttachedRenderer`](struct.AttachedRenderer.md#rustdoc-item-179)). Resize a surface, set its
  viewport, move rendering to another window, and draw the frame the
  `rendering` system filled in.
- Run a statically linked project in a window ([`RenderingRuntime`](struct.RenderingRuntime.md#rustdoc-item-237)):
  register the linked renderer, attach it, and draw every frame.

## Design

The development host has its own windowed host because its renderer is a
reloadable module, but it keeps the same [`AttachedRenderer`](struct.AttachedRenderer.md#rustdoc-item-179). The two
differ only in where a backend comes from, never in how it is kept or
drawn with.

## Module contents

### Structs
- [`AttachedRenderer`](struct.AttachedRenderer.md#rustdoc-item-179) — A renderer backend and the window it draws on.
- [`RenderingRuntime`](struct.RenderingRuntime.md#rustdoc-item-237) — A statically linked project running in a window.
- [`SurfaceRecord`](struct.SurfaceRecord.md#rustdoc-item-146) — The window one surface draws on, plus what is needed to attach it to

### Functions
- [`attach_linked_renderer`](fn.attach_linked_renderer.md#rustdoc-item-279) — Start building a backend on `window_data` from the linked renderer.
- [`attach_renderer`](fn.attach_renderer.md#rustdoc-item-276) — Register the linked renderer and attach it to `window`.
- [`setup_rendering`](fn.setup_rendering.md#rustdoc-item-277) — Start a statically linked project and attach its renderer to `window`.

### Constants
- [`NO_LINKED_RENDERER`](constant.NO_LINKED_RENDERER.md#rustdoc-item-136) — The message a windowed build reports when it has no renderer to attach.
