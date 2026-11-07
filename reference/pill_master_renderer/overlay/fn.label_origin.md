<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1475"></a>

# Function `pill_master_renderer::overlay::label_origin`

```rust
pub(in overlay) fn label_origin(anchor: pill_engine::LabelAnchor, view_projection: &pill_core::math::Matrix4f, viewport: crate::components::RenderViewport) -> Option<(f32, f32)>;
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:1546`

Where a label's text starts, in surface pixels: a screen anchor as given,
a world anchor projected through the camera into the viewport. `None` for
a world point behind the camera.
