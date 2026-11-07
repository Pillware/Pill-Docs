<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1462"></a>

# Function `pill_master_renderer::overlay::clip_polygon_to_near`

```rust
pub(in overlay) fn clip_polygon_to_near(polygon: &[([f32; 4], [f32; 3])]) -> Vec<([f32; 4], [f32; 3])>;
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:1275`

A polygon clipped to the camera's near side, every vertex keeping the
barycentric corner it stands for.
