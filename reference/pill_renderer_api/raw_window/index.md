<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-988"></a>

# Module `pill_renderer_api::raw_window`

Source: `rendering\pill_renderer_api\src\raw_window.rs:1`

A window's platform handles as plain data, for attaching a renderer to it.
A window's platform identity as plain data, so a renderer built separately
from the frontend that owns the window can create surfaces on it.

## Responsibilities

- Define [`RawWindowData`](struct.RawWindowData.md#rustdoc-item-195), a `#[repr(C)]` value holding the handles a GPU
  surface is created from.
- Build it from any window that implements `raw-window-handle` 0.6 (winit,
  tao), and convert it back to the `raw-window-handle` values wgpu takes.

## Design

The frontend owns the window and its event loop; the renderer only needs to
create a surface on it. Passing a window *type* across that boundary would
tie the renderer to the frontend's windowing crate. Each DLL would then
carry its own copy of that crate, and a renderer could not accept a window
from a frontend built on a different one. The handles themselves are
integers and pointers, so they cross as data. Every field is a fixed-width
integer, which keeps the layout stable between the artifacts that exchange
it.

The data does not keep the window alive. Whoever hands it out guarantees
the window outlives every surface created from it.

## Module contents

### Structs
- [`RawWindowData`](struct.RawWindowData.md#rustdoc-item-195) — A window's platform handles, as plain data.

### Enums
- [`RawWindowKind`](enum.RawWindowKind.md#rustdoc-item-904) — The platform whose handles a [`RawWindowData`] carries.

### Functions
- [`surface_failure_from_handle_error`](fn.surface_failure_from_handle_error.md#rustdoc-item-986) — Turns a failure to read a window's handles into a surface creation error.

## Re-exports

- `pub use raw_window_handle;`
