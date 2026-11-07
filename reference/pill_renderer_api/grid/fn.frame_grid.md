<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-892"></a>

# Function `pill_renderer_api::grid::frame_grid`

```rust
pub fn frame_grid(surface_cameras: &crate::SurfaceCameras) -> Option<f32>;
```

Source: `rendering\pill_renderer_api\src\grid.rs:84`

Returns the grid spacing one frame draws, or `None` when it draws no grid.

A surface draws the grid when the grid is on and the surface is bound to a
view camera. Those surfaces are the ones [`editor_view_surfaces`](fn.editor_view_surfaces.md#rustdoc-item-891) returns,
so this function answers only the spacing. It returns `None` when the grid
is off or when no surface is bound to a view camera. A cell size that is
not a positive, finite number falls back to the default.
