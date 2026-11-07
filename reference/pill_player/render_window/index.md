<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-135"></a>

# Module `pill_player::render_window`

Visibility: `crate` · Source: `hosting\pill_player\src\render_window.rs:1`

Attaching a renderer to a frontend's window, through its handles as data.
Attaching a renderer to a frontend's window.

## Responsibilities

- Define [`RendererWindow`](trait.RendererWindow.md#rustdoc-item-125), the trait a frontend's window type must
  implement: any window that hands out `raw-window-handle` 0.6 handles,
  such as a winit or tao window.
- Attach a renderer to such a window using its handles as plain data
  ([`attach_renderer_to_window`], or
  [`attach_renderer_to_window_async`] when the renderer is built by a
  future), and keep the window alive beside it.

## Design

The renderer never sees a window type, only [`RawWindowData`]. This keeps
a windowing crate out of the renderer, so every frontend attaches its own
window type the same way.

The handles do not keep the window alive. The window is therefore
returned with the renderer as an [`AttachedWindow`], and whoever stores
the two must drop the renderer before the window.

## Module contents

### Traits
- [`RendererWindow`](trait.RendererWindow.md#rustdoc-item-125) — A window the renderer can be attached to.

### Functions
- [`attach_renderer_to_window`](fn.attach_renderer_to_window.md#rustdoc-item-131) — Attaches a renderer to `window` through `attach_renderer`, and returns the
- [`attach_renderer_to_window_async`](fn.attach_renderer_to_window_async.md#rustdoc-item-133) — Attaches a renderer that is built asynchronously to `window`, like

### Type aliases
- [`AttachedWindow`](type.AttachedWindow.md#rustdoc-item-129) — A frontend window held for the lifetime of the renderer drawn on it.
