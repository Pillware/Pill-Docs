<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2368"></a>

# Function `pill_master_renderer::resources::renderer_camera::sanitize_projection`

```rust
pub(in resources::renderer_camera) fn sanitize_projection(camera_component: &crate::components::CameraComponent) -> (f32, f32, f32, Option<String>);
```

Visibility: `{'restricted': {'parent': 2230, 'path': '::resources::renderer_camera'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_camera.rs:285`

Cleans up the camera's projection inputs and names every value it replaced.

`perspective` divides by `tan(fov / 2)` and by `far - near`, so a field of
view of zero, a near plane that is not positive, or a far plane at or
inside the near one produces infinities and NaN values: a frame that draws
nothing, with no error to show for it.

An unusable field of view or near plane is replaced with the component's
default. An unusable far plane is replaced with the near plane plus the
default far distance, because a world may legitimately place its near plane
past the default far plane. The returned text names each replacement, so
the caller can report what it did.
