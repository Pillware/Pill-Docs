<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-297"></a>

# Module `pill_renderer_api::components::camera`

Visibility: `{'restricted': {'parent': 300, 'path': '::components'}}` · Source: `rendering\pill_renderer_api\src\components\camera.rs:1`

The camera a frame renders through.

## Responsibilities

- Define [`CameraComponent`](struct.CameraComponent.md#rustdoc-item-241), the component holding the perspective settings
  the renderer builds its projection matrix from.

## Design

The camera is an ordinary scene component. It is shared, so the host, a
project and the managed side all see the same one. It is persistable, so its
values are saved with a scene and survive a reload. Its shared name is
pinned rather than derived from the module path; see [`crate::components`](../index.md#rustdoc-item-300).

**Renderer contract.** [`crate::frame::RenderFrame`](../../frame/struct.RenderFrame.md#rustdoc-item-188) carries this camera on
every surface it draws through. That is why the component stays in
`pill_renderer_api` for every renderer, unlike a renderer's own components,
which live in that renderer's data crate.

## Module contents

### Structs
- [`CameraComponent`](struct.CameraComponent.md#rustdoc-item-241) — A perspective camera: the renderer builds its projection matrix from it and

### Functions
- [`__pill_register_CameraComponent`](fn.__pill_register_CameraComponent.md#rustdoc-item-295) — Registers this component into the world; used by the artifact-wide
- [`register`](fn.register.md#rustdoc-item-299) — Registers [`CameraComponent`] and its field layout with the world.
