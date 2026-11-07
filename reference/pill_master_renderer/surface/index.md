<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2900"></a>

# Module `pill_master_renderer::surface`

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\surface.rs:1`

The window surface, its swapchain, and the lifecycle that keeps them live.
The window surface and the swapchain lifecycle it carries.

## Responsibilities

- Build the GPU bootstrap in the one order that works: instance, surface,
  adapter, device, queue, configuration ([`Surface::create`]).
- Keep the surface configured - at startup, on a resize, and on the
  recovery path a lost or outdated swapchain needs - in vsync unless the
  caller or `PILL_PRESENT_MODE` asked for another present mode.
- Hand out frames ([`Surface::acquire`]), and own the colour format every
  pipeline that renders to it declares.

## Design

[`Surface::create`] builds the surface, the device and the queue together,
because the adapter and the device are chosen for the surface they have to
present to. The type owns the state that belongs to the surface: the
swapchain, its configuration, and the format chosen from the surface's
capabilities. It takes the device as an argument wherever it needs one, so
a type named for the surface does not quietly become the device's owner.

Nothing here names a windowing crate. The surface is built from a
[`RawWindowData`], which carries the window's platform handles as plain
data, and the sizes that reach it are plain pixels. That is what lets any
winit frontend (the standalone host, the editor) attach this renderer.

## Module contents

### Structs
- [`Surface`](struct.Surface.md#rustdoc-item-1915) — A window's swapchain, its configuration, and the colour format its

### Functions
- [`alpha_mode_candidates`](fn.alpha_mode_candidates.md#rustdoc-item-2954) — The alpha modes to try, in order: the requested one, then `Opaque`.
- [`apply_and_probe`](fn.apply_and_probe.md#rustdoc-item-2955) — Configures the surface and acquires a frame from it.
- [`configuration_attempt_failure`](fn.configuration_attempt_failure.md#rustdoc-item-2956) — Why one configuration attempt failed, or `None` when it succeeded: a
- [`configure`](fn.configure.md#rustdoc-item-2910) — Reconfigures the surface during a frame (on a resize, or for a lost
- [`configure_first`](fn.configure_first.md#rustdoc-item-2951) — Configures the surface for the first time, giving up the compositing alpha
- [`pick_alpha_mode`](fn.pick_alpha_mode.md#rustdoc-item-2952) — The alpha mode to ask a new surface for.
- [`pick_color_format`](fn.pick_color_format.md#rustdoc-item-2950) — The configured colour format to ask a surface for.
- [`preferred_present_mode`](fn.preferred_present_mode.md#rustdoc-item-2949) — The present mode a surface asking for `present` gets: that mode when the
- [`requested_present_mode`](fn.requested_present_mode.md#rustdoc-item-2947) — The present mode `PILL_PRESENT_MODE` asks for, when the surface supports

### Constants
- [`PRESENT_MODE_VARIABLE`](constant.PRESENT_MODE_VARIABLE.md#rustdoc-item-2899) — Environment variable that asks for a present mode other than vsync.
