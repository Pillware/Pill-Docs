<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1460"></a>

# Function `pill_master_renderer::overlay::line_quad`

```rust
pub(in overlay) fn line_quad(start: [f32; 3], end: [f32; 3], view_projection: &pill_core::math::Matrix4f, viewport_size: (f32, f32), offset: f32) -> Option<[[f32; 4]; 6]>;
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:1215`

The six clip-space corners of the quad covering `start`-`end`, widened by
`offset` pixels on each side. Returns `None` when the segment is behind the
camera or shorter than a pixel on screen.
