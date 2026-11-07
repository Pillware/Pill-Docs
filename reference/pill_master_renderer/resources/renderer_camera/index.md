<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2230"></a>

# Module `pill_master_renderer::resources::renderer_camera`

Visibility: `{'restricted': {'parent': 2227, 'path': '::resources'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_camera.rs:1`

The camera values the shaders read, and the GPU resources that carry them.

## Responsibilities

- Pack the camera's position, view-projection matrix and inverse
  view-projection matrix into the layout the shaders' `CameraParams`
  constant buffer expects ([`CameraParametersData`](struct.CameraParametersData.md#rustdoc-item-2286)).
- Replace each projection input that no perspective matrix can use, and
  name it in the report: a field of view outside `(0, 180)`, a near plane
  that is not positive, a far plane at or inside the near one. Without
  this, a matrix full of NaN values draws a blank frame with nothing to
  trace it to.
- Own the uniform buffer and the bind group that every shader reading the
  camera binds ([`RendererCamera`](struct.RendererCamera.md#rustdoc-item-26)).

## Design

The value and the GPU objects are separate: [`CameraParametersData`](struct.CameraParametersData.md#rustdoc-item-2286) is the
`#[repr(C)]` layout the shaders read, and [`RendererCamera`](struct.RendererCamera.md#rustdoc-item-26) is the buffer
and the bind group that hold it. The matrices are rebuilt from the camera
and transform components on every update instead of being tracked, so a
moved entity is always followed. The same pass replaces the projection
inputs that cannot be used and reports what it replaced. A replacement is
reported once per change rather than once per frame, so a value the game
never fixes does not fill the log.

## Module contents

### Structs
- [`CameraParametersData`](struct.CameraParametersData.md#rustdoc-item-2286) — The camera values the shaders read, in the layout of the HLSL
- [`RendererCamera`](struct.RendererCamera.md#rustdoc-item-26) — The GPU-side resources of one camera: its uniform values, the buffer those
- [`RendererCameraHandle`](struct.RendererCameraHandle.md#rustdoc-item-1920) — A typed handle for the slots of the map it was issued by.

### Functions
- [`sanitize_projection`](fn.sanitize_projection.md#rustdoc-item-2368) — Cleans up the camera's projection inputs and names every value it replaced.
