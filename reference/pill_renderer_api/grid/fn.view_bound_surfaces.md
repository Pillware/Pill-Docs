<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-965"></a>

# Function `pill_renderer_api::grid::view_bound_surfaces`

```rust
pub(in grid) fn view_bound_surfaces(bindings: &std::collections::BTreeMap<crate::SurfaceId, crate::CameraBinding>) -> Vec<crate::SurfaceId>;
```

Visibility: `{'restricted': {'parent': 924, 'path': '::grid'}}` · Source: `rendering\pill_renderer_api\src\grid.rs:100`

Returns every surface bound to a view camera, in ascending id order.
