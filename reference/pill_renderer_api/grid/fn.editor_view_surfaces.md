<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-891"></a>

# Function `pill_renderer_api::grid::editor_view_surfaces`

```rust
pub fn editor_view_surfaces(surface_cameras: &crate::SurfaceCameras) -> Vec<crate::SurfaceId>;
```

Source: `rendering\pill_renderer_api\src\grid.rs:114`

Returns every surface bound to a view camera, whether or not the grid is on.

These are the surfaces an editor's own viewports draw through. They show
the grid. They also carry what the editor draws over the scene: the gizmo
handles and the selection outlines. Turning the grid off must not remove
them from the list. The frame carries the list once, as its editor views.
