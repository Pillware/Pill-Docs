<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1293"></a>

# Module `pill_renderer_api::surface`

Source: `rendering\pill_renderer_api\src\surface.rs:1`

Several surfaces per renderer: identities, presentation, camera bindings.
The surfaces one renderer draws into: their identities, how each one
presents, and which camera draws into it.

## Responsibilities

- Name a renderer's surfaces ([`SurfaceId`](struct.SurfaceId.md#rustdoc-item-187)); the window a renderer is
  attached with is [`SurfaceId::PRIMARY`](struct.SurfaceId.md#rustdoc-item-185), every other one is attached
  through [`crate::PillRenderer::attach_surface`](../api/trait.PillRenderer.md#rustdoc-item-197).
- Describe how a surface presents ([`SurfaceOptions`](struct.SurfaceOptions.md#rustdoc-item-199), [`PresentPreference`](enum.PresentPreference.md#rustdoc-item-1110)).
- Bind a camera to a surface ([`CameraBinding`](enum.CameraBinding.md#rustdoc-item-966), the [`SurfaceCameras`](struct.SurfaceCameras.md#rustdoc-item-870)
  resource) and carry each surface's resolved camera in the frame
  ([`SurfaceView`](struct.SurfaceView.md#rustdoc-item-871)).

## Design

Everything here is plain data, so a frontend, the host and any renderer
agree on it without sharing a graphics type. A camera binding either names
a camera entity or carries the camera itself. The editor's own camera is
the second kind, which keeps it out of the world.

The frontend decides when each surface presents, because only it knows the
window system. Presenting into a Wayland subsurface before the compositor
asks for a frame blocks under Mesa's FIFO mode. So the frontend tells the
renderer, for each surface and each frame, whether that surface may present
now ([`crate::PillRenderer::set_surface_ready`](../api/trait.PillRenderer.md#rustdoc-item-200)), and the renderer skips a
surface that may not. One blocked surface never stalls another surface or
the event loop.

## Module contents

### Structs
- [`SurfaceCameras`](struct.SurfaceCameras.md#rustdoc-item-870) — The camera bindings of every surface, by surface id.
- [`SurfaceId`](struct.SurfaceId.md#rustdoc-item-187) — One surface a renderer draws into, unique within that renderer.
- [`SurfaceOptions`](struct.SurfaceOptions.md#rustdoc-item-199) — Creation options of one surface.
- [`SurfaceView`](struct.SurfaceView.md#rustdoc-item-871) — The camera one surface draws through this frame.

### Enums
- [`CameraBinding`](enum.CameraBinding.md#rustdoc-item-966) — Which camera draws into a surface.
- [`PresentPreference`](enum.PresentPreference.md#rustdoc-item-1110) — How a surface would like to present.

### Functions
- [`resolve_camera_binding`](fn.resolve_camera_binding.md#rustdoc-item-1291) — Finds the camera a binding names among the world's cameras.
