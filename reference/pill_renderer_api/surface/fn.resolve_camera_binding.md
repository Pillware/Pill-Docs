<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1211"></a>

# Function `pill_renderer_api::surface::resolve_camera_binding`

```rust
pub fn resolve_camera_binding<impl IntoIterator<Item = (Entity, CameraComponent, TransformComponent)>: IntoIterator<Item = _>>(binding: &CameraBinding, cameras: impl IntoIterator<Item = _>) -> Option<SurfaceView>;
```

Source: `rendering\pill_renderer_api\src\surface.rs:141`

Finds the camera a binding names among the world's cameras.

`cameras` yields each camera entity with its camera and transform. A
[`CameraBinding::View`](enum.CameraBinding.md#rustdoc-item-895) resolves to itself. An entity binding resolves to
that entity's camera when the entity is in `cameras` and the camera is
enabled, and to `None` otherwise.
