<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1505"></a>

# Function `pill_master_renderer::overlay::clip_polygon_to_near`

```rust
pub(in overlay) fn clip_polygon_to_near(polygon: &[([f32; 4], [f32; 3])]) -> Vec<([f32; 4], [f32; 3])>;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:1319`

A polygon clipped to the camera's near side, every vertex keeping the
barycentric corner it stands for.
