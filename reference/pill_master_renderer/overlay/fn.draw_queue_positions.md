<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1455"></a>

# Function `pill_master_renderer::overlay::draw_queue_positions`

```rust
pub(in overlay) fn draw_queue_positions<impl Iterator<Item = u32>: Iterator<Item = _>>(pass: &mut wgpu::RenderPass<'_>, overlay_frame: &OverlayFrame<'_>, positions: impl Iterator<Item = _>);
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:1122`

Draw each queue position's mesh as the instance at that position; runs of
consecutive positions sharing a mesh become one draw.
