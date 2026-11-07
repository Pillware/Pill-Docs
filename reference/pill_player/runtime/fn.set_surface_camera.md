<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-547"></a>

# Function `pill_player::runtime::set_surface_camera`

```rust
pub fn set_surface_camera(world: &mut pill_engine::World, id: pill_renderer_api::SurfaceId, binding: Option<pill_renderer_api::CameraBinding>);
```

Source: `hosting\pill_player\src\runtime.rs:616`

Writes `binding` for surface `id` into the world's
[`pill_renderer_api::SurfaceCameras`], creating the resource on first use.

Every driver with a renderer goes through here, so the binding lives where
the rendering system reads it.
