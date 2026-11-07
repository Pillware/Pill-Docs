<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-382"></a>

# Module `pill_editor::overlay`

Visibility: `crate` · Source: `editor\pill_editor\src\overlay.rs:1`

The overlay drawn above the editor window: a DirectComposition visual on
Windows, the wgpu surface it presents, and the egui-wgpu renderer that
fills it.
The editor's composition overlay: the UI layer drawn above the scene's
own child window.

## Responsibilities

- [`OverlaySurface`]: the DirectComposition target and visual over the
  editor window, the `wgpu` surface drawn through it, the size that keeps
  the swapchain matching the window, and the gate that skips empty frames.

## Design

A flip-model swapchain on the window's `HWND` cannot be transparent over
the scene's child window. A DirectComposition visual on a `topmost`
target can: the desktop compositor draws it above every child surface, so
each overlay pixel blends with the scene through its own alpha. `wgpu`
draws into the overlay through `SurfaceTargetUnsafe::CompositionVisual`.
Its DX12 backend implements that by setting the swapchain as the visual's
content, so the tree is committed after every configure and the visual
outlives the surface.

The content is the shell's `EguiShellFrame`. `egui-wgpu`'s renderer draws
it on the editor's own device with premultiplied alpha (each colour
already multiplied by its alpha), which is the form the compositor
expects.

Only the editor binary creates the DirectComposition device, through the
`windows` crate. A shared dylib must not: every hot patch of it would
otherwise import `dcomp.dll`.

## Module contents

### Modules
- [`composition`](composition/index.md#rustdoc-item-345) — The DirectComposition half of the overlay, in the Windows API's terms.

### Structs
- [`OverlaySurface`](struct.OverlaySurface.md#rustdoc-item-438) — The composition overlay over the editor window.

### Enums
- [`OverlayMode`](enum.OverlayMode.md#rustdoc-item-388) — Where the UI's pixels go.

### Functions
- [`hwnd_of`](fn.hwnd_of.md#rustdoc-item-480) — The window's `HWND`, as the composition target needs it. Returns `None`

### Type aliases
- [`OverlayError`](type.OverlayError.md#rustdoc-item-385) — Why an overlay could not be created. The executable logs it, falls back to

### Constants
- [`WINDOW_CLEAR`](constant.WINDOW_CLEAR.md#rustdoc-item-383) — The colour the window posture clears to: a dark neutral, so an uncovered
